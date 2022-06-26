import * as dotenv from 'dotenv';

const mariadb = require('mariadb');
dotenv.config();

export namespace what2rideDB {
	const pool = mariadb.createPool({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: 'what2ride_db',
		connectionLimit: 5
	});

	export const getConnection = async() => {
		return pool.getConnection();
	}
}
