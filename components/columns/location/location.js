import Image from 'next/image';
import BgPatternSmallCircle from '../../../public/assets/shared/desktop/bg-pattern-small-circle.svg';
import Button from '../../ui/button/button';
import styles from './location.module.scss';

const Location = ({ locations }) => {
	return (
		<div className={styles.container}>
			{locations.map((location) => (
				<div className={styles.content} key={location.name}>
					<div className={`${styles.image} ${styles[location.name]}`}>
						<Image
							src={location.image}
							alt={location.name}
							width={202}
							height={202}
						/>
						<BgPatternSmallCircle />
					</div>
					<div className={styles.text}>
						<h3>{location.name}</h3>
					</div>
					<Button text="see location" bg="peach" link="locations" />
				</div>
			))}
		</div>
	);
};

export default Location;
