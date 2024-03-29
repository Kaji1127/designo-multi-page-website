import { useState, useEffect } from 'react';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWindowSize(window.innerWidth);
			};

			window.addEventListener('resize', handleResize);
			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return windowSize;
};

export default useWindowSize;
