/** @format */

import React from 'react';

function Block(props) {
	return (
		<div className='block'>
			<h2 className='uk-heading-medium'>{props.title}</h2>
			<p className='uk-tile-default' style={{ maxWidth: '90ch' }}>
				{props.body}
			</p>
			<hr className='uk-divider-icon' />
		</div>
	);
}

export default Block;
