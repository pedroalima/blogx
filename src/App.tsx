// React Router Dom
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

// Routes
import Root from "./routes/Root";
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";

function App() {
	return (
		<RouterProvider router={createBrowserRouter(createRoutesFromElements(
			<Route path="/" element={ <Root /> }>
				<Route path="/" element={ <Home />} />
				<Route path="/new" element={<NewPost />} />
			</Route>
		))} />
	);
}

export default App;