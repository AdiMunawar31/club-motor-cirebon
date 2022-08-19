import React from 'react';

const ArticleItem = ({ img, title, desc }: any) => {
	return (
		<div className='p-1 rounded-xl group sm:flex space-x-6 bg-white dark:bg-gray-900 bg-opacity-50 shadow-xl hover:rounded-2xl'>
			<img
				src={img}
				alt='article'
				loading='lazy'
				width={1000}
				height={667}
				className='h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl'
			/>
			<div className='sm:w-7/12 pl-0 p-5'>
				<div className='space-y-2'>
					<div className='space-y-4'>
						<h4 className='text-2xl font-semibold text-cyan-900  dark:text-gray-200'>{title}</h4>
						<p className='text-gray-600 dark:text-gray-300'>{desc}...</p>
					</div>
					<a href='www.tailus.io' className='block w-max text-cyan-600'>
						Read more
					</a>
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;
