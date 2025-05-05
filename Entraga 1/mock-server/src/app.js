import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "./utils/logger.js";
import mocksRouter from "./routers/mocks.router.js";
import { errorHandler } from "./utils/errors/errorHandler.js";

const app = express();
dotenv.config();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routers
app.use("/api/mocks", mocksRouter);

// Middleware de errores
app.use(errorHandler);


const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  logger.error("❌ Error: MONGO_URI no está definido en el archivo .env");
  process.exit(1); // Salir del proceso si no se puede conectar a la base de datos
}
// Uso en conexión a MongoDB
mongoose.connect(MONGO_URI)
  .then(() => logger.info("✅ Conectado a MongoDB"))
  .catch(err => logger.error("❌ Error en MongoDB:", err));

// Puerto del servidor
const PORT = process.env.PORT;
if (!PORT) {
  logger.error("❌ Error: PORT no está definido en el archivo .env");
  process.exit(1); // Salir del proceso si no se puede iniciar el servidor
}

// Uso al iniciar el servidor
app.listen(PORT, () => {
  logger.info(`🚀 Servidor en http://localhost:${PORT}`);
});