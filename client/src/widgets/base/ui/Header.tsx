import { Logo } from "@/shared/ui/base";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";
import { Button } from "@/shared/ui/base";
import { Link } from "react-router";
import {
  FaMoon,
  FaSun,
  FaSearch,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUser
} from "react-icons/fa";
import { useThemeStore } from "@/shared/model/";
import { useAuth } from "@/pages/auth/model/useAuth";
import { useLogout } from "@/pages/auth/model/useLogOut";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';
  const { data, isAuthenticated } = useAuth();
  const { logout, isLoading } = useLogout();

  return (
    <div className="w-full sticky top-0 z-50 px-4 pt-4 pb-2">
      <div className="mx-auto max-w-6xl p-3 bg-card/80 backdrop-blur-md rounded-xl flex items-center justify-between shadow-lg border border-border/50">
        <Link to="/" className="shrink-0 mr-8 transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <div className="flex items-center flex-1 justify-end gap-8">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li><Link to="/articles" className="text-muted-foreground hover:text-foreground transition-colors">Articles</Link></li>
              <li><Link to="/problems" className="text-muted-foreground hover:text-foreground transition-colors">Problems</Link></li>
              <li><Link to="/forum" className="text-muted-foreground hover:text-foreground transition-colors">Forums</Link></li>
            </ul>
          </nav>

          <div className="relative hidden md:block w-56">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <FaSearch className="text-muted-foreground text-xs" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-9 pl-9 pr-4 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <div className="flex items-center gap-4 pl-4">

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 overflow-hidden border border-border/50 hover:border-primary/50 transition-all cursor-pointer">
                  <Avatar className="h-full w-full">
                    <AvatarImage src={isAuthenticated ? data?.avatar : ""} alt="User" />
                    <AvatarFallback className="bg-secondary text-muted-foreground">
                      <FaUserCircle className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-64 p-2 mr-4" align="end">
                <div className="grid gap-4 p-2">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none text-sm text-foreground">
                      {isAuthenticated ? (data?.user.username || data?.user.email) : "Guest User"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isAuthenticated ? `Welcome back, ${data?.user.username}!` : "Sign in to access all features."}
                    </p>
                  </div>

                  <div className="h-px bg-border/50" />
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-accent cursor-default">
                    <div className="flex items-center gap-2 text-sm">
                      {isDark ? <FaMoon className="text-blue-400" /> : <FaSun className="text-amber-500" />}
                      <span>Appearance</span>
                    </div>
                    <Switch
                      checked={isDark}
                      onCheckedChange={toggleTheme}
                      className="scale-75"
                    />
                  </div>

                  <div className="h-px bg-border/50" />

                  <div className="grid gap-1">
                    {!isAuthenticated ? (
                      <>
                        <Link to="/auth/log-in" className="w-full">
                          <div className="flex items-center gap-2 px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors cursor-pointer">
                            <FaSignInAlt className="h-3.5 w-3.5" />
                            Log In
                          </div>
                        </Link>
                        <Link to="/auth/sign-up" className="w-full">
                          <div className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-md transition-colors cursor-pointer">
                            <FaUserPlus className="h-3.5 w-3.5" />
                            Create Account
                          </div>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/profile" className="w-full">
                          <div className="flex items-center gap-2 px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors cursor-pointer">
                            <FaUser className="h-3.5 w-3.5" />
                            Profile
                          </div>
                        </Link>

                        <button
                          onClick={() => logout()}
                          disabled={isLoading}
                          className="flex w-full items-center gap-2 px-2 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors text-left"
                        >
                          <FaSignOutAlt className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
                          {isLoading ? "Exiting..." : "Log Out"}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;