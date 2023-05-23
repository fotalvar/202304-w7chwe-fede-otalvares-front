import { UserCredentials, UserTokenData } from "../types";

export const tokenMock = "meowToken";

export const userDataMock: UserCredentials = {
  username: "RobertB",
  password: "meow",
};

export const userMock: UserTokenData = {
  isLogged: true,
  id: "123",
  name: "Juds",
  token: "meowmeowmeow",
};

export const userMockWithToken: UserTokenData = {
  ...userMock,
  isLogged: true,
};

export const InitialUserStateMock: UserTokenData = {
  isLogged: false,
  id: "",
  name: "",
  token: "",
};
