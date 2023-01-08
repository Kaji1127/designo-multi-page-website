import Image from 'next/image';
import styles from './countries-item.module.scss';

const CountriesItem = ({ item }) => {
	return (
		<div className={styles.country}>
			<div className={styles.image}>
				<picture>
					<source srcSet={item.mapImage.desktop} media="(min-width: 64em)" />
					<source srcSet={item.mapImage.tablet} media="(min-width: 36em)" />
					<img src={item.mapImage.mobile} alt={item.country} />
				</picture>
			</div>
			<div className={styles.text}>
				<div className={styles.circle}>
					<Image
						src="/assets/shared/desktop/bg-pattern-three-circles.svg"
						width={584}
						height={584}
						alt="three circle"
					/>
				</div>
				<div className={styles.inner}>
					<h3>{item.country}</h3>
					<div className={styles.info}>
						<div className={styles.desc}>
							<h4>{item.officeName}</h4>
							<p>{item.address.street}</p>
							<p>{item.address.state}</p>
						</div>
						<div className={styles.desc}>
							<h4>contact</h4>
							<p>P : {item.phoneNumber}</p>
							<p>M : {item.email}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountriesItem;
