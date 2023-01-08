import Image from 'next/image';
import styles from './product-list.module.scss';

const ProductList = ({ products }) => {
	return (
		<section className={`container`}>
			<div className={styles.container}>
				{products.map((product) => {
					return (
						<div key={product.id} className={styles.content}>
							<div className={styles.image}>
								<Image
									src={product.thumbnail}
									fill
									alt={product.title}
									priority={true}
									sizes="(max-width: 48em) 100vw,100vw"
								/>
							</div>
							<div className={styles.inner}>
								<div className={styles.text}>
									<h3>{product.title}</h3>
									<p>{product.description}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProductList;
