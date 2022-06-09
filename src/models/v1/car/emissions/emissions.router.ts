/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import {Guid} from 'guid-typescript';
import logger from '../../../../middleware/logger';

/**
 * Router Definition
 */
export const emissionsRouter = express.Router();

emissionsRouter.get('/', async (req: Request, res: Response) => {
	try {
		res.status(200).send('what2ride api v1 car emissions endpoint');
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
