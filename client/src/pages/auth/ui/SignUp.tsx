import { Logo } from '@/shared/ui/base';
import { Link } from 'react-router';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="flex-1 w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-sm p-8">
        <div className="flex flex-col items-center space-y-2 text-center mb-8">
          <Logo className="text-4xl text-primary mb-2" />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-foreground" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              placeholder="John Doe"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-foreground" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              placeholder="name@example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-foreground" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              placeholder="••••••••"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              type="password"
            />
          </div>

          <button className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring shadow cursor-pointer">
            Create account
          </button>
        </div>

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
          Already have an account?{" "}
          <Link to="/auth/log-in" className="underline underline-offset-4 hover:text-primary font-medium text-foreground">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUp;