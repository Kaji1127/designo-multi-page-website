import Link from 'next/link';
// import useWindowSize from '../../hooks/use-windowsize';

import styles from './mobile-nav.module.scss';

const MobileNav = ({ closeNav }) => {
	const navList = [
		{ menu: 'our company', link: 'about' },
		{ menu: 'locations', link: 'locations' },
		{ menu: 'contact', link: 'contact' },
	];

	// const size = useWindowSize();
	return (
		<nav className={`${styles.nav}`}>
			<ul>
				{navList.map((list) => (
					<li key={list.menu} onClick={closeNav}>
						<Link href={list.link} as={`/${list.link}`}>
							{list.menu}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MobileNav;
