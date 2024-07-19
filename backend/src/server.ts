import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import pino from 'pino';
import authRoutes from './routes/auth.routes';
import postRoutes from './routes/post.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.config';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create pino logger
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

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
