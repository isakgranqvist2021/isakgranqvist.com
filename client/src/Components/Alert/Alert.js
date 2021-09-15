/** @format */

import { useState, useEffect } from 'react';
import alertsReducer from '../../Store/alerts.reducer';
import './Alert.scss';

function Alert(props) {
	const [alert, setAlert] = useState({
		type: 'success',
		message: 'an error has occured',
		show: false,
	});

	useEffect(() => {
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
					<span onClick={() => setAlert({ ...alert, show: false })}>
						<span className='material-icons-outlined'>close</span>
					</span>
				</div>
			)}
		</div>
	);
}

export default Alert;
