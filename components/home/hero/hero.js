import Image from 'next/image';
import Button from '../../ui/button/button';

import styles from './hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.circle}>
				<Image
					fill
					sizes="100%"
					priority
					src="/assets/home/desktop/bg-pattern-hero-home.svg"
					alt="bg-circle"
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1>Award-winning custom designs and digital branding solutions</h1>
					<p>
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</p>
					<Button text="learn more" link="about" />
				</div>
				<div className={styles.image}>
					<Image
						fill
						src="/assets/home/desktop/image-hero-phone.png"
						alt="hero-image"
						style={{ objectFit: 'cover' }}
						sizes="(min-width: 1024px) 500px, 100%"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
