import AboutUs from '../components/our-company/about-us/about-us';
import WorldClassTalent from '../components/our-company/world-class-talent/world-class-talent';
import Locations from '../components/locations/locations';
import RealDeal from '../components/our-company/real-deal/real-deal';
import Head from 'next/head';

const About = () => {
	return (
		<>
			<Head>
				<title>Designo Multi Page Website | Our Company</title>
			</Head>
			<AboutUs />
			<WorldClassTalent />
			<Locations />
			<RealDeal />
		</>
	);
};

export default About;
