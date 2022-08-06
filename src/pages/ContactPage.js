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
		<div class='flex flex-col mt-24 items-center'>
			<div data-aos='fade-up'>
				<div class='flex flex-wrap justify-center text-center mb-24'>
					<div class='w-full lg:w-6/12 px-4'>
						<h1 class='text-gray-900 text-4xl font-bold mb-8'>
							Join the Remind
						</h1>

						<p class='text-gray-700 text-lg font-light'>
							Join our chapter's remind class with the code below in order to
							receive updates about meeting times.
						</p>

						<div className='bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg'>
							<h1 class='text-6xl font-light tracking-wide bg-gray-500 mt-8 p-4 gradient_text '>
								@lolhsadd22
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div
				data-aos='fade-up'
				data-aos-delay='400'
				class='container max-w-7xl px-4 flex flex-col items-center'
			>
				{/* <!-- Section Header --> */}
				<div class='flex flex-wrap justify-center text-center mb-24'>
					<div class='w-full lg:w-6/12 px-4'>
						{/* <!-- Header --> */}
						<h1 class='text-gray-900 text-4xl font-bold mb-8'>Meet the Team</h1>

						{/* <!-- Description --> */}
						<p class='text-gray-700 text-lg font-light'>
							With an amazing sponsor and six well-skilled and experienced
							members, Land O' Lakes High School's SADD chapter has a great
							team.
						</p>
					</div>
				</div>

				<ContactCard name='Mrs. Mulder' role='Club Sponsor' image={mulder} />

				{/* members */}
				<div class='flex flex-wrap justify-center'>
					<ContactCard name='Jumana Ahmed' image={jumana} role='President' />
					<ContactCard
						name='Revathy Nateshan'
						image={revathy}
						role='Vice President'
					/>
					<ContactCard name='Himani Patel' image={himani} role='Secretary' />
					<ContactCard
						name='Madeline Reynolds'
						image={madeline}
						role='Treasurer'
					/>
					<ContactCard
						name='Arman Kumaraswamy'
						image={arman}
						role='Chief Technology Officer'
					/>
					<ContactCard
						name='Deeya Patel'
						image={deeya}
						role='Social Media/Outreach Manager'
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ContactPage;
