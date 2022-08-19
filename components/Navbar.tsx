import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<header className='fixed w-full z-10'>
			<nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
				<div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
					<a href='#' className='flex items-center'>
						<span className='self-center text-xl font-semibold'>CMC</span>
					</a>
					<div className='flex items-center lg:order-2'>
						<div
							onClick={changeTheme}
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
						>
							Change Theme
						</div>
					</div>
					<div className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1'>
						<ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
							<li>
								<Link href='/'>
									<a className='block pl-3 pr-4 text-blue-700 hover:text-gray-600 lg:p-0 dark:text-white'>Home</a>
								</Link>
							</li>
							<li>
								<Link href='/about'>
									<a className='block pl-3 pr-4 text-blue-700 hover:text-gray-600 lg:p-0 dark:text-white'>About</a>
								</Link>
							</li>
							<li>
								<Link href='/gallery'>
									<a className='block pl-3 pr-4 text-blue-700 hover:text-gray-600 lg:p-0 dark:text-white'>Gallery</a>
								</Link>
							</li>
							<li>
								<Link href='/article'>
									<a className='block pl-3 pr-4 text-blue-700 hover:text-gray-600 lg:p-0 dark:text-white'>Article</a>
								</Link>
							</li>
							<li>
								<Link href='/event'>
									<a className='block pl-3 pr-4 text-blue-700 hover:text-gray-600 lg:p-0 dark:text-white'>Event</a>
								</Link>
							</li>
							<li>
								<Link href='/contact'>
									<a className='block pl-3 pr-4 text-blue-700 hover:text-gray-600 lg:p-0 dark:text-white'>Contact</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
