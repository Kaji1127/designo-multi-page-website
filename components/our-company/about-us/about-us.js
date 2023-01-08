import Image from 'next/image';
import useWindowSize from '../../../hooks/use-windowsize';
import styles from './about-us.module.scss';

const AboutUs = () => {
	const size = useWindowSize();

	return (
		<section className={`${styles.container} ${size > 575 && 'container'}`}>
			<div className={styles.content}>
				<div className={styles.image}>
					<picture>
						<source
							media="(min-width: 64em)"
							srcSet="/assets/about/desktop/image-about-hero.jpg"
						/>
						<source
							media="(min-width: 48em)"
							srcSet="/assets/about/tablet/image-about-hero.jpg"
						/>
						<img
							src="/assets/about/mobile/image-about-hero.jpg"
							alt="about hero"
						/>
					</picture>
				</div>
				<div className={styles.text}>
					<div className={styles.circle}>
						<Image
							src="/assets/shared/desktop/bg-pattern-small-circle.svg"
							width={`${size > 767 ? 640 : 292}`}
							height={`${size > 767 ? 640 : 292}`}
							alt="circle bg"
						/>
					</div>
					<h2>About Us</h2>
					<p>
						Founded in 2010, we are a creative agency that produces lasting
						results for our clients. We’ve partnered with many startups,
						corporations, and nonprofits alike to craft designs that make real
						impact. We’re always looking forward to creating brands, products,
						and digital experiences that connect with our clients’ audiences.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
