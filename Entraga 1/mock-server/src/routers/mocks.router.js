import express from "express";
import { generateMockUsers } from "../utils/mocks/generateUsers.js";
import { generateMockPets } from "../utils/mocks/generatePets.js";
import { petService } from "../services/pets.service.js";
import { userService } from "../services/users.service.js";
import logger from "../utils/logger.js";

const router = express.Router();

// GET: Generar mascotas mock
router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets(100);
  logger.info("Mascotas generadas (no guardadas en DB)");
  res.json({ status: "success", data: pets });
});

// GET: Generar usuarios mock
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50);
  logger.info("Usuarios generados (no guardados en DB)");
  res.json({ status: "success", data: users });
});

// POST: Insertar datos mock en DB
router.post("/generateData", async (req, res, next) => {
  try {
    const { users, pets } = req.body;
    const userCount = parseInt(users);
    const petCount = parseInt(pets);

    // Validación numérica
    if (isNaN(userCount) || isNaN(petCount) || userCount <= 0 || petCount <= 0) {
      return res.status(400).json({
        status: "error",
        message: "Parámetros inválidos. Se esperan números positivos.",
      });
    }

    // Generar e insertar datos
    const insertedUsers = await userService.createMany(generateMockUsers(userCount));
    const insertedPets = await petService.createMany(generateMockPets(petCount));

    logger.info(`Datos insertados: ${userCount} usuarios, ${petCount} mascotas`);
    res.status(201).json({
      status: "success",
      data: {
        users: insertedUsers,
        pets: insertedPets,
      },
    });
  } catch (error) {
    logger.error("Error insertando datos mock:", error);
    next(error);
  }
});


export default router;