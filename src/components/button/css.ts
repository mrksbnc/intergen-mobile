import { CssUtils } from '@/utils/css_utils';
import { ButtonSize, ButtonType, ButtonVariant } from './constants';

let instance: ButtonCss | null = null;

export class ButtonCss {
	static get instance() {
		if (!instance) {
			instance = new ButtonCss();
		}
		return instance;
	}

	private readonly defaultCss: string =
		/*tw*/ 'w-full flex-row items-center justify-center uppercase shadow-lg';

	private readonly variants: Record<ButtonVariant, string> = {
		[ButtonVariant.Primary]: /*tw*/ 'bg-blue-700',
		[ButtonVariant.Black]: /*tw*/ 'bg-black',
		[ButtonVariant.Secondary]: /*tw*/ 'bg-transparent',
		[ButtonVariant.Danger]: /*tw*/ 'bg-red-600',
		[ButtonVariant.Warning]: /*tw*/ 'bg-yellow-600',
		[ButtonVariant.Success]: /*tw*/ 'bg-green-600',
		[ButtonVariant.OutlinePrimary]: /*tw*/ 'bg-transparent border-[1px] border-blue-700',
		[ButtonVariant.OutlineBlack]: /*tw*/ 'bg-transparent border-[1px] border-black',
		[ButtonVariant.OutlineSecondary]: /*tw*/ 'bg-transparent border-[1px] border-gray-400',
		[ButtonVariant.OutlineSuccess]: /*tw*/ 'bg-transparent border-[1px] border-green-600',
		[ButtonVariant.OutlineDanger]: /*tw*/ 'bg-transparent border-[1px] border-red-600',
		[ButtonVariant.OutlineWarning]: /*tw*/ 'bg-transparent border-[1px] border-yellow-600',
		[ButtonVariant.Link]: /*tw*/ 'bg-transparent border-0',
		[ButtonVariant.LinkBlack]: /*tw*/ 'bg-transparent border-0',
		[ButtonVariant.LinkSecondary]: /*tw*/ 'bg-transparent border-0',
		[ButtonVariant.LinkDanger]: /*tw*/ 'bg-transparent border-0',
		[ButtonVariant.LinkWarning]: /*tw*/ 'bg-transparent border-0',
		[ButtonVariant.LinkSuccess]: /*tw*/ 'bg-transparent border-0',
	};

	private readonly variantTextColors: Record<ButtonVariant, string> = {
		[ButtonVariant.Primary]: /*tw*/ 'text-white',
		[ButtonVariant.Black]: /*tw*/ 'text-white',
		[ButtonVariant.Secondary]: /*tw*/ 'text-gray-300',
		[ButtonVariant.Danger]: /*tw*/ 'text-white',
		[ButtonVariant.Warning]: /*tw*/ 'text-white',
		[ButtonVariant.Success]: /*tw*/ 'text-white',
		[ButtonVariant.OutlinePrimary]: /*tw*/ 'text-blue-700',
		[ButtonVariant.OutlineBlack]: /*tw*/ 'text-black',
		[ButtonVariant.OutlineSecondary]: /*tw*/ 'text-gray-300',
		[ButtonVariant.OutlineSuccess]: /*tw*/ 'text-green-600',
		[ButtonVariant.OutlineDanger]: /*tw*/ 'text-red-600',
		[ButtonVariant.OutlineWarning]: /*tw*/ 'text-yellow-600',
		[ButtonVariant.Link]: /*tw*/ 'text-blue-700',
		[ButtonVariant.LinkBlack]: /*tw*/ 'text-black',
		[ButtonVariant.LinkSecondary]: /*tw*/ 'text-gray-400',
		[ButtonVariant.LinkDanger]: /*tw*/ 'text-red-600',
		[ButtonVariant.LinkWarning]: /*tw*/ 'text-yellow-600',
		[ButtonVariant.LinkSuccess]: /*tw*/ 'text-green-600',
	};

	private readonly textSizes: Record<string, string> = {
		[ButtonSize.Small]: /*tw*/ 'text-sm',
		[ButtonSize.Medium]: /*tw*/ 'text-md',
		[ButtonSize.Large]: /*tw*/ 'text-base',
	};

	private readonly sizes: Record<string, string> = {
		[ButtonSize.Small]: /*tw*/ 'p-2',
		[ButtonSize.Medium]: /*tw*/ 'p-3',
		[ButtonSize.Large]: /*tw*/ 'p-6',
	};

	private readonly types: Record<string, string> = {
		[ButtonType.Square]: /*tw*/ 'rounded-none',
		[ButtonType.Rounded]: /*tw*/ 'rounded-lg',
		[ButtonType.Pill]: /*tw*/ 'rounded-full',
	};

	public getCss(
		variant: ButtonVariant = ButtonVariant.Primary,
		size: ButtonSize = ButtonSize.Medium,
		type: ButtonType = ButtonType.Rounded,
	): string {
		return CssUtils.instance.concat(
			this.defaultCss,
			this.variants[variant],
			this.sizes[size],
			this.types[type],
		);
	}

	public getVariantTextColor(variant: ButtonVariant): string {
		return CssUtils.instance.concat(
			'font-semibold',
			this.variantTextColors[variant],
			this.textSizes[ButtonSize.Medium],
		);
	}
}
