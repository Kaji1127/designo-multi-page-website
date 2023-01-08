import Link from 'next/link';
import styles from './nav.module.scss';

const Nav = ({ footer }) => {
	const navList = [
		{ menu: 'our company', link: 'about' },
		{ menu: 'locations', link: 'locations' },
		{ menu: 'contact', link: 'contact' },
	];
	return (
		<nav className={footer ? styles['footer-nav'] : styles.nav}>
			<ul>
				{navList.map((item) => (
					<li key={item.menu}>
						<Link href={item.link} as={`/${item.link}`}>
							{item.menu}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
