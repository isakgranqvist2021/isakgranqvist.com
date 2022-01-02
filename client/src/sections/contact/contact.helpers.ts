import { useState } from 'react';

import { AlertModel, ContactModel, contactSchema } from 'models';
import { postContact } from 'services';

import { INITIAL_FORM_STATE } from './contact.constants';

export const useContactState = () => {
	const [values, setValues] = useState<ContactModel>(INITIAL_FORM_STATE);
	const [alert, setAlert] = useState<AlertModel | null>(null);

	const submit = async () => {
		const result = contactSchema(values);

		if (result) {
			return setAlert({ message: result.message, severity: 'danger' });
		}

		const response = await postContact(values);

		setAlert({
			message: response.message,
			severity: response.success ? 'success' : 'danger',
		});

		if (response.success) setValues(INITIAL_FORM_STATE);
	};

	const setValue = (key: keyof ContactModel, value: string) => {
		setValues({
			...values,
			[key]: value,
		});
	};

	const clearAlert = () => {
		setAlert(null);
	};

	return { values, alert, submit, setValue, clearAlert };
};
