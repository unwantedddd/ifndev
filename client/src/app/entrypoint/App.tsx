import { RouterProvider } from "react-router";
import MainProviders from "../providers/MainProviders";
import router from "../routes/Routes";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-background", "text-foreground");
  }, []);

  return (
    <MainProviders>
      <RouterProvider router={router} />
    </MainProviders>
  );
};

export default App;
