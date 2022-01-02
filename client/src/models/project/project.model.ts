import { ImageModel } from 'models/image';

export interface ProjectModel {
	label: string;
	description: string;
	images: ImageModel[];
	href: string;
	github: string;
}
