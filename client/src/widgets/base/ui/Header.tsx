import { Button, Logo } from "@/shared/ui/base";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w-full sticky top-0">
      <div className="mx-auto max-w-4xl p-4 mt-4 bg-card rounded-lg flex items-center justify-between shadow-2xl">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/articles"
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/problems/test"
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              Problems
            </Link>
          </li>
          <li>
            <Link
              to="/forum/test"
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              Forums
            </Link>
          </li>
          <li>
            <Link
              to="/auth/log-in"
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              <Button
                className="rounded-md px-6 text-lg font-medium cursor-pointer"
                variant="primary"
                size="large"
              >
                Log In
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;