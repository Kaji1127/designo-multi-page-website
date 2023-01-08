import data from './data.json';

export const getProductsByCategory = (category) => {
	const products = data.filter((product) => product.slug === category);

	return products;
};

const handler = (req, res) => {
	const products = getProductsByCategory(req.query.services);
	res.status(200).json(products);
};

export default handler;
