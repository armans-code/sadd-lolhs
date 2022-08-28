import React, { useEffect } from 'react';
import image from '../images/home/ud_living.svg';
import mindfulness from '../images/home/ud_mindfulness.svg';
import join from '../images/home/ud_join.svg';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoalCard from '../components/GoalCard';
import topsvg from '../images/home/topsvg.svg';
import botsvg from '../images/home/botsvg.svg';

function HomePage() {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0 });
		AOS.init({
			offset: 150,
		});
		AOS.refresh();
	}, []);

	return (
		<div className='leading-normal tracking-normal text-white bg-gradient-to-r from-[#d53369] to-[#daae51]'>
			<div className='flex flex-col h-screen'>
				<div className='pt-24 px-12'>
					<div
						data-aos='fade-up'
						class='container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center'
					>
						<div class='flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left'>
							<p class='uppercase tracking-loose w-full'>
								<a
									href='https://lolhs.pasco.k12.fl.us/'
									target='_blank'
									rel='noopener noreferrer'
									className='underline'
								>
									Land O' Lakes High School
								</a>
							</p>
							<h1 class='my-4 text-5xl font-bold leading-tight'>
								Welcome to our SADD Chapter!
							</h1>
							<p class='leading-normal text-2xl mb-8'>
								Our&nbsp;
								<a
									href='https://www.sadd.org/'
									target='_blank'
									rel='noopener noreferrer'
									className='underline'
								>
									SADD
								</a>
								&nbsp;Club aims to foster a safe space for education on
								stigmatized issues to help students learn more and better
								themselves.
							</p>
							<a
								href='https://forms.gle/XQk7i2hoQTz61m7r7'
								target='_blank'
								rel='noopener noreferrer'
								className='rounded-full bg-blue-500'
							>
								<button class='bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg transform transition hover:scale-105 duration-300 ease-in-out'>
									Join
								</button>
							</a>
						</div>
						{/* <!--Right Col--> */}
						<div class='w-full md:w-3/5 py-6 text-center hidden md:block'>
							<img class='w-full md:w-4/5 z-50' src={image} alt='' />
						</div>
					</div>
				</div>
				<div class='relative'>
					<img src={topsvg} />
				</div>
				<section class='bg-white border-b py-8'>
					<div class='container max-w-5xl mx-auto m-8'>
						<h1 class='w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800'>
							About Our Chapter
						</h1>
						<div data-aos='fade-up' class='flex flex-wrap'>
							<div class='w-5/6 sm:w-1/2 p-6'>
								<h3 class='text-3xl text-gray-800 font-bold leading-none mb-3'>
									What is SADD?
								</h3>
								<p class='text-gray-600 mb-8'>
									“Students Against Destructive Decisions” is a national
									non-profit dedicated to the safety and wellness of all
									students. Using 40 years of expertise to facilitate
									educational and engaging programming, SADD operates through
									school and community chapters (like student clubs) dedicated
									to advocating healthy decision-making.
									<br />
									<br />
									Learn more about SADD:&nbsp;
									<a
										class='text-pink-500 underline'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.sadd.org/'
									>
										sadd.org
									</a>
								</p>
							</div>
							<div class='w-full sm:w-1/2 p-6'>
								<img src={mindfulness} alt='' />
							</div>
						</div>
						<div
							data-aos='fade-up'
							class='flex flex-wrap flex-col-reverse sm:flex-row'
						>
							<div className='w-full sm:w-1/2 px-20'>
								<img src={join} alt='' />
							</div>
							<div class='w-full sm:w-1/2 p-6 mt-6'>
								<div class='align-middle'>
									<h3 class='text-3xl text-gray-800 font-bold leading-none mb-3'>
										How to join our chapter
									</h3>
									<p class='text-gray-600 mb-8'>
										In order to join the chapter as a member, you must attend
										Land O' Lakes High School. If you click below, you will
										redirected to a Google Form, in which you can enter your
										name, grade, student number, etc. Additionally,{' '}
										<u>please join the Remind class,</u> where meeting updates
										will be sent. The remind code can be found in the{' '}
										<NavLink className='text-pink-500 underline' to='/contact'>
											contact page
										</NavLink>
										.
										<br />
										<br />
										Google Form Registration Link:&nbsp;
										<a
											href='https://forms.gle/XQk7i2hoQTz61m7r7'
											target='_blank'
											rel='noopener noreferrer'
											className='text-pink-500 underline'
										>
											forms.gle/XQk7i2hoQTz61m7r7
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class='bg-white py-8'>
					<div
						data-aos='fade-up'
						class='container mx-auto flex flex-wrap pt-4 pb-12'
					>
						<h1 class='w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800'>
							Our Goals
						</h1>

						<GoalCard
							title='Empower positive change'
							desc='Empower young people to successfully confront the risks and pressures that challenge them throughout their daily lives.'
							number='1'
						/>

						<GoalCard
							title='Promote leadership & collaboration'
							desc='Students gain critical leadership and organizational skills
								  		in a manner that emphasizes community engagement and
								  		well-being.'
							number='2'
						/>

						<GoalCard
							title='Provide CAS & Service Hours'
							desc='Students have an opportunity to gain enough community
										service/CAS hours in order to learn their impact on the
										community and ensure graduation requirements.'
							number='3'
						/>
					</div>
				</section>
				<section class='bg-gradient-to-r from-[#d53369] to-[#daae51] flex flex-col items-center justify-center'>
					<img src={botsvg} />
					<div
						data-aos='fade-up'
						className='flex flex-col justify-center items-center'
					>
						<h1 class='w-full my-2 text-5xl font-bold leading-tight text-center text-white'>
							Reach Out!
						</h1>
						<div class='w-full mb-4'>
							<div class='h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t'></div>
						</div>
						<h3 class='my-4 text-3xl leading-tight text-center text-white'>
							Have any questions? Want more information?
						</h3>
						<NavLink to='/contact'>
							<button class='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
								Contact Us
							</button>
						</NavLink>
					</div>
					<Footer color='white' link='white' />
				</section>
			</div>
		</div>
	);
}

export default HomePage;
