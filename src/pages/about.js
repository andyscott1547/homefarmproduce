import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Title, Intro, Overview, ImageRow, ImageColumn, ImageBox, Container} from "./PagesElements";

const About = () => {
return (
	<>
	<Navbar />
	<Title>
		About Us
	</Title>
	<Intro>
		<Overview>
		The Heald family have been farming at Home farm in Grove for over 70 years. After years of farming traditionally, mainly producing high quality breeding and beef cattle. Matthew and Paula decided to diversify and begin selling the farms beef direct to the customer. Things quickly progressed and now they are producing beef, pork and chicken for the local market.
		</Overview>
	</Intro>
	<ImageBox>
	<Container>
		<ImageRow>
			<ImageColumn>
			<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/woodland.jpg" alt="HomeFarm Woodland" style={{width:"100%", height:"100%"}}/>
			</ImageColumn>
			<ImageColumn>
			<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/lake.jpg" alt="HomeFarm Lake" style={{width:"100%", height:"100%"}}/>
			</ImageColumn>
		</ImageRow>
	</Container>
	</ImageBox>
	<Intro>
		<Overview>
		Both Matthew and Paula share a love of food, the outdoors and animals and enjoy sharing this passion with their customers. All of their animals are reared as naturally as possible without the use of routine antibiotics and chemicals. They live in family groups and are able to display all of their natural behaviours in either the woodland or pasture. All of the animals live a stress-free life and this continues right up until their final moments. Matthew and Paula are lucky to have a local family run abattoir where they take the animals themselves and can be assured the animals are dispatched quickly and humanely.
		</Overview>
	</Intro>
	<Intro>
		<Overview>
		All of the meat Matthew and Paula produce is fully traceable, with the shortest of supply chains from farm to fork and they are happy for you to ask questions or even arrange a visit.
		</Overview>
	</Intro>
	<ImageBox>
	<Container>
		<ImageRow>
			<ImageColumn>
			<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/farmshoppond.jpg" alt="HomeFarm Shop Pond" style={{width:"100%", height:"80%"}}/>
			</ImageColumn>
			<ImageColumn>
			<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/tractor.jpg" alt="HomeFarm Tractor" style={{width:"100%", height:"80%"}}/>
			</ImageColumn>
		</ImageRow>
	</Container>
	</ImageBox>
	<Footer />
	</>
);
};

export default About;
