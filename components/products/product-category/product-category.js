import Image from 'next/image';
import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/use-windowsize';
import styles from './product-category.module.scss';

const ProductCategory = ({ description }) => {
	const size = useWindowSize();
	const router = useRouter();
	const categoryName = router.query.service.replace('-', ' ');

	return (
		<section className={`${styles.container} ${size > 767 && 'container'}`}>
			<div className={styles.circle}>
				<picture>
					<source
						srcSet="/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
						media="(min-width: 48em)"
					/>
					<img
						src="/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
						alt="circle"
					/>
				</picture>
			</div>
			<div className={styles.text}>
				<h2>{categoryName}</h2>
				<p>{description}</p>
			</div>
		</section>
	);
};

export default ProductCategory;
