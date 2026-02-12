import { Layout, ScreenLayout } from "@/shared/ui/layout";
import { BaseFooter, BaseHeader } from "@/widgets/base";
import { ForumHeader } from "@/widgets/forum";

export const HomeLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);

export const AuthLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);

export const PlaygroundLayout = () => (
	<ScreenLayout header={<BaseHeader />} footer={<BaseFooter />} />
);

export const ForumLayout = () => (
	<Layout header={<ForumHeader />} footer={<BaseFooter />} />
);

export const ProblemsLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);

export const CompanyLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);

export const ResourcesLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);

export const ProductLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);