import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import VisiMisi from '../components/VisiMisi';

const about = () => {
	return (
		<Layout>
			<Head>
				<title>CMC | Event</title>
			</Head>
			<div className='py-16 bg-white dark:bg-gray-800'>
				<div className='container m-auto px-6 text-gray-600 dark:text-gray-200 md:px-12 xl:px-6 mt-10'>
					<div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
						<div className='md:5/12'>
							<Image src='/logo.png' alt='image' loading='lazy' width={600} height={500} />
						</div>
						<div className='md:7/12 lg:w-6/12'>
							<h2 className='text-2xl text-gray-900 dark:text-gray-200 font-bold md:text-4xl'>Club Motor Cirebon</h2>
							<p className='mt-6 text-gray-600 dark:text-gray-200'>
								Cirebon Motor Club, just like other motorbike clubs in Indonesia, Cirebon Motor Club is a place for some
								people who like to ride motorbikes
							</p>
						</div>
					</div>
				</div>
			</div>
			<VisiMisi />
		</Layout>
	);
};

export default about;
