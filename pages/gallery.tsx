import Head from 'next/head';
import React from 'react';
import GalleryItem from '../components/GalleryItem';
import Layout from '../components/Layout';

const Gallery = () => {
	return (
		<Layout>
			<Head>
				<title>CMC | Gallery</title>
			</Head>
			<section className='text-gray-600 body-font dark:bg-gray-800'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100'>
							Our Gallery
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-200'>
							This gallery is a snapshot of our club's journey since it was built
						</p>
					</div>
					<div className='flex flex-wrap -m-4'>
						<GalleryItem
							img='/gallery/1.jpg'
							name='Go to the mountain'
							desc='This trip was done at the end of December last year'
						/>
						<GalleryItem
							img='/gallery/2.jpg'
							name='Go to the mountain'
							desc='This trip was done at the end of December last year'
						/>
						<GalleryItem
							img='/gallery/3.jpg'
							name='Go to the mountain'
							desc='This trip was done at the end of December last year'
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Gallery;
