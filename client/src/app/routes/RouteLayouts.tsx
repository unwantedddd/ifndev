import Layout from "@/shared/ui/layout/Layout";
import { Footer as HomeFooter, Header as HomeHeader } from "@/widgets/home";

export const HomeLayout = () => (
	<Layout header={<HomeHeader />} footer={<HomeFooter />} />
);
