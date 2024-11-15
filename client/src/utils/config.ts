import { ref, toRaw } from 'vue';
import type { ComponentsOptions } from '@/components/types';

const globalOptions = ref<ComponentsOptions>({});

export const getOptions = (): ComponentsOptions => {
	return Object.assign({}, toRaw(globalOptions.value));
};
