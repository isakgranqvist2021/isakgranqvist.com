import { AlertModel, ContactModel } from 'models';

export interface ContactState {
	values: ContactModel;
	alert: AlertModel | null;
	isLoading: boolean;
}
