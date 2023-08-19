import { UserRepository } from "../repository/index.js";

export default class UserService {
  constructor() {
    this.UserRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.UserRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
