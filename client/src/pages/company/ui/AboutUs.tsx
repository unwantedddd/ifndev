import { Logo } from "@/shared/ui/base";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {
    return (
        <div className="flex-1 bg-background text-foreground font-sans py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                    Meet the <span className="text-primary">Minds</span> Behind{' '}
                    <Logo className="inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-primary" />
                    .
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    We are a group of passionate developers, designers, and problem solvers
                    dedicated to building the best platform for the coding community.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background ring-2 ring-border group-hover:ring-primary transition-all duration-300">
                            <img
                                src="https://avatars.githubusercontent.com/u/122833839?v=4"
                                alt="Trisunov Yevhen"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                        Trisunov Yevhen
                    </h3>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                        Lead Frontend Engineer
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Passionate about React ecosystems and pixel-perfect UIs. Coffee enthusiast and mechanical keyboard collector.
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                        <Link to="https://github.com/unwantedddd" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaGithub size={16} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/trisunov-yevhen/" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaLinkedinIn size={16} />
                        </Link>
                        <Link to="https://t.me/unwanteddddd" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaTelegramPlane size={16} />
                        </Link>
                    </div>
                </div>

                <div className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background ring-2 ring-border group-hover:ring-primary transition-all duration-300">
                            <img
                                src="https://avatars.githubusercontent.com/u/76522707?v=4"
                                alt="Avdieiev Yehor"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                        Avdieiev Yehor
                    </h3>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                        Backend Architect
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Expert in distributed systems. Ensuring our servers stay cool while the code runs hot.
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                        <Link to="https://github.com/Zefir-13000" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaGithub size={16} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/avdieiev-yehor/" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaLinkedinIn size={16} />
                        </Link>
                        <Link to="https://t.me/zefir13000" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaTelegramPlane size={16} />
                        </Link>
                    </div>
                </div>

                <div className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background ring-2 ring-border group-hover:ring-primary transition-all duration-300">
                            <img
                                src="https://avatars.githubusercontent.com/u/84199800?v=4"
                                alt="Havryliuk Artem"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                        Havryliuk Artem
                    </h3>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                        DevOps & Security
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Keeping the infrastructure unbreakable. Believes that automation is the key to happiness.
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                        <Link to="https://github.com/ArteeCool" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaGithub size={16} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/artemhavryliuk/" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaLinkedinIn size={16} />
                        </Link>
                        <Link to="https://t.me/ArteeCool" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaTelegramPlane size={16} />
                        </Link>
                    </div>
                </div>

                <div className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background ring-2 ring-border group-hover:ring-primary transition-all duration-300">
                            <img
                                src="https://avatars.githubusercontent.com/u/125114056?v=4"
                                alt="Kovtun Maksym"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                        Kovtun Maksym
                    </h3>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                        Product Designer
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Turning complex user flows into intuitive experiences. Obsessed with typography and micro-interactions.
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                        <Link to="https://github.com/AmphibiDev" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaGithub size={16} />
                        </Link>
                        <Link to="https://t.me/i_am_acheron" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <FaTelegramPlane size={16} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;