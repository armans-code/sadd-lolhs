import React, { useEffect } from 'react';
import './ContactPage.css';
import jumana from '../images/contact/jumana.png';
import revathy from '../images/contact/revathy.png';
import himani from '../images/contact/himani.png';
import arman from '../images/contact/arman.png';
import deeya from '../images/contact/deeya.png';
import madeline from '../images/contact/madeline.png';
import mulder from '../images/contact/mrs. mulder.png';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactCard from '../components/ContactCard';

function ContactPage() {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0 });
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className='flex flex-col items-center justify-between h-screen'>
			<div data-aos='fade-up' className='mt-28'>
				<div class='flex flex-wrap justify-center text-center mb-24'>
					<div class='w-full lg:w-6/12 px-4'>
						<h1 class='text-gray-900 text-4xl font-bold mb-8'>
							Join the Remind
						</h1>

						<p class='text-gray-700 text-lg font-light'>
							Join our chapter's remind class with the code below in order to
							receive updates about meeting times.
						</p>

						<a
							href='https://www.remind.com/classes/lolhssadd'
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-full'
						>
							<div className='bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg'>
								<h1 class='text-6xl font-light tracking-wide bg-gray-500 mt-8 p-4 gradient_text '>
									@lolhssadd
								</h1>
							</div>
						</a>
						<h1 class='text-gray-900 text-4xl font-bold mb-8 mt-24'>
							Join the Instagram
						</h1>

						<p class='text-gray-700 text-lg font-light'>
							Follow our chapter's Instagram account for updates and photos!
						</p>

						<a
							href='https://www.instagram.com/lolhs_sadd/'
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-full'
						>
							<div className='bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg'>
								<h1 class='text-6xl font-light tracking-wide bg-gray-500 mt-8 p-4 instagram_text '>
									@sadd_lolhs
								</h1>
							</div>
						</a>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ContactPage;
