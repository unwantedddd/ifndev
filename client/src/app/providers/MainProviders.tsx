import type { FC, ReactNode } from "react";
import QueryProvider from "./QueryProvider";

interface MainProvidersProps {
	children: ReactNode;
}

const MainProviders: FC<MainProvidersProps> = ({ children }) => {
	return <QueryProvider>{children}</QueryProvider>;
};

export default MainProviders;
