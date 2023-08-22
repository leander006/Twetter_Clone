import { execute } from "../../src/service/dummy-services.js";
import { helper } from "../../src/service/helper-service.js";

jest.mock("../../src/service/helper-service.js");

test("result is true and returns Learning JS", () => {
  helper.mockReturnValue(true);
  const result = execute();
  expect(result).toBe("Learning JS");
});

test("result is true and returns Learning ReactJS", () => {
  helper.mockReturnValue(false);
  const result = execute();
  expect(result).toBe("Learning ReactJS");
});
