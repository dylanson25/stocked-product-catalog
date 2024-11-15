import type { App, defineComponent } from 'vue';

export const registerComponent = (
	app: App,
	component: ReturnType<typeof defineComponent>,
): void => {
	app.component(component.name, component);
};
