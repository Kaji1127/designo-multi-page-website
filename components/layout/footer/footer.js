import { useRouter } from 'next/router';

import GetInTouch from '../../get-in-touch/get-in-touch';
import Image from 'next/image';
import Nav from '../../nav/nav';
import IconFacebook from '../../../public/assets/shared/desktop/icon-facebook.svg';
import IconYoutube from '../../../public/assets/shared/desktop/icon-youtube.svg';
import IconTwitter from '../../../public/assets/shared/desktop/icon-twitter.svg';
import IconPinterest from '../../../public/assets/shared/desktop/icon-pinterest.svg';
import IconInstagram from '../../../public/assets/shared/desktop/icon-instagram.svg';

import styles from './footer.module.scss';

const Footer = () => {
	const router = useRouter();

	return (
		<footer
			className={`${styles.footer} ${
				router.pathname === '/contact' && styles['footer-contact']
			}`}
		>
			<GetInTouch />
			<div className={`container ${styles.content}`}>
				<div className={styles.nav}>
					<div className={styles.logo}>
						<Image
							src="/assets/shared/desktop/logo-light.png"
							alt="logo light"
							width={202}
							height={27}
						/>
					</div>
					<Nav footer="footer" />
				</div>
				<div className={styles.text}>
					<div className={styles.info}>
						<p>
							<span className={styles.strong}>Designo Central Office</span>
							<span>3886 Wellington Street</span>
							<span>Toronto, Ontario M9C 3J5</span>
						</p>
					</div>
					<div className={styles.info}>
						<p>
							<span className={styles.strong}>Contact Us (Central Office)</span>
							<span>P : +1 253-863-896</span>
							<span>M : contact@designo.co</span>
						</p>
					</div>
					<div className={styles.sns}>
						<IconFacebook />
						<IconYoutube />
						<IconTwitter />
						<IconPinterest />
						<IconInstagram />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
