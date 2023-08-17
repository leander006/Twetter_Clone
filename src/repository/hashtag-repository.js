const Hashtag = require("../model/hashtags");

class HashtagRepository {
  async create(data) {
    try {
      const res = await Hashtag.create(data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async bulkCreate(data) {
    try {
      const res = await Hashtag.insertMany(data);
      return res;
    } catch (error) {
      console.log("error ", error);
      throw error;
    }
  }

  async getByName(titleList) {
    try {
      const res = await Hashtag.find({
        title: titleList,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const res = await Hashtag.findById(id);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getByComments(id) {
    try {
      const res = await Hashtag.findById(id);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      await Hashtag.findByIdAndDelete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = HashtagRepository;
