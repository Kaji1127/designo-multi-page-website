import Image from 'next/image';
import useWindowSize from '../../../hooks/use-windowsize';

import Columns from '../../columns/columns';
import styles from './features.module.scss';

const Features = () => {
	const size = useWindowSize();
	return (
		<section className={`container ${styles.features}`}>
			{size > 1023 && (
				<>
					<div className={styles.leaf}>
						<Image
							src="/assets/shared/desktop/bg-pattern-leaf.svg"
							alt="pattern leaf"
							width={1006}
							height={594}
							priority
						/>
					</div>

					<div className={styles['leaf-bottom']}>
						<Image
							src="/assets/shared/desktop/bg-pattern-leaf.svg"
							alt="pattern leaf"
							width={1006}
							height={594}
							priority
						/>
					</div>
				</>
			)}
			<Columns info="features" />
		</section>
	);
};

export default Features;
