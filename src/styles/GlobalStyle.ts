import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

#root {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 auto;
  align-items: center;
  padding: 30px;
}

.tasks {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  &__subtitle {
  color: #c5c5c5;
  font-weight: 300;
  }
}

.task {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__name {
    font-size: 16px;
    max-width: 200px;
    margin-left: 10px;
    font-weight: 300;
  }
  &__button {
    height: 48px;
    width: 48px;
    background-color: transparent;
    border: none;
    font-weight: 700;
    color: #c5c5c5;
    padding: 20px;
    cursor: pointer;
  }
}

.form {
  display: flex;
  width: 100%;

  &__button {
    width: 70px;
    background-color: #d05a9d;
    border: none;
    border-radius: 0 10px 10px 0;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  &__input {
    width: 100%;
    height: 48px;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    border: 2px solid #d05a9d;
  }
}
`;

export default GlobalStyle;
