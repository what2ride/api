import * as dotenv from 'dotenv';
import {what2rideDB} from '../../../what2ride.db';

dotenv.config();

export const templateFunction = async (): Promise<boolean> => {
	let conn = await what2rideDB.getConnection();
	try {
		conn.query('SELECT * FROM car_manufacturers');
	} catch (err) {
		// Error handling
		throw err;
	} finally {
		// Return connection
		await conn.end();
	}

	return true;
};
