import Columns from '../columns/columns';
import styles from './locations.module.scss';

const Locations = () => {
	return (
		<section className={`${styles.container} container`}>
			<Columns info="locations" />
		</section>
	);
};

export default Locations;
