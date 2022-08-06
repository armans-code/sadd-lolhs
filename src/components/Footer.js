import React from 'react';

function Footer(props) {
	const color = props.color === 'white' ? 'white' : 'gray-600';
	const link = props.link === 'white' ? 'text-white' : 'text-pink-500';
	return (
		<div className='mt-8'>
			<p className={`text-${color}`}>
				Made with ❤ by&nbsp;
				<a
					href='https://github.com/armans-code'
					target='_blank'
					rel='noopener noreferrer'
					className={`${link} underline`}
				>
					Arman
				</a>
			</p>
		</div>
	);
}

export default Footer;
