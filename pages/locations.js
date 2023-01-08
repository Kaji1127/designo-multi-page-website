import Head from 'next/head';
import React from 'react';
import Countries from '../components/countries/countries';

const Locations = () => {
	return (
		<>
			<Head>
				<title>Designo Multi Page Website | Location</title>
			</Head>
			<Countries />
		</>
	);
};

export default Locations;
