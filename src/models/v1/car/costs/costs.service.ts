import * as dotenv from 'dotenv';
import {what2rideDB} from '../../../what2ride.db';

dotenv.config();

export const templateFunction = async (): Promise<boolean> => {
	let conn = what2rideDB.getConnection();
	try {
		// Fetch stuff from db
	} catch (err) {
		// Error handling
		throw err;
	} finally {
		// Return connection
		await conn.end();
	}

	return true;
};
