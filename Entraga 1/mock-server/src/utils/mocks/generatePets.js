import { faker } from "@faker-js/faker";

export const generateMockPets = (count) => {
  const pets = new Set();

  while (pets.size < count) {
    const name = faker.animal.dog();
    const pet = {
      name,
      type: faker.helpers.arrayElement(["dog", "cat"]),
      adopted: false, 
      owner: null, 
      createdAt: faker.date.past(1), 
    };

    // Asegurarse de que el nombre sea único
    pets.add(JSON.stringify(pet));
  }

  // Convertir de Set a Array
  return Array.from(pets).map((pet) => JSON.parse(pet));
};