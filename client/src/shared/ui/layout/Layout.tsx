import type { FC, ReactNode } from "react";
import { Outlet } from "react-router";

interface LayoutProps {
	header: ReactNode;
	footer: ReactNode;
}

const Layout: FC<LayoutProps> = ({ header, footer }) => {
	return (
		<div className="min-h-screen flex flex-col ">
			<div className="flex flex-col gap-10">
			{header}
				<Outlet />
			</div>
			{footer}
		</div>
	);
};

export default Layout;
