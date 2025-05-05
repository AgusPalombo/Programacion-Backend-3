import { faker } from "@faker-js/faker";

export const generateMockPets = (count) => {
  const pets = new Set();

  while (pets.size < count) {
    const type = faker.helpers.arrayElement(["dog", "cat"]);
    const name = type === "cat" ? faker.animal.cat() : faker.animal.dog();
    const pet = {
      name,
      type,
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