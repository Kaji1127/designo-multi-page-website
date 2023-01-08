import CountriesItem from '../countries-item/countries-item';
import styles from './countries-list.module.scss';

const CountriesList = ({ data }) => {
	return (
		<div className={styles.countries}>
			{data.map((item, index) => (
				<CountriesItem key={index} item={item} />
			))}
		</div>
	);
};

export default CountriesList;
