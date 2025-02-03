import { User } from "../../models/user.model.js";
import bcrypt from "bcrypt";

const firstNames = ["Ana", "Luis", "Marta", "Pedro", "Sofía"];
const lastNames = ["Gómez", "Pérez", "López", "Martínez", "Rodríguez"];

export const generateMockUsers = (count) => {
  return Array.from({ length: count }, () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return new User({
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@mock.com`,
      password: bcrypt.hashSync("coder123", 10),
      role: Math.random() < 0.2 ? "admin" : "user",
      pets: []
    });
  });
};