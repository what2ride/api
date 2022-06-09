/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from 'express';
import {Guid} from 'guid-typescript';
import logger from '../../middleware/logger';
import {carRouter} from './car/car.router';
import {planeRouter} from './plane/plane.router';
import {trainRouter} from './train/train.router';

/**
 * Router Definition
 */
export const v1Router = express.Router();

v1Router.use('/car', carRouter);
v1Router.use('/plane', planeRouter);
v1Router.use('/train', trainRouter);

v1Router.get('/', async (req: Request, res: Response) => {
	try {
		res.status(200).send('what2ride api v1');
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
