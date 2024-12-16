import type { ButtonProps } from "@components/types";

export const Button = (props: ButtonProps) => {
	const { onClickFn, children } = props;
	return (
		<button
			onClick={() => {
				onClickFn();
			}}
			type="button"
			className="rounded-lg border p-3 text-slate-500 border-slate-500 transition hover:bg-slate-500 hover:text-gray-100 dark:text-gray-100 dark:border-gray-100 dark:hover:text-slate-800 dark:hover:bg-gray-100"
		>
			{children}
		</button>
	);
};
