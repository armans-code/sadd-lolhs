function ResourceCard(props) {
	return (
		<article class='overflow-hidden rounded-lg shadow-lg items-center flex flex-col justify-center gap-2 p-4'>
			<h1 class='text-lg'>
				{props.location ? (
					<a
						class='no-underline hover:underline text-black'
						href={props.location}
						download
					>
						{props.name}
					</a>
				) : (
					<a
						class='no-underline hover:underline text-black'
						href={props.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						{props.name}
					</a>
				)}
			</h1>
			{props.location ? (
				<a className={`text-pink-500 underline`} href={props.location} download>
					{props.link}
				</a>
			) : (
				<a
					href={props.link}
					target='_blank'
					rel='noopener noreferrer'
					className={`text-pink-500 underline`}
				>
					{props.linkname}
				</a>
			)}
			<p className='text-sm text-gray-600'>{props.desc}</p>
		</article>
	);
}

export default ResourceCard;
