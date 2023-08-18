import Like from "../model/like.js";
import CrudRepository from "./crud-repository.js";

export default class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findByUserLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      throw error;
    }
  }
}
