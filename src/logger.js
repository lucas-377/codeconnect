import { createLogger, format, transports } from "winston";

/**
 * App logger
 */
const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),
  ],
});

export default logger;
