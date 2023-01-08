import { useRouter } from 'next/router';
import Head from 'next/head';

import ServicesItems from '../../components/home/services/services';
import ProductCategory from '../../components/products/product-category/product-category';
import ProductList from '../../components/products/product-list/product-list';

import { getAllProducts } from '../api/service';
import { getProductsByCategory } from '../api/service/[service]';

const Service = ({ products }) => {
	const router = useRouter();
	let featureDesc;

	if (router.query.service === 'web-design') {
		featureDesc =
			'We build websites that serve as powerful marketing tools and bring memorable brand experiences.';
	}
	if (router.query.service === 'app-design') {
		featureDesc =
			'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.';
	}
	if (router.query.service === 'graphic-design') {
		featureDesc =
			'We deliver eye-catching branding materials that are tailored to meet your business objectives.';
	}

	return (
		<>
			<Head>
				<title>{`Designo Multi Page Website | ${products.category}`}</title>
			</Head>
			<ProductCategory description={featureDesc} />
			<ProductList products={products} />
			<ServicesItems service={router.query.service} />
		</>
	);
};

export const getStaticPaths = async () => {
	const products = getAllProducts();
	const categories = products.map((category) => category.slug);

	const pathsWithParams = categories.map((path) => ({
		params: { service: path },
	}));

	return {
		paths: pathsWithParams,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const { params } = context;
	const category = params.service;
	const categoryProducts = getProductsByCategory(category);

	return {
		props: {
			products: categoryProducts,
		},
	};
};

export default Service;
