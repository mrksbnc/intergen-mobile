import { CssUtils } from '@/utils/css_utils';
import { InputSize, InputStyle, InputVariant } from './constants';

let instance: TextInputCss | null = null;

export class TextInputCss {
	static get instance() {
		if (!instance) {
			instance = new TextInputCss();
		}
		return instance;
	}

	private readonly defaultStyles: string = CssUtils.instance.concat('w-full');

	private readonly inputStyles: Record<InputStyle, string> = {
		[InputStyle.Default]: /*tw*/ 'border rounded-lg shadow-sm',
		[InputStyle.Underline]:
			/*tw*/ 'border-b focus:ring-0 focus:border-none focus:outline-none shadow-sm',
		[InputStyle.Filled]: /*tw*/ 'border rounded-lg shadow-sm',
	};

	private readonly inputVariantStyles: Record<InputVariant, Record<InputStyle, string>> = {
		[InputVariant.Default]: {
			[InputStyle.Default]: /* tw*/ 'border-gray-300 focus:border-gray-400 focus:ring-gray-300',
			[InputStyle.Underline]: /* tw*/ 'border-gray-300 focus:border-gray-400',
			[InputStyle.Filled]: /* tw*/ 'border-gray-300 focus:border-gray-400 bg-gray-100',
		},
		[InputVariant.Light]: {
			[InputStyle.Default]: /* tw*/ 'border-gray-200 focus:border-gray-300 focus:ring-gray-200',
			[InputStyle.Underline]: /* tw*/ 'border-gray-200 focus:border-gray-300',
			[InputStyle.Filled]: /* tw*/ 'border-gray-200 focus:border-gray-300 bg-gray-100',
		},
		[InputVariant.Dark]: {
			[InputStyle.Default]: /* tw*/ 'border-gray-900 focus:border-gray-800 focus:ring-gray-900',
			[InputStyle.Underline]: /* tw*/ 'border-gray-900 focus:border-gray-800',
			[InputStyle.Filled]: /* tw*/ 'border-gray-900 focus:border-gray-800 bg-gray-800',
		},
	};

	private readonly inputSizeStyles: Record<InputSize, string> = {
		[InputSize.Small]: /* tw*/ 'px-3 py-2 text-sm',
		[InputSize.Medium]: /* tw*/ 'px-4 py-3 text-sm',
		[InputSize.Large]: /* tw*/ 'px-5 py-4 text-base',
	};

	private readonly inputLabelTextStyles: Record<InputSize, string> = {
		[InputSize.Small]: /* tw*/ 'text-sm font-medium',
		[InputSize.Medium]: /* tw*/ 'text-md font-medium',
		[InputSize.Large]: /* tw*/ 'text-base font-medium',
	};

	private readonly inputLabelTextColor: Record<InputVariant, Record<InputStyle, string>> = {
		[InputVariant.Default]: {
			[InputStyle.Default]: /* tw*/ 'text-gray-950',
			[InputStyle.Underline]: /* tw*/ 'text-gray-950',
			[InputStyle.Filled]: /* tw*/ 'text-gray-950',
		},
		[InputVariant.Light]: {
			[InputStyle.Default]: /* tw*/ 'text-gray-950',
			[InputStyle.Underline]: /* tw*/ 'text-gray-950',
			[InputStyle.Filled]: /* tw*/ 'text-gray-950',
		},
		[InputVariant.Dark]: {
			[InputStyle.Default]: /* tw*/ 'text-gray-200',
			[InputStyle.Underline]: /* tw*/ 'text-gray-200',
			[InputStyle.Filled]: /* tw*/ 'text-gray-200',
		},
	};

	getInputLabelTextStyles(
		size: InputSize,
		variant: InputVariant = InputVariant.Default,
		style: InputStyle = InputStyle.Default,
	): string {
		return CssUtils.instance.concat(
			'pb-2',
			this.inputLabelTextStyles[size],
			this.inputLabelTextColor[variant][style],
		);
	}

	getInputDefaultStyles(variant: InputVariant, style: InputStyle, size: InputSize): string {
		return CssUtils.instance.concat(
			this.defaultStyles,
			this.inputStyles[style],
			this.inputVariantStyles[variant][style],
			this.inputSizeStyles[size],
		);
	}
}
