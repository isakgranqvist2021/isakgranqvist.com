import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	outlined?: boolean;
	variant?: 'primary' | 'secondary';
}
