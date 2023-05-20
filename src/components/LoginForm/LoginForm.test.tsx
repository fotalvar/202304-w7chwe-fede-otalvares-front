import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text in the placeholder 'Username'", () => {
      render(<LoginForm />);

      const userNameTextField = screen.getByPlaceholderText("Username");

      expect(userNameTextField).toBeInTheDocument();
    });
  });
});
