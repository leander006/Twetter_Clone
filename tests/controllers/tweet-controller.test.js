import { getTweet } from "../../src/controllers/tweet-controller";
import TweetService from "../../src/service/tweet-service";
import { mockRequest, mockResponse } from "../mocker";

jest.mock("../../src/service/tweet-service");

describe("Get tweet controller testing", () => {
  test("should return tweets", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [
      {
        content: "tweet1",
      },
      {
        content: "tweet2",
      },
    ];

    TweetService.prototype.get.mockReturnValue(response);
    await getTweet(req, res);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "Successfully fetched a tweet",
      data: response,
      err: {},
    });
  });
});
