import type { App, Plugin } from 'vue';

import Button from './DButton.vue';

import { registerComponent } from '@/utils/plugins';

export default {
	install(app: App) {
		registerComponent(app, Button);
	},
} as Plugin;

export { Button as DButton };
