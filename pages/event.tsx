import Head from 'next/head';
import React from 'react';
import EventList from '../components/EventList';
import Layout from '../components/Layout';

const event = () => {
	return (
		<Layout>
			<Head>
				<title>CMC | Event</title>
			</Head>
			<div className='h-screen flex gap-4 items-center justify-center bg-white dark:bg-gray-800'>
				<EventList title='CMC INDONESIA CHAPTER BANDUNG' date='Sat, Sep 12 . 7:00 - 8:30 AM' />
				<EventList title='CMC INDONESIA CHAPTER JAKARTA' date='Sat, Oct 12 . 7:00 - 8:30 AM' />
			</div>
		</Layout>
	);
};

export default event;
