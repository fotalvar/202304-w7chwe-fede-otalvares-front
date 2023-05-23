import { renderHook } from "@testing-library/react";
import { tokenMock, userDataMock } from "../mocks/mocks";
import useUser from "./useUser";

describe("Given a getUserToken function", () => {
  describe("When its called with a username Robert and the password meow", () => {
    test("Then it should return a token", async () => {
      const mockToken = tokenMock;

      const user = userDataMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(mockToken);
    });
  });
});
