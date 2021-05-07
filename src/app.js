import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw({type: 'application/xml'}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.get('/', (_, response) => {
    response.status(200).json({
        status: 'success',
        message: 'welcome to Ecosystem API v1',
    });
});

app.all('*', (_, response) => {
    response.status(404).json({
        status: 'error',
        error: 'resource not found',
    });
});

export default app;
