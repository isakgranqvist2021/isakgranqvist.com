import { useState } from 'react';

import { ContactModel, contactSchema } from 'models';
import { postContact } from 'services';

import { INITIAL_FORM_STATE } from './contact.constants';
import { ContactState } from './contact.types';

export const useContactState = () => {
	const [state, setState] = useState<ContactState>({
		values: INITIAL_FORM_STATE,
		alert: null,
		isLoading: false,
	});

	const submit = async () => {
		const result = contactSchema(state.values);

		if (result) {
			return setState((prevState) => ({
				...prevState,
				alert: { message: result.message, severity: 'danger' },
			}));
		}

		setState((prevState) => ({
			...prevState,
			isLoading: true,
		}));

		const response = await postContact(state.values);

		setState((prevState) => ({
			values: response.success ? INITIAL_FORM_STATE : prevState.values,
			isLoading: false,
			alert: {
				message: response.message,
				severity: response.success ? 'success' : 'danger',
			},
		}));
	};

	const setValue = (key: keyof ContactModel, value: string) => {
		setState((prevState) => ({
			...prevState,
			values: {
				...prevState.values,
				[key]: value,
			},
		}));
	};

	const clearAlert = () => {
		setState((prevState) => ({
			...prevState,
			alert: null,
		}));
	};

	return {
		values: state.values,
		alert: state.alert,
		isLoading: state.isLoading,
		submit,
		setValue,
		clearAlert,
	};
};
