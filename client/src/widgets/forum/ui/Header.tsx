import { Button, Logo } from "@/shared/ui/base";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-50 px-4">
      <div className="mx-auto max-w-7xl mt-4 p-4 pl-6 bg-card rounded-2xl flex items-center justify-between shadow-xl border border-border">
        
        <Link to="/" className="mr-8">
          <Logo />
        </Link>

        <div className="flex items-center gap-6 flex-1 justify-end">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 mr-4">
              <li>
                <Link
                  to="/articles"
                  className="text-foreground hover:text-primary transition-colors text-base font-medium"
                >
                  Articles
                </Link>
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

          <div className="relative hidden md:block w-64">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <FaSearch className="text-muted-foreground" />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center gap-4 pl-4">
             <Link to="/auth/log-in">
              <Button
                className="rounded-lg px-6 font-medium shadow-sm cursor-pointer"
                variant="primary"
                size="large"
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