import React from 'react';
import 'react-native';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Find from "../components/Map";
import ContactForm from '../components/ContactForm';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainTitle, Welcome, Intro, Overview, Container, Box, Column, Row} from "./PagesElements";
import { FooterLink } from '../components/Footer/FooterStyles';


const Home = () => {
return (
	<>
	<Navbar />
	<MainTitle>
		Home Farm Produce <br/>
		From Farm To Fork
	</MainTitle>
	<Welcome> 
		We specialise in slow reared, natural, free range pork, chicken and beef direct from our farm to your fork.
	</Welcome>
	<Intro>
		<Overview>
		Our aim is to provide nourishing food by moving away from conventional agriculture and towards a more regenerative, environmentally friendly way of farming. We are at the start of our journey and are incredibly excited to see where it will take us. <br/>
		<br/>We offer both raw and cooked products. All of our cooked food is produced in small batches to ensure quality and freshness. It is all home made using local, British and seasonal ingredients. So, whether you are looking for a Sunday roast, a big breakfast, a pork pie or sausage roll we have you covered.
		</Overview>
	</Intro>
	<Box>
		<Container>
			<Row>
				<Column>
					<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/standards.jpg" alt="icon" style={{height:75, width:125}}/>
				</Column>
				<Column>
					<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/north-notts.jpg" alt="icon" style={{height:75, width:75}}/>
				</Column>
				<Column>
					<img src="https://502101718834-eu-west-1-public-content.s3.eu-west-1.amazonaws.com/great-food.jpg" alt="icon" style={{height:75, width:150}}/>
				</Column>
			</Row>
		</Container>
	</Box>
	<Welcome>
		Find Us On The Farm
	</Welcome>
	<Intro>
		<Overview>
			Home Farm <br/>
			Grove <br/>
			Retford <br/>
			DN22 0JL <br/>
		</Overview>
	</Intro>
	<Intro>
	<Find />
	</Intro>
	<Welcome>
		Opening Times
	</Welcome>
	<Intro>
		<Overview>
			Friday 10am - 4pm <br/>
			Saturday 9am - 2pm <br/>
		</Overview>
	</Intro>
	<Welcome>
		Contact Us
	</Welcome>
	<Intro>
		<Overview>
		<FooterLink href = "mailto: paula@homefarmproduce.co.uk"> <FontAwesomeIcon icon={faEnvelope} size="2x"/></FooterLink> &emsp; <FooterLink href = "tel: 07807040173"> <FontAwesomeIcon icon={faPhone} size="2x"/></FooterLink> 
		</Overview>
	</Intro>
	<ContactForm />
	<Footer />
	</>
);
};

export default Home;
