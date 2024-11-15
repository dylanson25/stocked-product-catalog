import {
	ref,
	watch,
	getCurrentInstance,
	getCurrentScope,
	onScopeDispose,
	effectScope,
	toValue,
	isRef,
	type Ref,
	type MaybeRefOrGetter,
	type ComponentInternalInstance,
} from 'vue';

import { getOptions } from '@/utils/config';
import { blankIfUndefined, getValueByPath, isDefined } from '@/utils/helper';

import type {
	ClassBind,
	ClassDefinition,
	ComponentClass,
	ComponentProps,
} from '@/types';

type ComputedClass = readonly [
	className: string,
	defaultClass: string,
	suffix?: MaybeRefOrGetter<string | undefined | null>,
	apply?: MaybeRefOrGetter<boolean | null>,
];

export function defineClasses(...args: [...ComputedClass[]]): Ref<ClassBind[]>;
export function defineClasses(
	...args: ComputedClass | [...ComputedClass[]]
): Ref<ClassBind[]> {
	// get class defintion list based on options are given or not
	const classDefinitions = (
		Array.isArray(args.at(-1)) ? args : args.slice(0, -1)
	) as ComputedClass[];

	const vm = getCurrentInstance();

	if (!vm) {
		throw new Error(
			'defineClasses must be called within a component setup function.',
		);
	}

	// create an effect scope object to capture reactive effects
	const scope = effectScope();

	// check if there is a current active effect scope
	if (getCurrentScope())
		// Registers a dispose callback on the current active effect scope.
		// The callback will be invoked when the associated effect scope is stopped.
		onScopeDispose(() => {
			// stop all effects when appropriate
			if (scope) scope.stop();
		});

	const classes = ref<ClassBind[]>([]);

	classes.value = classDefinitions.map((definition, index) => {
		const className = definition[0];
		const defaultClass = definition[1];
		const suffix = definition[2];
		const apply = definition[3];

		function getClassBind(): ClassBind {
			const computedClass = computeClass(
				vm!,
				className,
				defaultClass,
				toValue(suffix) || undefined,
			);
			const applied = !isDefined(apply) || toValue(apply);

			return { [computedClass]: applied as boolean };
		}

		scope.run(() => {
			watch(
				() => vm.proxy?.[className],
				() => {
					const classBind = getClassBind();

					classes.value[index] = classBind;
				},
			);

			if (isDefined(suffix) && isRef(suffix)) {
				watch(suffix, (value, oldValue) => {
					// only recompute when value has really changed
					if (value === oldValue) return;
					// recompute the class bind property
					const classBind = getClassBind();

					// update class binding property by class index
					classes.value[index] = classBind;
				});
			}

			// if apply is defined, watch apply changed and update apply state (no need of recalculation here)
			if (isDefined(apply) && isRef(apply)) {
				watch(apply, (applied, oldValue) => {
					// only change apply when value has really changed
					if (applied === oldValue) return;
					// get class binding property by class index
					const classBind = classes.value[index];
					// update the apply class binding state
					Object.keys(classBind).forEach((key) => (classBind[key] = applied));
					// update the class binding property by class index
					classes.value[index] = classBind;
				});
			}
		});

		return getClassBind();
	});

	return classes;
}
function computeClass(
	vm: ComponentInternalInstance,
	field: string,
	defaultValue: string,
	suffix = '',
): string {
	const props = getProps(vm);

	const componentKey: string = vm.proxy?.$options.configField;
	if (!componentKey)
		throw new Error("component must define the 'configField' option.");

	const config = getOptions();

	const globalClass: ClassDefinition | undefined =
		(getValueByPath(
			config,
			`${componentKey}.${field}.class`,
			'',
		) as ClassDefinition) ||
		(getValueByPath(
			config,
			`${componentKey}.${field}.class`,
			'',
		) as ClassDefinition);

	let localClass: ComponentClass | unknown = getValueByPath(props, field);

	if (Array.isArray(localClass)) localClass.join(' ');
	if (typeof localClass === 'function') {
		const props = getProps(vm);
		localClass = localClass(suffix, props);
	} else {
		localClass = suffixProcessor(localClass as string, suffix);
	}

	if (defaultValue.includes('{*}')) {
		defaultValue = defaultValue.replace(/\{\*\}/g, blankIfUndefined(suffix));
	} else {
		defaultValue = defaultValue + blankIfUndefined(suffix);
	}

	const appliedClasses = (
		`${defaultValue} ` +
		`${blankIfUndefined(globalClass)}` +
		`${blankIfUndefined(localClass)}`
	)
		.trim()
		.replace(/\s\s+/g, ' ');

	return appliedClasses;
}

function suffixProcessor(input: string, suffix: string) {
	return blankIfUndefined(input)
		.split(' ')
		.filter((cls) => cls.length > 0)
		.map((cls) => cls + blankIfUndefined(suffix))
		.join(' ');
}

const getProps = (vm: ComponentInternalInstance): ComponentProps => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let props = (vm.proxy?.$props || {}) as { [key: string]: any };

	props = Object.keys(props)
		.filter((key) => key.endsWith('Props'))
		.map((key) => props[key])
		.reduce((a, b) => ({ ...a, ...b }), props);

	return props;
};
