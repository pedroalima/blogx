// Style
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

// React Router Dom
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

// Routes
import Root from "./routes/Root";
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";

// Context
import { BlogProvider } from "./context/BlogContext";

function App() {
	return (
		<BlogProvider>
			<ThemeProvider theme={theme}>
				<RouterProvider router={createBrowserRouter(createRoutesFromElements(
					<Route path="/" element={ <Root /> }>
						<Route path="/" element={ <Home />} />
						<Route path="/new" element={<NewPost />} />
					</Route>
				))} />
				<GlobalStyle />
			</ThemeProvider>
		</BlogProvider>
	);
}

export default App;