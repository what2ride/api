/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import {Guid} from 'guid-typescript';
import logger from '../../../middleware/logger';
import {costsRouter} from './costs/costs.router';
import {distanceRouter} from './distance/distance.router';
import {durationRouter} from './duration/duration.router';
import {emissionsRouter} from './emissions/emissions.router';

/**
 * Router Definition
 */
export const carRouter = express.Router();

carRouter.use('/costs', costsRouter);
carRouter.use('/distance', distanceRouter);
carRouter.use('/duration', durationRouter);
carRouter.use('/emissions', emissionsRouter);

carRouter.get('/', async (req: Request, res: Response) => {
	try {
		res.status(200).send('what2ride api v1 car endpoint');
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
