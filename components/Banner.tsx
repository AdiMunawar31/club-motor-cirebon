import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
	return (
		<div>
			<section className='bg-white dark:bg-gray-900'>
				<div className='grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'>
					<div className='mr-auto place-self-center lg:col-span-7'>
						<h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
							Club Motor <br />
							Cirebon.
						</h1>
						<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
							Cirebon Motor Club, just like other motorbike clubs in Indonesia, Cirebon Motor Club is a place for some
							people who like to ride motorbikes
						</p>
						<div className='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
							<Link href='/about'>
								<a className='inline-flex items-center justify-center w-full px-10 py-3 text-sm font-medium text-center text-gray-100 bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 dark:text-white dark:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
									About Us
								</a>
							</Link>
							<a
								href='#join'
								className='inline-flex items-center justify-center w-full px-10 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
							>
								Join Now
							</a>
						</div>
					</div>
					<div className='hidden md:col-span-5 md:flex'>
						<img src='/banner.png' alt='hero image' loading='lazy' />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;
