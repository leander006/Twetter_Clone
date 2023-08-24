import CrudRepository from "./crud-repository.js";

import Comment from "../model/comment.js";

export default class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }

  async getByLikes(id) {
    try {
      const res = await Comment.findById(id).populate("likes");
      return res;
    } catch (error) {
      throw error;
    }
  }
}
