// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionMap<M extends { [index: string]: any }> = {
	[K in keyof M]: M[K] extends undefined
		? {
				type: K;
		  }
		: {
				type: K;
				payload: M[K];
		  };
};
