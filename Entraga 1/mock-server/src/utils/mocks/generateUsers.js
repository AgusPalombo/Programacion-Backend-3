import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

export const generateMockUsers = (count) => {
  const users = new Set();

  while (users.size < count) {
    const email = faker.internet.email().toLowerCase();
    const user = {
      email,
      password: bcrypt.hashSync("coder123", 10), 
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: [], 
    };

    // Asegurarse de que el email sea único
    users.add(JSON.stringify(user));
  }

  // Convertir de Set a Array
  return Array.from(users).map((user) => JSON.parse(user));
};