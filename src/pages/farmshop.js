import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Title, Intro, Overview, ImageRow, ImageColumn, ImageBox, Container } from "./PagesElements";


const Farmshop = () => {
return (
	<>
	<Navbar />
	<Title>
		Farm Shop
	</Title>
	<Intro>
		<Overview>
		The Home Farm Pantry is a brand new, small family run farm shop in the North Nottinghamshire countryside offering food with provenance in a beautiful location. 
		</Overview>
	</Intro>
	<Intro>
		<Overview>
		The majority of our meat and meat products come directly from our farm and are butchered and hand made on site by ourselves. Our complementary products have been carefully chosen for their quality, sustainability and provenance. We try to use local where we can and only stock British grown, seasonal produce. You won’t find strawberries in January or pineapples and mangoes I’m afraid. What you will find is a selection of high quality, artisan products from small like-minded, British producers.
		</Overview>
	</Intro>
	<Intro>
		<Overview>
		Once you have browsed our delicious products you can spend some time watching our animals in their fields, having a quiet sit down around our pond area, watching the wildlife and the birds darting to and from our numerous feeders  or a walk on one of the many footpaths surrounding the farm.
		</Overview>
	</Intro>
	<Intro>
		<Overview>
		We offer take away drinks and food for you to enjoy while you are with us or to take home.
		</Overview>
	</Intro>
	<ImageBox>
		<Container>
		<ImageRow>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/farm-shop.jpg" alt="Farm Shop" style={{width:"100%", padding:"30px"}}/>
			</ImageColumn>
		</ImageRow>
		</Container>
	</ImageBox>
	<Footer />
	</>
);
};

export default Farmshop;
