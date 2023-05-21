import { useState } from "react";
import useUser from "../../hooks/useUser";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const { getUserToken } = useUser();

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginData({ username: "", password: "" });
    await getUserToken(loginData);
  };

  return (
    <main className="login">
      <img
        src="./logo.svg"
        alt="Isdigram logo"
        width="210"
        className="login__logo"
      />
      <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
        <span className="login-form___error"></span>
        <input
          className="login-form__user"
          type="text"
          placeholder="Username"
          id="username"
          value={loginData.username}
          onChange={onChangeLogin}
        />
        <input
          className="login-form__password"
          type="password"
          placeholder="Password"
          id="password"
          value={loginData.password}
          onChange={onChangeLogin}
        />
        <button className="login-form__button">Login</button>
      </LoginFormStyled>
    </main>
  );
};

export default LoginForm;
