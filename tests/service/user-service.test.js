import UserService from "../../src/service/user-service.js";

import UserRepository from "../../src/repository/user-repository.js";

jest.mock("../../src/repository/user-repository.js");

describe("user service signup test", () => {
  test("should successfully create the user", async () => {
    const data = {
      email: "leander@gmail.com",
      password: "12345",
    };

    UserRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: "2022-02-19",
      updatedAt: "2022-02-19",
    });
    const service = new UserService();
    const resp = await service.signup();
    expect(resp.email).toBe(data.email);
  });
});
