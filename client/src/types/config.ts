export type ComponentClass = string | Array<string> | ClassFunction;

export type ComponentProps = Record<string, unknown>;

export type ClassFunction = (
	suffix: string,
	props: ComponentProps,
) => string | undefined;
