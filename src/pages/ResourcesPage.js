import React from 'react';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';

function ResourcesPage() {
	return (
		<div className='flex flex-col h-screen items-center justify-between'>
			<div class='mt-24 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3'>
				<ResourceCard
					name='Official SADD website'
					desc='This is the official SADD website, where you can find information
					about the SADD mission, visions, events, etc.'
					link='https://www.sadd.org/'
				/>
			</div>
			<Footer />
		</div>
	);
}

export default ResourcesPage;
