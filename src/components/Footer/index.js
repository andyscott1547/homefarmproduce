import React from "react";
import { Link } from "react-router-dom";
import {
	faFacebook,
	faTwitter,
	faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
Box,
Container,
Row,
Column,
FooterLink,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
		<FooterLink>
			<Link to="/home">
			<FooterLink>
			<FontAwesomeIcon icon={faHouse} size="2x"/>
			</FooterLink>
			</Link>
		</FooterLink>
		</Column>
		<Column>
			<FooterLink href="https://www.facebook.com/HomeFarmProduce"
			className="facebook social">
			<FontAwesomeIcon icon={faFacebook} size="2x" />
			</FooterLink>
		</Column>
		<Column>
		<FooterLink href="https://twitter.com/PaulaWood5"
			className="twitter social">
			<FontAwesomeIcon icon={faTwitter} size="2x" />
			</FooterLink>
		</Column>
		<Column>
		<FooterLink href="https://www.instagram.com/homefarmproduce"
			className="twitter social">
			<FontAwesomeIcon icon={faInstagram} size="2x" />
		</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
