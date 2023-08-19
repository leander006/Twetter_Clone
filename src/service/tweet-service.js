import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.TweetRepository = new TweetRepository();
    this.HashtagRepository = new HashtagRepository();
  }

  async create(data) {
    try {
      const content = data.content;
      const tags = content
        .match(/#[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\a-zA-Z0-9]+/g)
        .map((tag) => tag.substring(1).toLowerCase());

      // console.log(tags);
      const tweet = await this.TweetRepository.create(data);
      let alreadyPresentTag = await this.HashtagRepository.getByName(tags);
      let newHashTag = alreadyPresentTag.map((tags) => tags.title);
      let newTags = tags.filter((tag) => !newHashTag.includes(tag));
      newTags = newTags.map((tag) => {
        return {
          title: tag,
          tweets: [tweet.id],
        };
      });
      await this.HashtagRepository.bulkCreate(newTags);
      alreadyPresentTag.forEach((tag) => {
        tag.tweets.push(tweet.id), tag.save();
      });
      return tweet;
    } catch (error) {
      throw error;
    }
  }

  async get(tweetId) {
    try {
      const tweet = await this.TweetRepository.getByComments(tweetId);
      return tweet;
    } catch (error) {
      throw error;
    }
  }
}

export default TweetService;
