import type { DeepType } from '@/types';

/**
 * Get a value of an object property/path even if it's nested
 */
export function getValueByPath<O, K extends keyof O | string>(
	obj: O,
	path: K,
	defaultValue?: DeepType<O, K>,
): DeepType<O, K> {
	if (!obj || typeof obj !== 'object') return obj as DeepType<O, K>;
	if (typeof path !== 'string') return obj as DeepType<O, K>;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const value: any = path
		.split('.')
		.reduce((o, i) => (typeof o !== 'undefined' ? o[i] : undefined), obj);

	return typeof value !== 'undefined' ? value : defaultValue;
}

export const isDefined = <T>(value: T | unknown | null): value is T =>
	value !== null && typeof value !== 'undefined';

export const blankIfUndefined = (value: string | null | undefined): string =>
	isDefined(value) ? (value as string) : '';
