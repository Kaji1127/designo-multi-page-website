import Image from 'next/image';
import useWindowSize from '../../../hooks/use-windowsize';

import styles from './real-deal.module.scss';

const RealDeal = () => {
	const size = useWindowSize();

	return (
		<section className={`${styles.container} ${size > 575 && 'container'}`}>
			<div className={styles.content}>
				<div className={styles.image}>
					<picture>
						<source
							srcSet="/assets/about/desktop/image-real-deal.jpg"
							media="(min-width: 64em)"
						/>
						<source
							srcSet="/assets/about/tablet/image-real-deal.jpg"
							media="(min-width: 48em)"
						/>
						<img
							src="/assets/about/mobile/image-real-deal.jpg"
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
						<h2>The real deal</h2>
						<p className={styles.first}>
							As strategic partners in our clients’ businesses, we are ready to
							take on any challenge as our own. Solving real problems require
							empathy and collaboration, and we strive to bring a fresh
							perspective to every opportunity. We make design and technology
							more accessible and give you tools to measure success.
						</p>
						<p className={styles.second}>
							We are visual storytellers in appealing and captivating ways. By
							combining business and marketing strategies, we inspire audiences
							to take action and drive real results.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RealDeal;
