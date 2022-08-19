import React from 'react';

const Join = () => {
	return (
		<div>
			<section className='bg-blue-50 dark:bg-gray-800' id='join'>
				<div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
					<div className='max-w-screen-sm mx-auto text-center'>
						<h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'>
							Join With Us
						</h2>
						<p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
							Join to have an amazing experience
						</p>
						<a
							href='#'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
						>
							Join Now
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Join;
