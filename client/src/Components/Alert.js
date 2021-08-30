/** @format */

import React from 'react';
import alertsReducer from '../Store/alerts.reducer';

function Alert(props) {
	const [alert, setAlert] = React.useState({
		type: '',
		message: '',
		show: false,
	});

	React.useEffect(() => {
		let ar = alertsReducer.subscribe(() => {
			setAlert({
				...alertsReducer.getState(),
				show: true,
			});
			window.setTimeout(
				() => setAlert({ type: '', message: '', show: false }),
				6500
			);
		});

		return () => ar();
	}, []);

	return (
		<div>
			{alert.show && (
				<div
					className={['uk-alert-' + alert.type].join(' ')}
					uk-alert='true'>
					<a
						className='uk-alert-close'
						uk-icon='icon: close'
						onClick={() =>
							setAlert({ type: '', message: '', show: false })
						}></a>
					<p>{alert.message}</p>
				</div>
			)}
		</div>
	);
}

export default Alert;
