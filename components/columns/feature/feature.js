import Image from 'next/image';
import BgPatternSmallCircle from '../../../public/assets/shared/desktop/bg-pattern-small-circle.svg';
import styles from './feature.module.scss';

const Feature = ({ features }) => {
	return (
		<div className={styles.container}>
			{features.map((feature) => (
				<div className={styles.content} key={feature.feature}>
					<div className={`${styles.image} ${styles[feature.feature]}`}>
						<Image
							src={feature.image}
							alt={feature.feature}
							width={202}
							height={202}
						/>
						<BgPatternSmallCircle />
					</div>
					<div className={styles.text}>
						<h3>{feature.feature}</h3>
						<p>{feature.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Feature;
