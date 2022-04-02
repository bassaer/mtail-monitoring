import winston, { format, transports } from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(log => {
      return `${log.timestamp} [${log.level.toUpperCase()}] ${log.message}`
    })
  ),
  transports: [
    new transports.Console()
  ],
});

export default logger;
