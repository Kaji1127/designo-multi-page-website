import Head from 'next/head';

import Layout from '../components/layout/layout';

import '../styles/globals.scss';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Designo Multi Page Website</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
