/** @format */

import React from 'react';

function Block(props) {
	return (
		<div className='block uk-margin-auto'>
			<article className='uk-article'>
				<h2 className='uk-article-title'>{props.title}</h2>
				<p
					className='uk-text-default'
					style={{
						maxWidth: '90ch',
					}}>
					{props.body}
				</p>
			</article>
		</div>
	);
}

export default Block;
