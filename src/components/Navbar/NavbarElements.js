import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
padding: 10px;
background: #21421e;
position: relative;
top: 0;
left: 0;
width: 100%;
max-width: auto;
justify-content: center;
align-items: center;

@media screen and (width: 100%) {
	display: block;
	position: relative;
	top: 0;
	left: 0;
	transform: translate(-100%, 75%);
	font-size: 4rem;
	cursor: pointer;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: centre;
	max-width: auto;
	width: 100%;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
max-width: auto;
width: 100%;
`;

export const Logo = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
width: 100%;
max-width: auto;
margin-bottom: 10px;
`;

export const Row = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-auto-flow: column;
gap: 20px;

// grid-template-columns: repeat(auto-fill,
// 						minmax(185px, 1fr));
// grid-gap: 10px;
max-width: auto;

// @media (max-width: 1000px) {
// }
`;

export const HeaderLink = styled(Link)`
color: #fff;
margin-bottom: 10px;
font-size: 20px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;