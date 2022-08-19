import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
	return (
		<div className='w-full'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
