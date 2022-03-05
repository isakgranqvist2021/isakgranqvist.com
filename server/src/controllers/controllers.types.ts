export interface EmailRequestBody {
	email: string;
	name: string;
	message: string;
}

export interface ResponseBody {
	message: string;
	success: boolean;
	data: any;
}
