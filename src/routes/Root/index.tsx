import { Outlet } from "react-router-dom";

function Root() {
	return (
		<>
			<header>
				<h1>blogX</h1>
			</header>
			<Outlet />
		</>
	);
}

export default Root;