import { Pet } from "../../models/pet.model.js";

const petNames = ["Max", "Luna", "Rocky", "Bella", "Charlie"];
const petTypes = ["dog", "cat"];

export const generateMockPets = (count) => {
  return Array.from({ length: count }, () => {
    return new Pet({
      name: petNames[Math.floor(Math.random() * petNames.length)],
      type: petTypes[Math.floor(Math.random() * petTypes.length)],
      adopted: false,
      owner: null,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
    });
  });
};