import { useState } from 'react';

import { Styled } from './alert.styled';

export const Alert = () => {
	const [alert, setAlert] = useState({
		type: 'success',
		message: 'an error has occured',
		show: false,
	});

	return (
		<div>
			{alert.show && (
				<Styled.Alert className={['alert', '-', alert.type].join('')}>
					<p>{alert.message}</p>
					<span onClick={() => setAlert({ ...alert, show: false })}>
						<span className='material-icons-outlined'>close</span>
					</span>
				</Styled.Alert>
			)}
		</div>
	);
};
