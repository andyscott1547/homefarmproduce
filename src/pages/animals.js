import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Title, Welcome, Intro, Overview, ImageRow, ImageColumn, ImageBox, Container} from "./PagesElements";

const Animals = () => {
return (
	<>
	<Navbar />
	<Title>
		Our Animals
	</Title>
	<Welcome>
		Pigs
	</Welcome>
	<ImageBox>
		<Container>
		<ImageRow>
				<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/ethel-and-piglets.jpg" alt="Ethel and Piglets" style={{width:"100%"}}/>
				</ImageColumn>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/ethel.jpg" alt="Ethel the Sow" style={{width:"100%"}}/>
			</ImageColumn>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/honsel.jpg" alt="Honsel the Pig" style={{width:"100%"}}/>
			</ImageColumn>
		</ImageRow>
		</Container>
	</ImageBox>
	<Intro>
		<Overview>
		All of our pork comes from our own home reared pigs. We keep a selection of breeds including the Gloucestershire old spot and the large black. We much prefer native, traditional breeds for a number of reasons. Firstly, they are hardy so can live outside all year round. Secondly, they taste so much better. The fat, marbling and slower growth rate makes for much more flavoursome meat. Thirdly, these breeds are in decline and as counter intuitive as it may sound, if we don’t eat them, we will lose them.
		</Overview>
	</Intro>
	<Intro>
		<Overview>
		Our pigs live in our woodland areas around the farm. This is a very natural environment for them and they are able to root, forage and wallow to their hearts content. Autumn is probably their favourite time when the trees are dropping an abundance of acorns and crab apples. Our pigs get a varied diet including apples, vegetables, pig nuts and fodder beat. We will soon hopefully be able to use them on our grazing rotation as we begin our journey in to regenerative farming. They will help improve soil structure and quality, whilst giving them an even more varied diet.
		</Overview>
	</Intro>
	<Welcome>
		Chickens
	</Welcome>
	<ImageBox>
		<Container>
		<ImageRow>
				<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/chickens.jpg" alt="Chickens" style={{width:"100%", height:"90%"}}/>
				</ImageColumn>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/cockeral.jpg" alt="Chickens" style={{width:"100%", height:"90%"}}/>
			</ImageColumn>
		</ImageRow>
		</Container>
	</ImageBox>
	<Intro>
		<Overview>
		We keep chickens for both eggs and meat. We have a varied selection of laying hens giving us a wonderful selection of different coloured eggs. All of our laying hens stay with us for life and are completely free range. Our meat birds are all bred from slower growing breeds of birds, which we rear to a minimum of 100 days. Our chickens are able to free range in the day time and come home to roost at night where they are shut in a fully enclosed pen to protect from predators. Our chickens are not given any antibiotics or chemicals and are reared slowly and naturally. You will find the meat from our chickens actually tastes like chicken should taste and is much firmer than you may be used to.
		</Overview>
	</Intro>
	<Welcome>
		Cattle
	</Welcome>
	<ImageBox>
		<Container>
		<ImageRow>
				<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/closeup.jpg" alt="Cow Close Up" style={{width:"100%"}}/>
				</ImageColumn>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/coming.jpg" alt="Herd of Cows" style={{width:"100%"}}/>
			</ImageColumn>
		</ImageRow>
		</Container>
	</ImageBox>
	<Intro>
		<Overview>
		All of our beef is born and reared on the farm from our herd of pedigree limousin cattle. Our cattle spend all spring, summer and autumn out in the fields grazing on the grass, hedge rows and trees. In winter they are brought inside where they are fed a diet of grass and clover silage with the addition of some home-grown barley meal.
		</Overview>
	</Intro>
	<Intro>
		<Overview>
		Limousin beef is known for its outstanding lean, tender meat, low in saturated fats and it is hung for a minimum of 21 days.
		</Overview>
	</Intro>
	<Footer />
	</>
);
};

export default Animals;
