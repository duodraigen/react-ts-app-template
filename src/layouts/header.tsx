import type { PropsWithChildren } from "react";

export const HeaderLayout = ({ children }: PropsWithChildren) => {
	return (
		<header className="p-4 flex justify-between items-center sticky top-0 w-full bg-white dark:bg-slate-900 text-gray-100">
			{children}
		</header>
	);
};
