import { Button, Logo } from "@/shared/ui/base";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { useThemeStore } from "@/shared/model/";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className="w-full sticky top-0 z-50 px-4 py-2">
      <div className="mx-auto max-w-6xl p-3 bg-card/90 backdrop-blur-md rounded-xl flex items-center justify-between shadow-lg border border-border/50">

        <Link to="/" className="shrink-0 mr-8 transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <div className="flex items-center flex-1 justify-end gap-8">

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li><Link to="/articles/test" className="text-muted-foreground hover:text-foreground transition-colors">Articles</Link></li>
              <li><Link to="/problems/test" className="text-muted-foreground hover:text-foreground transition-colors">Problems</Link></li>
              <li><Link to="/forum/test" className="text-muted-foreground hover:text-foreground transition-colors">Forums</Link></li>
            </ul>
          </nav>

          <div className="relative hidden lg:block w-72">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <FaSearch className="text-muted-foreground/80 text-xs" />
            </div>
            <input
              type="text"
              placeholder="Search articles, problems..."
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-input/50 bg-secondary/20 text-sm placeholder:text-muted-foreground/80 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          <div className="flex items-center gap-4">

            <div className="flex items-center gap-3 bg-secondary/50 p-1.5 pl-2.5 pr-1.5 rounded-full border border-border/50">
              <FaSun className={`h-4 w-4 transition-all ${!isDark ? 'text-amber-500 scale-110 drop-shadow-sm' : 'text-muted-foreground/70'}`} />
              <Switch
                checked={isDark}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-primary shadow-sm"
                aria-label="Toggle theme"
              />
              <FaMoon className={`h-4 w-4 transition-all ml-0.5 ${isDark ? 'text-blue-400 scale-110 drop-shadow-sm' : 'text-muted-foreground/70'}`} />
            </div>

            <div className="h-8 w-px bg-border/50 hidden sm:block"></div>
            <Link to="/auth/log-in">
              <Button className="rounded-lg px-6 h-10 font-medium shadow-sm active:scale-95 transition-all" variant="primary">
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