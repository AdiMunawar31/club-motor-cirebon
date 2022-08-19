import Head from 'next/head';
import React from 'react';
import ArticleItem from '../components/ArticleItem';
import Layout from '../components/Layout';

const article = () => {
	return (
		<Layout>
			<Head>
				<title>CMC | Article</title>
			</Head>
			<div className='py-16 bg-gray-50 dark:bg-gray-800'>
				<div className='container m-auto px-6 text-gray-600 md:px-12 mt-10'>
					<div className='mb-12 space-y-2 text-center'>
						<h2 className='text-2xl text-cyan-900  dark:text-gray-100 font-bold md:text-4xl'>Sharing is Caring</h2>
						<p className='lg:w-6/12 lg:mx-auto dark:text-gray-200'>
							Every month we always hold interesting events for our members
						</p>
					</div>
					<div className='grid gap-12 lg:grid-cols-2'>
						<ArticleItem
							img='/gallery/4.jpeg'
							title='CMC Touring'
							desc='Cirebon Motor Club in collaboration with Honda touring together'
						/>
						<ArticleItem
							img='/gallery/5.jpeg'
							title='CMC Road to Lombok Beach'
							desc='Cirebon Motor Club in collaboration with Yamaha going to beach'
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default article;
