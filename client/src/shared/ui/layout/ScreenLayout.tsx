import type { FC, ReactNode } from "react";
import { Outlet } from "react-router";

interface ScreenLayoutProps {
	header: ReactNode;
	footer: ReactNode;
}

const ScreenLayout: FC<ScreenLayoutProps> = ({ header, footer }) => {
	return (
		<div className="h-screen flex flex-col">
			{header}
			<Outlet />
			{footer}
		</div>
	);
};

export default ScreenLayout;
