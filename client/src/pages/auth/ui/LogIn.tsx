import { Logo } from '@/shared/ui/base';
import { Link, useNavigate } from 'react-router';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLogIn } from '../model/useLogIn';

const LogIn = () => {
  const logIn = useLogIn();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      await logIn.mutateAsync({
        email: String(data["email"] ?? ""),
        password: String(data["password"] ?? ""),
      });
      navigate("/");
    } catch (error) {
      console.error("Error during log in:", error);
    }
  };

  return (
    <div className="flex-1 w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-sm p-8">
        <div className="flex flex-col items-center space-y-2 text-center mb-8">
          <Logo className="text-4xl text-primary mb-2" />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-foreground" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              id="email"
              placeholder="name@example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none text-foreground" htmlFor="password">
                Password
              </label>
              <a href="/forgot-password" className="text-xs font-medium text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              name="password"
              id="password"
              placeholder="••••••••"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              type="password"
            />
          </div>

          <button type="submit" className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring shadow cursor-pointer">
            Sign In
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
            <svg className="mr-2 h-4 w-4">
              <FaGithub />
            </svg>
            GitHub
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <FaGoogle />
              Google
            </div>
          </button>
        </div>

        <p className="px-8 text-center text-sm text-muted-foreground mt-8">
          Don't have an account?{" "}
          <Link to="/auth/sign-up" className="underline underline-offset-4 hover:text-primary font-medium text-foreground">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;