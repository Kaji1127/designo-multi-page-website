import Head from 'next/head';
import Contact from '../components/contact/contact';
import Locations from '../components/locations/locations';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Designo Multi Page Website | Contact</title>
			</Head>
			<Contact />
			<Locations />
		</>
	);
};

export default ContactPage;
