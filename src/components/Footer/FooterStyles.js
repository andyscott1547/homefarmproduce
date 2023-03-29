import styled from 'styled-components';

export const Box = styled.div`
padding: 10px;
background: black;
position: sticky;
bottom: 0;
left: 0;
width: 100%;
justify-content: center;
align-items: center;

@media screen and (width: 100%) {
	display: block;
	position: sticky;
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


// @media (max-width: auto) {
// 	grid-template-columns: repeat(auto-fill,
// 						minmax(200px, 1fr));
// }
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;