import { Layout, ScreenLayout } from "@/shared/ui/layout";
import { BaseFooter, BaseHeader } from "@/widgets/base";
import { HomeFooter, HomeHeader } from "@/widgets/home";

export const HomeLayout = () => (
	<Layout header={<HomeHeader />} footer={<HomeFooter />} />
);

export const AuthLayout = () => (
	<Layout header={<HomeHeader />} footer={<HomeFooter />} />
);

export const PlaygroundLayout = () => (
	<ScreenLayout header={<BaseHeader />} footer={<BaseFooter />} />
);
