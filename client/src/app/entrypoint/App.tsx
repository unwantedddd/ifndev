import { RouterProvider } from "react-router";
import MainProviders from "../providers/MainProviders";
import router from "../routes/Routes";

const App = () => {
	return (
		<MainProviders>
			<RouterProvider router={router} />
		</MainProviders>
	);
};

export default App;
