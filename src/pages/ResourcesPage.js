import React from 'react';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import bylaws from '../resources/SADD Club By-Laws LOLHS.pdf';
import letter from '../resources/LOLHS SADD Sponsor Letter.pdf';

function ResourcesPage() {
	return (
		<div className='flex flex-col h-screen items-center justify-between'>
			<div class='mt-24 px-1 flex-col flex gap-20 items-center justify-around'>
				<ResourceCard
					name='Official SADD Website'
					desc='This is the official SADD website, where you can find information
					about the SADD mission, visions, events, etc.'
					link='https://www.sadd.org/'
					linkname='https://www.sadd.org/'
				/>
				<ResourceCard
					name='LOLHS SADD Club By-Laws'
					desc="This is our school chapter's By-laws, which explains the rules by which our club operates."
					link='Click here to download By-laws.'
					location={bylaws}
				/>
				<ResourceCard
					name='LOLHS SADD Sponsor Letter Template'
					desc="This is our chapter's letter meant to be sent to local businesses in search of sponsors."
					link='Click here to download Outreach Letter.'
					location={letter}
				/>
				<ResourceCard
					name='SADD Outreach Tracker'
					desc="This is our chapter's Outreach Tracker form, used to track our sponsors."
					link='https://forms.office.com/Pages/ResponsePage.aspx?id=aaJT4khSVE6bZ7duOoYiIGFiPVvxEt5Hsu8-1FmQxa5UN0VRWENFUkQ3SFFUMzkwRERKQk9JRzAwSS4u'
					linkname='Link to Outreach Tracker Form'
				/>
			</div>
			<Footer />
		</div>
	);
}

export default ResourcesPage;
