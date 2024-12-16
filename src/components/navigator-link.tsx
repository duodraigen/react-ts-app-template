import { NavLink } from "react-router-dom";

import type { NavigatorLinkProps } from "@components/types";

export const NavigatorLink = (props: NavigatorLinkProps) => {
	const { children, target } = props;
	return (
		<NavLink
			to={target}
			className={({ isActive }) =>
				isActive
					? "transition font-semibold text-slate-800 dark:text-gray-100"
					: "hover:text-slate-500 transition font-semibold text-gray-400"
			}
		>
			{children}
		</NavLink>
	);
};
