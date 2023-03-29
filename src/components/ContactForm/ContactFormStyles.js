import styled from 'styled-components';

export const Box = styled.div`
padding: 10px;
background: black;
color: white;
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

export const Button = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
max-width: auto;
`;

export const Contact = styled.div`
max-width: 75%;
max-height: auto;
padding: 10px 0;
margin: auto;
border-radius: 5px; 
border: solid 1px #ccc;
box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
background: #ebebeb; 
`;