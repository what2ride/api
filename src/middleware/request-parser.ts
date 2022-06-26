export const parseInput = (req: any): object => {
	let contentType: string = req.headers['content-type'];
	if(contentType.indexOf(';')) {
		contentType = contentType.substring(0, contentType.indexOf(';'));
	}


	let inputParams = {};

	switch (contentType) {
		case 'application/json':
			inputParams = req.body!!;
			break;
		case 'application/x-www-form-urlencoded':
			inputParams = req.params!!;
			break;
		default:
			inputParams = {};
	}

	return inputParams;
};
