import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
	const [headerStyle, setHeaderStyle] = useState('');
	const [navActionStyle, setNavActionStyle] = useState('');
	const [logoStyle, setLogoStyle] = useState('text-white');
	const [textStyle, setTextStyle] = useState('text-white');
	const [hoverStyle, setHoverStyle] = useState('text-gray-800');

	const [showNav, setShowNav] = useState(false);

	let location = useLocation();

	// handles header coloring depending on home page & scroll position

	const handleScroll = (event) => {
		const position = window.scrollY;
		if (position > 10) {
			setHeaderStyle('bg-white shadow');
			setNavActionStyle(
				'text-white bg-gradient-to-r from-[#d53369] to-[#daae51]'
			);
			setLogoStyle('text-black');
			setTextStyle('text-black');
			setHoverStyle('text-[#d53369]');
		} else {
			setHeaderStyle('');
			setNavActionStyle('bg-white text-gray-800');
			setLogoStyle('text-white');
			setTextStyle('sm:text-black md:text-white');
			setHoverStyle('text-gray-800');
		}
	};

	useEffect(() => {
		if (location.pathname === '/') {
			handleScroll();
			window.addEventListener('scroll', handleScroll, { passive: true });

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		} else {
			setHeaderStyle('bg-white shadow');
			setNavActionStyle(
				'text-white bg-gradient-to-r from-[#d53369] to-[#daae51]'
			);
			setLogoStyle('text-black');
			setTextStyle('text-black');
			setHoverStyle('text-[#d53369]');
		}
	}, [location]);

	return (
		<header>
			<nav className={`transition fixed w-full z-30 top-0 ${headerStyle}`}>
				<div class='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
					<div class='pl-4 flex items-center'>
						<Link to='/'>
							<a
								className={`no-underline hover:no-underline font-bold text-2xl lg:text-4xl ${logoStyle}`}
							>
								SADD LOLHS
							</a>
						</Link>
					</div>
					<div class='block lg:hidden pr-4'>
						<button
							class='flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
							onClick={() => setShowNav(!showNav)}
						>
							<svg
								class='fill-current h-6 w-6'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<title>Menu</title>
								<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
							</svg>
						</button>
					</div>
					<div
						className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
							showNav ? '' : 'hidden'
						} mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}
						id='nav-content'
					>
						<ul
							className={`list-reset lg:flex justify-end flex-1 items-center transition ${textStyle}`}
						>
							<li class='mr-3'>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive
											? 'inline-block py-2 px-4 underline'
											: `inline-block hover:${hoverStyle} py-2 px-4`
									}
								>
									Home
								</NavLink>
							</li>
							<li class='mr-3'>
								<NavLink
									to='/resources'
									className={({ isActive }) =>
										isActive
											? 'inline-block py-2 px-4 underline'
											: `inline-block hover:${hoverStyle} py-2 px-4`
									}
								>
									Resources
								</NavLink>
							</li>
							<li class='mr-3'>
								<NavLink
									to='/projects'
									className={({ isActive }) =>
										isActive
											? 'inline-block py-2 px-4 underline'
											: `inline-block hover:${hoverStyle} py-2 px-4`
									}
								>
									Projects
								</NavLink>
							</li>
							<li class='mr-3'>
								<NavLink
									to='/team'
									className={({ isActive }) =>
										isActive
											? 'inline-block py-2 px-4 underline'
											: `inline-block hover:${hoverStyle} py-2 px-4`
									}
								>
									Meet the Team
								</NavLink>
							</li>
							<li class='mr-3'>
								<NavLink
									to='/contact'
									className={({ isActive }) =>
										isActive
											? 'inline-block py-2 px-4 underline'
											: `inline-block hover:${hoverStyle} py-2 px-4`
									}
								>
									Contact
								</NavLink>
							</li>
						</ul>
						<a
							href='https://forms.gle/XQk7i2hoQTz61m7r7'
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-full'
						>
							<button
								className={`mx-auto lg:mx-0 hover:underline bg-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${navActionStyle}`}
							>
								Join
							</button>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
