import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0, auto;
  gap: 10px;

  .login-form {
    &__button {
      height: 51px;
      margin-top: 30px;
      background: #d62f7f;
      border-radius: 100px;
      border: none;
      color: white;
      cursor: pointer;
    }

    &__user,
    &__password {
      background: #f6f6f6;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      height: 60px;
      padding: 15px;
    }
  }
`;

export default LoginFormStyled;
