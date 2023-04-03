// import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Fields from "./images/fields.jpg";
import Cows from "./images/cows.jpg";

export const Title = styled.div`
display: flex;
font-size: 45px;
padding: 10px;
position: relative;
top: 0;
background-color: black;
background-image: url(${Cows});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: white;
width: 100%;
max-width: auto;
height: 400px;
justify-content: center;
align-items: center;
text-align: center;
margin: 0 auto;

@media screen and (width: 100%) {
    height: 400px;
    display: flex;
	position: relative;
	transform: translate(-100%, 75%);
	font-size: 4rem;
	cursor: pointer;
}
`;

export const MainTitle = styled.div`
display: flex;
font-size: 45px;
padding: 10px;
position: relative;
top: 0;
background-color: black;
background-image: url(${Fields});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: white;
width: 100%;
max-width: auto;
height: 600px;
justify-content: center;
align-items: center;
text-align: center;
margin: 0 auto;

@media screen and (width: 100%) {
    height: 600px;
    display: flex;
	position: relative;
	transform: translate(-100%, 75%);
	font-size: 4rem;
	cursor: pointer;
}
`;

export const Welcome = styled.div`
display: flex;
font-size: 30px;
padding: 10px;
position: relative;
top: 0;
background-color: black;
color: white;
width: 100%;
max-width: auto;
justify-content: center;
align-items: center;
text-align: center;
margin: 0 auto;

@media screen and (width: 100%) {
    display: flex;
	position: relative;
	transform: translate(-100%, 75%);
	font-size: 4rem;
	cursor: pointer;
}
`;

export const Intro = styled.div`
display: flex;
list-style-position: inside;
font-size: 15px;
padding: 10px;
position: relative;
top: 0;
background-color: black;
color: white;
width: 100%;
max-width: auto;
justify-content: center;
align-items: center;
margin: 0 auto;

@media screen and (width: 100%) {
    display: flex;
	position: relative;
	transform: translate(-100%, 75%);
	font-size: 4rem;
	cursor: pointer;
}
`;

export const Overview = styled.div`
font-size: 15px;
color: white;
width: 80%;
text-align: center;
margin: 10px auto;
}
`;

export const Box = styled.div`
padding: 10px;
background: White;
position: relative;
bottom: 0;
left: 0;
width: 100%;
justify-content: center;
align-items: center;

@media screen and (width: 100%) {
	display: block;
	position: relative;
	bottom: 0;
	left: 0;
	transform: translate(-100%, 75%);
	font-size: 4rem;
	cursor: pointer;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: auto;
	width: 100%;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
max-width: auto;
`;

export const Row = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-auto-flow: column;
gap: 20px;


@media (max-width: auto) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const ImageBox = styled.div`
padding: 10px;
background: black;
position: relative;
bottom: 0;
left: 0;
width: 100%;
justify-content: center;
align-items: center;

@media screen and (width: 100%) {
	display: block;
	position: relative;
	bottom: 0;
	left: 0;
	transform: translate(-100%, 75%);
	font-size: 4rem;
	cursor: pointer;
}
`;

export const ImageRow = styled.div`
display: flex;
`;

export const ImageColumn = styled.div`
flex: 33.33%;
padding: 10px;
`;