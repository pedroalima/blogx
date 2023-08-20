import { Home, PostAdd } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Button, ButtonsWrapper, Logo, NavWrapper } from "./style";

function Navbar() {
	return (
		<NavWrapper>
			<Logo>BlogX</Logo>
			<ButtonsWrapper>
				<NavLink to="/">
					<Button>
						<Home />
					</Button>
				</NavLink>
				<NavLink to="/new">
					<Button>
						<PostAdd />
					</Button>
				</NavLink>
			</ButtonsWrapper>
		</NavWrapper>
	);
}

export default Navbar;