import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="flex-1 bg-background text-foreground font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 w-full max-w-lg text-center space-y-8">
        <div className="relative">
          <h1 className="text-[120px] sm:text-[180px] font-bold text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="px-6 py-2 bg-card border border-border rounded-full shadow-sm">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  Page Not Found
                </span>
             </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Lost in the Code?
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/">
            <button className="h-11 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </button>
          </Link>

          <Link to="/problems/test">
            <button className="h-11 px-8 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors cursor-pointer flex items-center gap-2">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
               Solve Problems
            </button>
          </Link>
        </div>

      </div>

      <div className="absolute bottom-8 text-xs text-muted-foreground">
         Error Code: 404_NOT_FOUND
      </div>
    </div>
  );
};

export default NotFoundPage;