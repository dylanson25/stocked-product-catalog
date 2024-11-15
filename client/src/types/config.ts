export type ComponentClass = string | Array<string> | ClassFunction;

export type ClassObject = {
	class: ComponentClass;
};

export type ComponentProps = Record<string, unknown>;

export type ClassDefinition = ComponentClass | ClassObject;

export type ClassFunction = (
	suffix: string,
	props: ComponentProps,
) => string | undefined;
