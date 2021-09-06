/** @format */

import React from 'react';
import alertsReducer from '../../Store/alerts.reducer';
import './Alert.scss';

function Alert(props) {
	const [alert, setAlert] = React.useState({
		type: 'success',
		message: 'an error has occured',
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
					className={['alert', ' ', 'alert', '-', alert.type].join(
						''
					)}>
					<p>{alert.message}</p>
					<a onClick={() => setAlert({ ...alert, show: false })}>
						<span className='material-icons-outlined'>close</span>
					</a>
				</div>
			)}
		</div>
	);
}

export default Alert;
