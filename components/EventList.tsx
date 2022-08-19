import React from 'react';

const EventList = ({ title, date }: any) => {
	return (
		<div className='w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50  dark:border-gray-700  dark:bg-gray-900'>
			<p className='bg-red-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl'>COMING SOON</p>
			<div className='grid grid-cols-6 p-5 gap-y-2'>
				<div>
					<img src='https://picsum.photos/seed/2/200/200' className='max-w-16 max-h-16 rounded-full' />
				</div>
				<div className='col-span-5 md:col-span-4 ml-4'>
					<p className='text-blue-500 font-bold text-xs'> New Event </p>
					<p className='text-gray-600 dark:text-gray-200 font-bold'> {title} </p>
					<p className='text-gray-400'> {date} </p>
				</div>
				<div className='flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end'>
					<p className='rounded-lg text-blue-500 font-bold bg-blue-100  py-1 px-3 text-sm w-fit h-fit'> New </p>
				</div>
			</div>
		</div>
	);
};

export default EventList;
