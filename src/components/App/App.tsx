import { ThemeProvider } from "styled-components";
import LoginForm from "../LoginForm/LoginForm";
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../styles/theme/theme";

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoginForm />
      </ThemeProvider>
    </>
  );
};

export default App;
