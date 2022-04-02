import express from 'express'
import morgan from 'morgan';
import logger from './logger';

const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('short', { stream: logger.stream}));
const stream = {
  write: (message: string) => {
    logger.info(message.trim());
  }
};
app.use(morgan('short', { stream }));

app.get('/', (req, res) => {

  res.send("OK");
});

app.listen(Number(port), '0.0.0.0', () => {
  logger.info(`start server : http://localhost:${port}`);
});
