import express from "express";
import { generateMockUsers } from "../utils/mocks/generateUsers.js";
import { generateMockPets } from "../utils/mocks/generatePets.js";
import { petService } from "../services/pets.service.js";
import { userService } from "../services/users.service.js";
import logger from "../utils/logger.js";

const router = express.Router();

// GET: Generar 100 mascotas mock
router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets(100);
  logger.info("Mascotas generadas (no guardadas en DB)");
  res.json({ status: "success", data: pets });
});

// GET: Generar 50 usuarios mock
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50);
  logger.info("Usuarios generados (no guardados en DB)");
  res.json({ status: "success", data: users });
});

// POST: Insertar datos mock en DB
router.post("/generateData", async (req, res) => {
  try {
    const { users, pets } = req.body;
    const insertedUsers = await userService.createMany(generateMockUsers(users));
    const insertedPets = await petService.createMany(generateMockPets(pets));
    
    logger.info(`Datos insertados: ${users} usuarios, ${pets} mascotas`);
    res.json({ 
      status: "success", 
      data: { users: insertedUsers, pets: insertedPets } 
    });
    
  } catch (error) {
    logger.error("Error insertando datos mock:", error);
    next(error);
  }
});

export default router;