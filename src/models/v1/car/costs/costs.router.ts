/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import {Guid} from 'guid-typescript';
import logger from '../../../../middleware/logger';

import * as costService from './costs.service';

/**
 * Router Definition
 */
export const costsRouter = express.Router();

costsRouter.get('/', async (req: Request, res: Response) => {
	try {
		res.status(200).send('what2ride api v1 car costs endpoint');
	} catch (e: any) {
		let errorGuid = Guid.create().toString();
		logger.error('Error handling a request: ' + e.message, {reference: errorGuid});
		res.status(500).send({
			'status': 'PROCESSING_ERROR',
			'message': 'Internal Server Error. Try again later.',
			'reference': errorGuid
		});
	}
});

costsRouter.post('/', async (req: Request, res: Response) => {
	try {
		// Read input params
		const origin_address = req.body.origin_address;
		const destination_address = req.body.destination_address;
		// Call service method
		let success = await costService.templateFunction();

		res.status(200).send({costs: 200, currency: '€'});
	} catch (e: any) {
		let errorGuid = Guid.create().toString();
		logger.error('Error handling a request: ' + e.message, {reference: errorGuid});
		res.status(500).send({
			'status': 'PROCESSING_ERROR',
			'message': 'Internal Server Error. Try again later.',
			'reference': errorGuid
		});
	}
});
