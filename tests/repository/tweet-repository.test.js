import Tweet from "../../src/model/tweet.js";
import TweetRepository from "../../src/repository/tweet-repository.js";

jest.mock("../../src/model/tweet.js");

describe("Create test tweet", () => {
  test("should create new twete and return is", async () => {
    const data = {
      content: "Testing tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "2022-02-19", updatedAt: "2022-02-19" };
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);
    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
  });

  test("should not create a tweet and through new exception", async () => {
    const data = {
      content: "Testing tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("something went wrong");
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});

describe("Get all tweets", () => {
  test("Testing getAll function", async () => {
    const data = {
      content: "Testing tweet",
    };
    const tweetArray = [
      { ...data, createdAt: "2022-02-19", updatedAt: "2022-02-19" },
      { ...data, createdAt: "2022-02-19", updatedAt: "2022-02-19" },
      { ...data, createdAt: "2022-02-19", updatedAt: "2022-02-19" },
    ];
    const finalResponse = { tweetArray };
    finalResponse.skip = jest.fn((offset) => finalResponse);
    finalResponse.limit = jest.fn((limit) =>
      finalResponse.tweetArray.slice(0, limit)
    );
    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return finalResponse;
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.getAll(0, 2);
    expect(spy).toHaveBeenCalled();
    expect(tweet).toHaveLength(2);
  });
});
