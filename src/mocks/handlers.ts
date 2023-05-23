// src/mocks/handlers.js
import { rest } from "msw";
import { apiUrl } from "../hooks/useUser";
import { tokenMock } from "./mocks";

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
];
