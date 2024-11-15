<script setup lang="ts">
import { computed } from 'vue';
import type { DButtonProps } from './props';
import { defineClasses } from '@/composables/defineClasses';

defineOptions({
	isBaseComponent: true,
	name: 'DButton',
	configField: 'button',
});

const props = withDefaults(defineProps<DButtonProps>(), {
	tag: 'button',
	label: undefined,
	rounded: false,
	expanded: false,
	disabled: false,
	outlined: false,
	loading: false,
	inverted: false,
	type: 'button',
	ariaRole: 'button',
});

const computedTag = computed(() =>
	typeof props.disabled !== 'undefined' && props.disabled !== false
		? 'button'
		: props.tag,
);

const computedNativeType = computed(() =>
	props.tag === 'button' || props.tag === 'input' ? props.type : null,
);

const computedDisabled = computed(() => (props.disabled ? true : null));

const rootClasses = defineClasses(
	['rootClass', 'btn'],
	[
		'sizeClass',
		'btn--',
		computed(() => props.size),
		computed(() => !!props.size),
	],
	[
		'variantClass',
		'btn--',
		computed(() => props.variant),
		computed(() => !!props.variant),
	],
	[
		'outlinedClass',
		'btn--outlined',
		null,
		computed(() => props.outlined && !!props.variant),
	],
	[
		'invertedClass',
		'btn--inverted',
		null,
		computed(() => props.inverted && !!props.variant),
	],
	['loadingClass', 'btn--loading', null, computed(() => props.loading)],
	['disabledClass', 'btn--disabled', null, computed(() => props.disabled)],
	['expandedClass', 'w-full', null, computed(() => props.expanded)],
	['roundedClass', 'rounded-full', null, computed(() => props.rounded)],
);
const labelClasses = defineClasses(
	['labelClass', 'btn__label'],
	['roundedClass', 'w-full', null, true],
);
</script>
<template>
	<component
		:is="computedTag"
		:disabled="computedDisabled"
		:type="computedNativeType"
		:class="rootClasses"
	>
		<span :class="labelClasses"
			><slot>{{ label }}</slot></span
		>
	</component>
</template>
