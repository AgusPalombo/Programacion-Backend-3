// users.service.js
import { User } from "../models/user.model.js";

export const userService = {
  createMany: async (users) => {
    return await User.insertMany(users, { maxTimeMS: 30000 });
  }
};
