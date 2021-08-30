/** @format */

import React from 'react';

function Project(props) {
	return (
		<div className='uk-margin-large-top uk-margin-large-bottom'>
			<div
				className='uk-position-relative uk-visible-toggle uk-light'
				tabIndex='-1'
				uk-slideshow='animation: pull'>
				<ul className='uk-slideshow-items'>
					{props.images.map((img, i) => (
						<li key={i}>
							<img
								uk-cover='true'
								loading='lazy'
								src={img.src}
								alt={img.alt}
							/>
						</li>
					))}
				</ul>

				<a
					className='uk-position-center-left uk-position-small uk-hidden-hover'
					href='#'
					uk-slidenav-previous='true'
					uk-slideshow-item='previous'></a>
				<a
					className='uk-position-center-right uk-position-small uk-hidden-hover'
					href='#'
					uk-slidenav-next='true'
					uk-slideshow-item='next'></a>
			</div>
			<h2 className='uk-heading-small'>{props.label}</h2>
			<p>{props.description}</p>
			<div className='actions'>
				{props.href != null ? (
					<a
						className='uk-button uk-button-default uk-margin-right'
						href={props.href}>
						website
					</a>
				) : (
					''
				)}
				{props.github != null ? (
					<a
						className='uk-button uk-button-primary'
						href={props.github}>
						github repository
					</a>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default Project;
