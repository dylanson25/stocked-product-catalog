<script setup lang="ts">
import { computed } from 'vue';
import type { DButtonProps } from './props';
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
</script>
<template>
	<component
		:is="computedTag"
		:disabled="computedDisabled"
		:type="computedNativeType"
	></component>
</template>
<!--
/*
  expanded  w-full
	rounded rounded-full
  <div>
		<button class="btn m-1 btn--small">Small Button</button>
		<button class="btn m-1 btn--medium">Medium Button</button>
		<button class="btn m-1 btn--large">Large Button</button>
		<button class="--disabled btn m-1 btn--large">Large Button</button>
		<div>
			<button class="btn btn--disabled m-1">Button</button>
			<button class="btn btn--primary m-1">Button</button>
			<button class="btn btn--secondary m-1">Button</button>
			<button class="btn btn--success m-1">Button</button>
			<button class="btn btn--info m-1">Button</button>
			<button class="btn btn--warning m-1">Button</button>
			<button class="btn btn--danger m-1">Button</button>
			<button class="btn btn--gray m-1">Button</button>
		</div>
		<div>
			<button class="btn btn--primary btn--outlined m-1">Button</button>
			<button class="btn btn--outlined btn--secondary m-1">Button</button>
			<button class="btn btn--outlined btn--success m-1">Button</button>
			<button class="btn btn--outlined btn--info m-1">Button</button>
			<button class="btn btn--outlined btn--warning m-1">Button</button>
			<button class="btn btn--outlined btn--danger m-1">Button</button>
			<button class="btn btn--outlined btn--gray m-1">Button</button>
		</div>
		<div>
			<button class="btn--inverted btn btn--primary m-1">Button</button>
			<button class="btn--inverted btn btn--secondary m-1">Button</button>
			<button class="btn--inverted btn btn--success m-1">Button</button>
			<button class="btn--inverted btn btn--info m-1">Button</button>
			<button class="btn--inverted btn btn--warning m-1">Button</button>
			<button class="btn--inverted btn btn--danger m-1">Button</button>
			<button class="btn--inverted btn btn--gray m-1">Button</button>
		</div>
	</div>
-->
