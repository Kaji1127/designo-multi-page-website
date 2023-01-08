import Link from 'next/link';
import IconArrowRight from '../../../public/assets/shared/desktop/icon-right-arrow.svg';
import styles from './service-list.module.scss';

const ServiceList = ({ service }) => {
	const list = [
		{
			id: 1,
			name: 'web design',
			slug: 'web-design',
			thumbnail: {
				desktop: '/assets/home/desktop/image-web-design-large.jpg',
				tablet: '/assets/home/tablet/image-web-design.jpg',
				mobile: '/assets/home/mobile/image-web-design.jpg',
			},
		},
		{
			id: 2,
			name: 'app design',
			slug: 'app-design',
			thumbnail: {
				desktop: '/assets/home/desktop/image-app-design.jpg',
				tablet: '/assets/home/tablet/image-app-design.jpg',
				mobile: '/assets/home/mobile/image-app-design.jpg',
			},
		},
		{
			id: 3,
			name: 'graphic design',
			slug: 'graphic-design',
			thumbnail: {
				desktop: '/assets/home/desktop/image-graphic-design.jpg',
				tablet: '/assets/home/tablet/image-graphic-design.jpg',
				mobile: '/assets/home/mobile/image-graphic-design.jpg',
			},
		},
	];
	if (service) {
		const filteredList = list.filter((item) => item.slug !== service);
		return (
			<>
				{filteredList.map((item) => (
					<div key={item.id} className={`${styles.service} ${styles.column}`}>
						<Link className={styles.link} href={`/services/${item.slug}`}>
							<picture>
								<source
									media="(min-width: 64em)"
									srcSet={item.thumbnail.desktop}
								/>
								<source
									media="(min-width: 48em)"
									srcSet={item.thumbnail.tablet}
								/>
								<img
									className={styles.image}
									src={item.thumbnail.mobile}
									alt={item.name}
								/>
							</picture>
							<div className={styles.text}>
								<h3>{item.name}</h3>
								<div className={styles.view}>
									<span>view projects</span>
									<span>
										<IconArrowRight />
									</span>
								</div>
							</div>
							<div className={styles['bg-dark']} />
						</Link>
					</div>
				))}
			</>
		);
	}
	return (
		<>
			{list.map((item) => (
				<div key={item.id} className={styles.service}>
					<Link className={styles.link} href={`/services/${item.slug}`}>
						<picture>
							<source
								media="(min-width: 64em)"
								srcSet={item.thumbnail.desktop}
							/>
							<source
								media="(min-width: 48em)"
								srcSet={item.thumbnail.tablet}
							/>
							<img
								className={styles.image}
								src={item.thumbnail.mobile}
								alt={item.name}
							/>
						</picture>
						<div className={styles.text}>
							<h3>{item.name}</h3>
							<div className={styles.view}>
								<span>view projects</span>
								<span>
									<IconArrowRight />
								</span>
							</div>
						</div>
						<div className={styles['bg-dark']} />
					</Link>
				</div>
			))}
		</>
	);
};

export default ServiceList;
