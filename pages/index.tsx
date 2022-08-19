import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Client from '../components/Client';
import Comment from '../components/Comment';
import Introduction from '../components/Introduction';
import Join from '../components/Join';
import Layout from '../components/Layout';
import Profile from '../components/Profile';

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>CMC | Home</title>
			</Head>
			<Banner />
			<Introduction />
			<Profile />
			<Comment />
			<Client />
			<Join />
		</Layout>
	);
};

export default Home;
