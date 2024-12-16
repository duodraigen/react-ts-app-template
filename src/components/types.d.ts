import type { PropsWithChildren, ReactNode } from "react";

/**
 * Every component with children elements must extend the interface PropsWithChildren,
 * any other component with no children you just need to declare it as an interface
 */

export interface NavigatorLinkProps extends PropsWithChildren {
	target: string;
	children: ReactNode;
}

export interface ButtonProps extends PropsWithChildren {
	onClickFn: () => void;
	children: ReactNode;
}
