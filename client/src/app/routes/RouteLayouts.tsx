import { Layout, ScreenLayout } from "@/shared/ui/layout";
import { BaseFooter, BaseHeader } from "@/widgets/base";
import { ForumHeader } from "@/widgets/forum";
import { ArticlesHeader } from "@/widgets/articles";
import { ProblemsHeader } from "@/widgets/problems";

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
	<Layout header={<ProblemsHeader />} footer={<BaseFooter />} />
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

export const ArticlesLayout = () => (
	<Layout header={<ArticlesHeader />} footer={<BaseFooter />} />
);

export const PageNotFoundLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);

export const ProfileLayout = () => (
	<Layout header={<BaseHeader />} footer={<BaseFooter />} />
);