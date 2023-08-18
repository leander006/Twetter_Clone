import CrudRepository from "./crud-repository.js";
import User from "../model/user.js";

export default class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}
