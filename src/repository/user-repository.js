import CrudRepository from "./crud-repository.js";
import User from "../model/user.js";

export default class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async getByEmail(data) {
    try {
      const user = await User.findOne({ email: data });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
