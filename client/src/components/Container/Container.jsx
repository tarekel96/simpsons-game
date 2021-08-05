import React from 'react';
import Footer from '../Footer';
/**
 * @param {string} bootstrap bootstrap classes
 * @param {array} children array of Card components
 * @return a container component
 */
const Container = ({ bootstrap = '', className = '', children, hasFooter = true }) => {
	return (
		<main className={`${bootstrap} ${className}`}>
			{children}
			{hasFooter && <Footer />}
		</main>
	);
};

export default Container;
