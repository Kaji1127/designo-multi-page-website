import Link from 'next/link';
import styles from './button.module.scss';

const Button = ({ text, link, bg, type }) => {
	if (type) {
		return (
			<button type="submit" className={styles.button}>
				{text}
			</button>
		);
	}

	if (bg) {
		return (
			<Link href={`/${link}`} className={`${styles.button} ${styles.bg}`}>
				{text}
			</Link>
		);
	}

	return (
		<Link href={`/${link}`} className={styles.button}>
			{text}
		</Link>
	);
};

export default Button;
