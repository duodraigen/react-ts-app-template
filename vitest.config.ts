/// <reference types="vitest" />
import bundlerConf from "./vite.config";

const { base, resolve } = bundlerConf;

export default {
	base,
	resolve,

	test: {
		environment: "jsdom",

		browser: {
			enabled: true,
			name: "firefox",
			provider: "preview",
			providerOptions: {
				launch: {
					devTools: true,
				},
			},
		},

		/**
		 * Type checking with tsc and vue-tsc is a
		 * currently experimental feature.
		 * v-2.1.8
		 * */
		typecheck: {
			enabled: true,
			checker: "tsc",
		},
	},
};
