import { TweetRepository, CommentRepository } from "../repository/index.js";

export default class CommentService {
  constructor() {
    this.TweetRepository = new TweetRepository();
    this.CommentRepository = new CommentRepository();
  }

  async createComment(modelId, modelType, userId, content) {
    try {
      if (modelType == "Tweet") {
        var commentable = await this.TweetRepository.getById(modelId);
      } else if (modelType == "Comment") {
        var commentable = await this.CommentRepository.getById(modelId);
      } else {
        throw new Error("Unknown model type");
      }

      const comment = await this.CommentRepository.create({
        content: content,
        user: userId,
        onModel: modelType,
        commentable: modelId,
        comments: [],
        likes: [],
      });

      console.log("commentable ", commentable);
      commentable.comments.push(comment);
      await commentable.save();

      return comment;
    } catch (error) {
      throw error;
    }
  }
}
