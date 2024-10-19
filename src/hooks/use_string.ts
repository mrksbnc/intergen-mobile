export type StringHook = {
	isEmpty: (str: string) => boolean;
	capitalize: (str: string) => string;
};

export function useString(): StringHook {
	function isEmpty(str: string) {
		return !str || str.trim().length === 0;
	}

	function capitalize(str: string) {
		if (isEmpty(str)) return '';
		return str
			.split(' ')
			.map((word) => word[0].toUpperCase() + word.slice(1))
			.join(' ');
	}

	return { capitalize, isEmpty };
}
