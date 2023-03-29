import React from "react";
import icon from "../images/icon.png";
import {
Box,
Container,
Row,
Column,
Logo,
HeaderLink,
} from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Box>
	<Logo>
		<a href="https://homefarmproduce.co.uk">
		<img src={icon} alt="icon" style={{height:100, width:350}}/>
		</a>
	</Logo>
	<Container>
		<Row>
		<Column>
			<HeaderLink to="/about" activestyle="true">
			About Us
			</HeaderLink>
		</Column>
		<Column>
			<HeaderLink to="/animals" activestyle="true">
				Our Animals
			</HeaderLink>
		</Column>
		<Column>
			<HeaderLink to="/catering" activestyle="true">
				Catering
			</HeaderLink>
		</Column>
		<Column>
			<HeaderLink to="/farmshop" activestyle="true">
				Farm Shop
			</HeaderLink>
		</Column>
		</Row>
	</Container>
	</Box>
	</>
);
};

export default Navbar;
