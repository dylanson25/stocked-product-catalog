import type { Component } from 'vue';

export type DynamicComponent = string | object | CallableFunction | Component;

export type ClassBind = {
	[x: string]: boolean;
};

type TypeOfKey<T, K extends string> = K extends keyof T ? T[K] : unknown;

export type DeepType<T, K> = T extends object
	? K extends string
		? K extends `${infer F}.${infer R}`
			? DeepType<TypeOfKey<T, F>, R>
			: TypeOfKey<T, K>
		: T
	: T;
