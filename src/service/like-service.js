import { LikeRepository, TweetRepository } from "../repository/index.js";

export default class LikeService {
  constructor() {
    this.LikeRepository = new LikeRepository();
    this.TweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    try {
      if (modelType == "Tweet") {
        var likeable = await this.TweetRepository.getByLikes(modelId);
      } else if (modelType == "Comment") {
        // Do something
      } else {
        throw new Error("Unknown model type");
      }

      let exists = await this.LikeRepository.findByUserLikeable({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });

      if (exists) {
        likeable.likes.pull(exists.id);
        await likeable.save();
        await this.LikeRepository.delete(exists.id);
        var isAdded = false;
      } else {
        const newLike = await this.LikeRepository.create({
          user: userId,
          onModel: modelType,
          likeable: modelId,
        });
        likeable.likes.push(newLike);
        await likeable.save();
        var isAdded = true;
      }
      return isAdded;
    } catch (error) {
      throw error;
    }
  }
}
