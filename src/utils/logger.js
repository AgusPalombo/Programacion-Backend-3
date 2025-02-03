import winston from "winston";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear directorio de logs si no existe
const logsDir = path.join(__dirname, "../../logs");
winston.configure({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: path.join(logsDir, "errors.log"),
      level: "error",
      format: winston.format.json(),
    }),
    new winston.transports.File({
      filename: path.join(logsDir, "combined.log"),
      format: winston.format.json(),
    }),
  ],
});

const logger = winston.createLogger({
  level: "info",
  exitOnError: false,
});

export default logger;