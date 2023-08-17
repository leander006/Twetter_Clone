import Tweet from "../model/tweet.js";

export default class TweetRepository {
  async create(data) {
    try {
      const res = await Tweet.create(data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getAll(offset, limit) {
    try {
      const res = await Tweet.find().skip(offset).limit(limit);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const res = await Tweet.findById(id);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getByComments(id) {
    try {
      const res = await Tweet.findById(id).populate("comments");
      return res;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      await Tweet.findByIdAndDelete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
