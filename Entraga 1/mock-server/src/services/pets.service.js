// pets.service.js
import { Pet } from "../models/pet.model.js";

export const petService = {
  createMany: async (pets) => {
    return await Pet.insertMany(pets, { maxTimeMS: 30000 });
  }
};