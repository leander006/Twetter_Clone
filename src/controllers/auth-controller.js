import UserService from "../service/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a password",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in signup",
      data: {},
      err: error,
    });
  }
};
