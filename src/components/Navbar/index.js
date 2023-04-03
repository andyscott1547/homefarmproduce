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
import { Link } from "react-router-dom";

const Navbar = () => {
return (
	<>
	<Box>
	<Logo>
		<Link to="/home">
		<img src={icon} alt="Home Farm Produce" style={{height:100, width:350}}/>
		</Link>
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
