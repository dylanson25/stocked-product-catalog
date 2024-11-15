import type { DynamicComponent, ClassDefinition } from '@/types';

export interface ComponentsOptions {
	button?: Partial<{
		/** Button tag name */
		tag: DynamicComponent;
		/** Color variant of the control */
		variant: string;
		/** Size of the control */
		size: string;
		/** Apply a hight border radius **/
		rounded: boolean;
		/** Accessibility Role attribute to be passed to the button. */
		ariaRole: string;
		/** Class of the root element */
		rootClass: ClassDefinition;
		/** Class of the button elements wrapper */
		wrapperClass: ClassDefinition;
		/** Class of the button when outlined */
		outlinedClass: ClassDefinition;
		/** Class of the button with loading */
		loadingClass: ClassDefinition;
		/** Class of the button when inverted */
		invertedClass: ClassDefinition;
		/** Class of the button when expanded */
		expandedClass: ClassDefinition;
		/** Class of the button when rounded */
		roundedClass: ClassDefinition;
		/** Class of the button when disabled */
		disabledClass: ClassDefinition;
		/** Class of the button label */
		labelClass: ClassDefinition;
		/** Class of the button size */
		sizeClass: ClassDefinition;
		/** Class of the button variant */
		variantClass: ClassDefinition;
	}>;
}
