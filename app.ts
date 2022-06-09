import express from 'express';
import * as http from 'http';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import logger from './src/middleware/logger';
let cors = require('cors');

// Router imports here
import {v1Router} from './src/models/v1/v1.router';

// dotenv
dotenv.config();

// Check for correct env file loading
if (!process.env.PORT) {
	logger.error('No port');
	process.exit(1);
}

// Initialize express application
const port: number = parseInt(process.env.PORT, 10);
const app: express.Application = express();
const server: http.Server = http.createServer(app);

// Middleware to parse incoming requests as json
app.use(express.json());

// Enable CORS
app.use(cors());

// Swagger documentation
const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'what2ride api',
		version: '1.0.0',
		license: {
			name: 'Licensed Under MIT',
			url: 'https://spdx.org/licenses/MIT.html'
		},
		contact: {
			name: 'Patrick Müller',
			url: 'https://what2ride.info'
		}
	}
};

const options = {
	swaggerDefinition,
	// Paths to files containing OpenAPI definitions
	apis: [
		'./src/models/**/*.router.ts'
	]
};

const swaggerSpec = swaggerJSDoc(options);

app.use(
	'/docs',
	swaggerUi.serve,
	swaggerUi.setup(swaggerSpec)
);

// Add routers here
app.use('/v1', v1Router);

// this is a simple route to make sure everything is working properly
app.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('Welcome to the what2ride API!');
});

server.listen(port, () => {
	logger.info('Server listening on Port ' + port);
});
