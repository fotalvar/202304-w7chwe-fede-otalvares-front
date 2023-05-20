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
}

.login{
  min-height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
`;

export default GlobalStyle;
