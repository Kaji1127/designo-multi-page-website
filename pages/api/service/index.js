import data from './data.json';

export const getAllProducts = () => {
	return data;
};

const handler = (req, res) => {
	const products = getAllProducts();
	res.status(200).json(products);
};

export default handler;
