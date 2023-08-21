import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { MainWrapper } from "./style";

function Root() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<MainWrapper>
				<Outlet />
			</MainWrapper>
		</>
	);
}

export default Root;