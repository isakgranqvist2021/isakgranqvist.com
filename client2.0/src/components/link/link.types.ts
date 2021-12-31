import React from 'react';

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
	disabled?: boolean;
}
