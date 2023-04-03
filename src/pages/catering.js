import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Title, Intro, Overview, ImageRow, ImageColumn, ImageBox, Container, Welcome } from "./PagesElements";
import './styles.css';

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
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/buffet.jpg" alt="Buffet" style={{width:"100%", height:"100%", padding:"20px"}}/>
			</ImageColumn>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/graze.jpg" alt="Graze" style={{width:"100%", height:"100%", padding:"20px"}}/>
			</ImageColumn>
		</ImageRow>
		</Container>
	</ImageBox>
	<Welcome style={{color:"#bf9026"}}>
		Grazing Tables
	</Welcome>
	<Intro>
		<Overview>
			<ul>
				<li>All of our grazing tables come with a selection of Home Farm pastries and scotch eggs</li>
				<li>Cooked and cured meat platter</li>
				<li>Cheese selection</li>
				<li>Crackers and bread sticks</li>
				<li>Dips and chutneys</li>
				<li>Crudités</li>
				<li>Antipasti</li>
				<li>Olives</li>
				<li>Fresh and dried fruit</li>
				<li>foliage and flowers</li>
			</ul>
			You can either choose a flat graze, so there is no cleaning and washing up to worry about after your event. Alternatively, we can supply all the platters, plates, bowls, crates and baskets to create a truly show stopping display. We will need access to the venue 2 hours prior to eating to set up your table. We will arrange to collect our equipment the following day. (Extra charges may apply depending on location) <br/>
			<br/> Our standard graze starts at £375 for 20-30 people
		</Overview>
	</Intro>
	<Welcome style={{color:"#bf9026"}}>
		Hot Buffet (Service Included for 1.5hrs)
	</Welcome>
	<Intro>
		<Overview>
			<ul>
				<li>Selection of hot carved meats (choice of slow cooked brisket, slow cooked pork shoulder, cooked ham, slow cooked lamb shoulder, chicken thighs and drumsticks, burgers, sausages)</li>
				<li>Artisan bread selection</li>
				<li>Selection of salads</li>
				<li>Sides and accompaniments</li>
			</ul>
			Prices starting from £400 for 20-30 people
		</Overview>
	</Intro>
	<Welcome style={{color:"#bf9026"}}>
		Cold Finger Buffet
	</Welcome>
	<Intro>
		<Overview>
			<ul>
				<li>Selection of sandwiches</li>
				<li>Selection of Home Farm pastries and scotch eggs</li>
				<li>Crisps</li>
				<li>Vegetable sticks and dip</li>
				<li>Cheese and crackers</li>
				<li>Fresh fruit</li>
				<li>Home made mini dessert selection (brownie, millionaire shortbread, cookies)</li>
			</ul>
			Prices starting from £250 for 20-30 people
		</Overview>
	</Intro>
	<Welcome style={{color:"#bf9026"}}>
		Pie and Peas Buffet (Service Included for 1.5hrs)
	</Welcome>
	<Intro>
		<Overview>
			<ul>
				<li>Home made steak or chicken pie</li>
				<li>Mushy Peas</li>
				<li>Gravy</li>
				<li>Accompaniments</li>
				<li>Add on creamy mash potato or crispy home made chips</li>
			</ul>
			Prices starting from £250 for 40 people
		</Overview>
	</Intro>
	<Welcome style={{color:"#bf9026"}}>
		Dessert Table
	</Welcome>
	<Intro>
		<Overview>
			<ul>
				<li>Home made triple Chocolate brownie</li>
				<li>Home made dessert -choose one from cheesecake, trifle, Eton mess, pavlova, lemon tart</li>
				<li>Home made vanilla cupcakes</li>
				<li>Mini doughnuts/rocky road/ mini Swiss rolls </li>
				<li>Popcorn</li>
				<li>Fresh fruit</li>
			</ul>
			Prices starting from £150 for 20-30 people
		</Overview>
	</Intro>
	<Welcome style={{color:"#bf9026"}}>
		Canapé Menu
	</Welcome>
	<Intro>
		<Overview>
			<ul>
				<li>Selection of meat, vegetarian and fish canapés.</li>
			</ul>
			£12 for 10 canapés (1 type) (service not included)
		</Overview>
	</Intro>
	<ImageBox>
		<ImageRow>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/afternoontea.jpg" alt="Afternoon Tea" style={{width:"100%", height:"100%", padding:"20px"}}/>
			</ImageColumn>
			<ImageColumn>
				<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/dessert.jpg" alt="Desserts" style={{width:"100%", height:"100%", padding:"20px"}}/>
			</ImageColumn>
		</ImageRow>
	</ImageBox>
	<Intro>
		<Overview>
		You can add on disposable plates, napkins and cutlery. (Extra charges apply). Unfortunately, we don’t currently offer crockery hire. <br/>
		<br/> For a personalised quote and a full list of our menu items please get in touch. We are happy to work with you to make your event truly special.
		</Overview>
	</Intro>
	<Footer />
	</>
);
};

export default Catering;
