import {
  InitialUserStateMock,
  userMock,
  userMockWithToken,
} from "../../mocks/mocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an empty user state and a loginUser action with an user", () => {
    test("Then it should return the new state of the user", () => {
      const expectedNewUserState = userMock;

      const currentUserState = InitialUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userMockWithToken)
      );
      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});
