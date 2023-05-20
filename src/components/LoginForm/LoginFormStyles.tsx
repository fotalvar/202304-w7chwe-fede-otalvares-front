import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0, auto;
  gap: 20px;

  .login-form {
    &__button {
      height: 51px;
      left: 16px;
      right: 16px;
      bottom: 406px;
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
