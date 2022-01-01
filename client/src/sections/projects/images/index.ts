import typescript from './typescript.png';
import node from './node.png';
import react from './react.png';
import aws from './aws.jpg';
import gcp from './gcp.png';
import dotnet from './dotnet.png';

import { BackgroundImage } from './images.types';

export const images: BackgroundImage[] = [
	{
		src: aws,
		bgSize: {
			default: 'contain',
			xs: '200%',
		},
	},
	{
		src: gcp,
		bgSize: {
			default: '70%',
			xs: '100%',
		},
	},
	{
		src: node,
		bgSize: {
			default: '50%',
			xs: '50%',
		},
	},
	{
		src: dotnet,
		bgSize: {
			default: 'cover',
			xs: 'cover',
		},
	},
	{
		src: typescript,
		bgSize: {
			default: 'cover',
			xs: 'cover',
		},
	},
	{
		src: react,
		bgSize: {
			default: 'cover',
			xs: 'hidden',
		},
	},
];
