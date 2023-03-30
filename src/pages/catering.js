import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Title, Intro, Overview, ImageRow, ImageColumn, ImageBox, Container } from "./PagesElements";


const Catering = () => {
return (
	<>
	<Navbar />
	<Title>
		Catering
	</Title>
	<Intro>
		<Overview>
		Thank you for considering using Home Farm catering for your special occasion. We offer bespoke catering, which we can tailor to your needs whether it is an office party, birthday, wedding or any other special occasion. <br/>
		<br/> Home Farm Produce is a little different to normal catering companies in the fact we aren’t just caters, we are also the farmers and the butchers. All of the pork and beef we use is our own, coming from our free range, rare breed pigs and grass fed beef.  We try to use as many small local businesses as possible when sourcing our other ingredients. Everything that can be homemade by ourselves is, giving full provenance and traceability from farm to fork. Menu items may change throughout the year depending on seasonal availability.
		</Overview>
	</Intro>
	<ImageBox>
		<Container>
		<ImageRow>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/buffet.jpg" alt="Buffet" style={{width:"100%", height:"70%", padding:"30px"}}/>
			</ImageColumn>
		</ImageRow>
		</Container>
	</ImageBox>
	<Footer />
	</>
);
};

export default Catering;
