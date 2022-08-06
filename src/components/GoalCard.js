import React from 'react';

function GoalCard(props) {
	return (
		<div class='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
			<div class='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow'>
				<a class='flex gap-2 flex-wrap'>
					<p class='w-full text-gray-600 text-xs md:text-sm px-6'>
						Goal #{props.number}
					</p>
					<div class='w-full font-bold text-xl text-gray-800 px-6'>
						{props.title}
					</div>
					<p class='text-gray-800 text-base px-6 mb-5'>{props.desc}</p>
				</a>
			</div>
		</div>
	);
}

export default GoalCard;
