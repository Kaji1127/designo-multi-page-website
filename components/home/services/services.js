import ServiceList from './service-list';
import styles from './services.module.scss';

const Services = ({ service }) => {
	return (
		<section
			className={`${styles.services} ${service && styles.service} container`}
		>
			<ServiceList service={service} />
		</section>
	);
};

export default Services;
