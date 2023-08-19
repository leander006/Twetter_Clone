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

  async getByEmail(email, password) {
    try {
      const user = await this.UserRepository.getByEmail(email);
      if (!user) {
        throw {
          success: false,
          message: "No user found",
          data: {},
          err: "Something went wrong in signin",
        };
      }
      if (!user.comparePassword(password)) {
        throw {
          success: false,
          message: "Incorrect password",
          data: {},
          err: "Something went wrong in signin",
        };
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}
