import React from 'react';

function ResourceCard(props) {
	return (
		<article class='overflow-hidden rounded-lg shadow-lg items-center flex flex-col justify-center gap-2 p-4'>
			<h1 class='text-lg'>
				<a class='no-underline hover:underline text-black' href='#'>
					{props.name}
				</a>
			</h1>
			<a
				href={props.link}
				target='_blank'
				rel='noopener noreferrer'
				className={`text-pink-500 underline`}
			>
				{props.link}
			</a>
			<p className='text-sm text-gray-600'>{props.desc}</p>
		</article>
	);
}

export default ResourceCard;
