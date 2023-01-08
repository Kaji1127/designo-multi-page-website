import { useRouter } from 'next/router';

import Button from '../ui/button/button';
import styles from './get-in-touch.module.scss';

const GetInTouch = () => {
	const router = useRouter();

	if (router.pathname === '/contact') {
		return;
	}
	return (
		<section className={`container ${styles.contact}`}>
			<div className={styles.container}>
				<picture>
					<source
						srcSet="/assets/shared/desktop/bg-pattern-call-to-action.svg"
						media="(min-width: 64em)"
					/>
					<source
						srcSet="/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
						media="(min-width: 48em)"
					/>
					<img
						src="/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
						className={styles.image}
						alt="bg design pattern"
					/>
				</picture>
				<div className={styles.content}>
					<div className={styles.text}>
						<h3>
							<span>Let’s talk about</span>
							<span>your project</span>
						</h3>
						<p>
							Ready to take it to the next level? Contact us today and find out
							how our expertise can help your business grow.
						</p>
					</div>
					<Button text="get in touch" link="contact" />
				</div>
			</div>
		</section>
	);
};

export default GetInTouch;
