import { useEffect, useState } from 'react';
import Image from 'next/image';
import NavMenuIcon from '../../../public/assets/shared/mobile/icon-hamburger.svg';
import NavCloseIcon from '../../../public/assets/shared/mobile/icon-close.svg';
import MobileNav from '../../nav/mobile-nav';
import Nav from '../../nav/nav';
import useWindowSize from '../../../hooks/use-windowsize';

import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const size = useWindowSize();

	const navToggleHandler = () => {
		setIsNavOpen((prevState) => !prevState);
	};

	const closeNavHandler = () => {
		setIsNavOpen(false);
	};

	if (typeof window !== 'undefined') {
		document.documentElement.style.overflow = isNavOpen ? 'hidden' : 'auto';
	}

	return (
		<>
			{isNavOpen && <div className={styles.overlay} />}
			<header className={`${styles.header} container`}>
				<Link href="/" onClick={closeNavHandler}>
					<Image
						src="/assets/shared/desktop/logo-dark.png"
						width={202}
						height={27}
						alt="Designo Logo"
					/>
				</Link>
				{size < 768 ? (
					<div className={styles['header-menu']} onClick={navToggleHandler}>
						{isNavOpen ? <NavCloseIcon /> : <NavMenuIcon />}
					</div>
				) : (
					<Nav />
				)}
			</header>
			{isNavOpen && <MobileNav closeNav={closeNavHandler} />}
		</>
	);
};

export default Header;
