let instance: CssUtils | null = null;

export class CssUtils {
	static get instance() {
		if (!instance) {
			instance = new CssUtils();
		}
		return instance;
	}

	concat(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}
}
