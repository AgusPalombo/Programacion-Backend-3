import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "./utils/logger.js";
import mocksRouter from "./routers/mocks.router.js";
import { errorHandler } from "./utils/errors/errorHandler.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routers
app.use("/api/mocks", mocksRouter);

// Middleware de errores
app.use(errorHandler);

// Uso en conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => logger.info("✅ Conectado a MongoDB"))
  .catch(err => logger.error("❌ Error en MongoDB:", err));

const PORT = process.env.PORT || 8080

// Uso al iniciar el servidor
app.listen(PORT, () => {
  logger.info(`🚀 Servidor en http://localhost:${PORT}`);
});