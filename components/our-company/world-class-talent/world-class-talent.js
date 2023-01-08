import Image from 'next/image';
import useWindowSize from '../../../hooks/use-windowsize';

import styles from './world-class-talent.module.scss';

const WorldClassTalent = () => {
	const size = useWindowSize();

	return (
		<section className={`${styles.container} ${size > 575 && 'container'}`}>
			<div className={styles.content}>
				<div className={styles.image}>
					<picture>
						<source
							srcSet="/assets/about/desktop/image-world-class-talent.jpg"
							media="(min-width: 64em)"
						/>
						<source
							srcSet="/assets/about/tablet/image-world-class-talent.jpg"
							media="(min-width: 48em)"
						/>
						<img
							src="/assets/about/mobile/image-world-class-talent.jpg"
							alt="world class talent"
						/>
					</picture>
				</div>
				<div className={styles.text}>
					<div className={styles.circle}>
						<Image
							src="/assets/shared/desktop/bg-pattern-three-circles.svg"
							width={584}
							height={584}
							priority={true}
							alt="circle bg"
						/>
					</div>
					<div className={styles.inner}>
						<h2>World-class talent</h2>
						<p className={styles.first}>
							We are a crew of strategists, problem-solvers, and technologists.
							Every design is thoughtfully crafted from concept to launch,
							ensuring success in its given market. We are constantly updating
							our skills in a myriad of platforms.
						</p>
						<p className={styles.second}>
							Our team is multi-disciplinary and we are not merely interested in
							form — content and meaning are just as important. We give great
							importance to craftsmanship, service, and prompt delivery. Clients
							have always been impressed with our high-quality outcomes that
							encapsulates their brand’s story and mission.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorldClassTalent;
