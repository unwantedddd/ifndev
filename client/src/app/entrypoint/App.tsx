import { RouterProvider } from "react-router";
import MainProviders from "../providers/MainProviders";
import router from "../routes/Routes";
import { useEffect } from "react";
import { useAuth } from "@/pages/auth/model/useAuth";

const AppContent = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-background", "text-foreground");
  }, []);

  return (
    <MainProviders>
      <AppContent />
    </MainProviders>
  );
};

export default App;
