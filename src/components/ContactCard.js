import React from 'react';

function ContactCard(props) {
	return (
		<div className='w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4'>
			<div className='flex flex-col'>
				{/* image */}
				<a className='mx-auto w-72 h-72'>
					<img
						className='rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 object-cover w-full h-full'
						src={props.image}
					/>
				</a>

				<div className='text-center mt-6'>
					{/* name */}
					<h1 className='text-gray-900 text-xl font-bold mb-1'>{props.name}</h1>

					{/* role */}
					<div className='text-gray-700 font-light mb-2'>{props.role}</div>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
