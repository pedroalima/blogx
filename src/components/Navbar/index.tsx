import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link } from "react-router-dom";
import { NavWrapper } from "./style";

function Navbar() {
	return (
		<NavWrapper>
			<BottomNavigation showLabels>
				<Link to="/">
					<BottomNavigationAction label="Home" icon={<HomeIcon />} />
				</Link>
				<Link to="/new">
					<BottomNavigationAction label="NewPost" icon={<PostAddIcon />} />
				</Link>
			</BottomNavigation>
		</NavWrapper>
	);
}

export default Navbar;