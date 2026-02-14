import { Button, Logo } from "@/shared/ui/base";
import { Link, NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className="w-full sticky top-0 z-50 px-4">
            <div className="mx-auto max-w-6xl p-3 mt-4 bg-card rounded-xl flex items-center justify-between shadow-2xl border border-border">

                <Link to="/" className="mr-4">
                    <Logo />
                </Link>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            <li>
                                <NavLink
                                    to="/articles/test"
                                    className={({ isActive }) =>
                                        `text-lg font-medium transition-colors ${isActive
                                            ? "text-primary"
                                            : "text-foreground hover:text-primary"
                                        }`
                                    }
                                >
                                    Articles
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                    to="/problems/test"
                                    className="text-foreground hover:text-primary transition-colors text-base font-medium"
                                >
                                    Problems
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/forum/test"
                                    className="text-foreground hover:text-primary transition-colors text-base font-medium"
                                >
                                    Forums
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="relative hidden md:block w-56">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <FaSearch className="text-muted-foreground text-xs" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search article..."
                            className="w-full h-9 pl-9 pr-4 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all shadow-sm"
                        />
                    </div>

                    <div className="pl-2 border-l border-border md:border-none">
                        <Link to="/auth/log-in">
                            <Button
                                className="rounded-md px-5 h-9 text-base font-medium cursor-pointer shadow-sm"
                                variant="primary"
                            >
                                Log In
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;