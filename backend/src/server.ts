import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import pino from 'pino';

dotenv.config();

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true // colorizes the log output
    }
  }
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
  logger.info('GET / - Hello, world!');
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/missed')
  .then(() => {
    logger.info('Connected to MongoDB');
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB', error);
  });
