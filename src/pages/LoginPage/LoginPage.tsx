import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types";
import { useEffect } from "react";

const LoginPage = (): JSX.Element => {
  const { getUserToken } = useUser();
  const { getUserData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/user/home", { replace: true });
    }
  });

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);

    localStorage.setItem("token", token);

    const userData = getUserData(token);
    dispatch(loginUserActionCreator(userData));

    if (localStorage.getItem("token")) {
      navigate("/user/home", { replace: true });
    }
  };

  return (
    <>
      <LoginForm handleLoginSubmit={handleFormSubmit} />
    </>
  );
};

export default LoginPage;
