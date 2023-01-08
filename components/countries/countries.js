import CountriesList from './countries-list/countries-list';
import useWindowSize from '../../hooks/use-windowsize';
import styles from './countries.module.scss';

const Countries = () => {
	const countryItems = [
		{
			country: 'canada',
			officeName: 'Designo Central Office',
			address: {
				street: '3886 Wellington Street',
				state: ' Toronto, Ontario M9C 3J5',
			},
			mapImage: {
				desktop: '/assets/locations/desktop/image-map-canada.png',
				tablet: '/assets/locations/tablet/image-map-canada.png',
				mobile: '/assets/locations/desktop/image-map-canada.png',
			},
			phoneNumber: '+1 253-863-8967',
			email: 'contact@designo.co',
		},
		{
			country: 'australia',
			officeName: 'Designo AU Office',
			address: {
				street: '19 Balonne Street',
				state: ' New South Wales 2443',
			},
			mapImage: {
				desktop: '/assets/locations/desktop/image-map-australia.png',
				tablet: '/assets/locations/tablet/image-map-australia.png',
				mobile: '/assets/locations/desktop/image-map-australia.png',
			},
			phoneNumber: '(02) 6720 9092',
			email: 'contact@designo.au',
		},
		{
			country: 'United Kingdom',
			officeName: 'Designo UK Office',
			address: {
				street: '13  Colorado Way',
				state: ' Rhyd-y-fro SA8 9GA',
			},
			mapImage: {
				desktop: '/assets/locations/desktop/image-map-united-kingdom.png',
				tablet: '/assets/locations/tablet/image-map-united-kingdom.png',
				mobile: '/assets/locations/desktop/image-map-united-kingdom.png',
			},
			phoneNumber: '078 3115 1400',
			email: 'contact@designo.uk',
		},
	];

	const size = useWindowSize();

	return (
		<section className={`${styles.container} ${size > 575 && 'container'}`}>
			<CountriesList data={countryItems} />
		</section>
	);
};

export default Countries;
