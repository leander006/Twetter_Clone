import Tweet from "../model/tweet.js";
import CrudRepository from "./crud-repository.js";

export default class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async getAll(offset, limit) {
    try {
      const res = await Tweet.find().skip(offset).limit(limit);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getByComments(id) {
    try {
      const res = await Tweet.findById(id).populate({
        path: "comments",
        populate: { path: "comments" },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getByLikes(id) {
    try {
      const res = await Tweet.findById(id).populate("likes");
      return res;
    } catch (error) {
      throw error;
    }
  }
}
