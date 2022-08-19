import React from 'react';

const VisiMisi = () => {
	return (
		<div className='dark:bg-gray-700 py-10'>
			<div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 w-3/4'>
				<div className='space-y-6 md:flex md:gap-6 lg:items-center lg:gap-12 mb-16'>
					<div className='md:6/12 mt-8'>
						<h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>Visi</h2>
						<p className='mt-6 text-gray-600 dark:text-gray-200'>
							Become a motorcycle club community that can be a forum for motorcycle lovers, by holding a touring once a
							month
						</p>
					</div>
					<div className='md:6/12'>
						<h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>Misi</h2>
						<p className='mt-6 text-gray-600 dark:text-gray-200'>
							Making bikers who like motorbikes can have a place for their hobbies, and in our club as well as for those
							who want to know more about technical techniques in automotive, here will also be studied together by the
							experts in our club
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VisiMisi;
