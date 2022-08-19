import React from 'react';

const Profile = () => {
	return (
		<div>
			<section className='bg-blue-50 dark:bg-gray-900'>
				<div className='items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
					<div className='col-span-2 mb-8'>
						<p className='text-lg font-medium text-blue-600 dark:text-blue-500'>Trusted by all bikers</p>
						<h2 className='mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white'>
							Trusted by over 1000+ bikers and 100+ teams
						</h2>
						<p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
							Club Motor Cirebon It has been trusted by many bikers who have joined our club
						</p>
					</div>
					<div className='col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0'>
						<div>
							<svg
								className='w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 dark:text-blue-500'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
							</svg>
							<h3 className='mb-2 text-2xl font-bold dark:text-white'>1000+ Bikers</h3>
							<p className='font-light text-gray-500 dark:text-gray-400'>Trusted by over 1000+ bikers</p>
						</div>
						<div>
							<svg
								className='w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12 dark:text-blue-500'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
									clipRule='evenodd'
								/>
							</svg>
							<h3 className='mb-2 text-2xl font-bold dark:text-white'>20+ City</h3>
							<p className='font-light text-gray-500 dark:text-gray-400'>Have joined Club Motor Cirebon</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
