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
    return res.status(500).json({
      success: false,
      message: "Something went wrong in signup",
      data: {},
      err: error,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const token = await userService.getByEmail(
      req.body.email,
      req.body.password
    );
    return res.status(201).json({
      success: true,
      message: "Successfully login",
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: error.success,
      message: error.message,
      data: error.data,
      err: error.err,
    });
  }
};
