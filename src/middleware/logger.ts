import * as appRoot from 'app-root-path';
import * as winston from 'winston';

const options = {
	file_info: {
		level: 'info',
		filename: `${appRoot}/logs/app.log`,
		handleExceptions: true,
		json: true,
		maxsize: 5242880, // 5MB
		maxFiles: 5,
		colorize: false
	},
	file_error: {
		level: 'error',
		filename: `${appRoot}/logs/error.log`,
		handleExceptions: true,
		json: true,
		maxsize: 5242880, // 5MB
		maxFiles: 5,
		colorize: false
	},
	file_debug: {
		level: 'debug',
		filename: `${appRoot}/logs/debug.log`,
		handleExceptions: true,
		json: true,
		maxsize: 5242880, // 5MB
		maxFiles: 5,
		colorize: false
	},
	console: {
		level: 'debug',
		handleExceptions: true,
		json: false,
		colorize: true
	}
};
const logger: winston.Logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.json()
	),
	transports: [
		new winston.transports.File(options.file_info),
		new winston.transports.File(options.file_error),
		new winston.transports.File(options.file_debug),
		new winston.transports.Console(options.console)
	],
	exitOnError: false // do not exit on handled exceptions
});
export default logger;
