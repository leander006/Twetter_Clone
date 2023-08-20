import TweetService from "../service/tweet-service.js";
import { upload } from "../config/file-upload-s3.js";
const singleUpload = upload.single("image");
const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    singleUpload(req, res, async function (error, data) {
      if (error) {
        return res.status(500).json({
          error,
        });
      }
      const payload = req.body;
      payload.image = req.file.location;
      const response = await tweetService.create(payload);
      return res.status(201).json({
        success: true,
        message: "Successfully created a tweet",
        data: response,
        err: {},
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in tweet creation",
      data: {},
      err: error,
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching tweet",
      data: {},
      err: error,
    });
  }
};
