import Feature from './feature/feature';
import Location from './location/location';

const Columns = ({ info }) => {
	const data = [
		{
			features: [
				{
					feature: 'passionate',
					image: '/assets/home/desktop/illustration-passionate.svg',
					description:
						'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
				},
				{
					feature: 'resourceful',
					image: '/assets/home/desktop/illustration-resourceful.svg',
					description:
						'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
				},
				{
					feature: 'friendly',
					image: '/assets/home/desktop/illustration-friendly.svg',
					description:
						' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
				},
			],
		},
		{
			locations: [
				{
					name: 'canada',
					image: '/assets/shared/desktop/illustration-canada.svg',
				},
				{
					name: 'australia',
					image: '/assets/shared/desktop/illustration-australia.svg',
				},
				{
					name: 'united kingdom',
					image: '/assets/shared/desktop/illustration-united-kingdom.svg',
				},
			],
		},
	];

	return (
		<>
			{info === 'features' && <Feature features={data[0].features} />}
			{info === 'locations' && <Location locations={data[1].locations} />}
		</>
	);
};

export default Columns;
