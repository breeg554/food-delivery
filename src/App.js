import { useEffect, useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { theme } from "./utils/theme";
import Preloader from "./components/Preloader";
import HomePage from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import ShoppingCart from "./pages/ShoppingCart";
const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 10px; // 1rem = 10px 
  }
  body{
    font-family: 'Montserrat', sans-serif;
  }
`;

const App = () => {
  const { loadDummyData, isLoading } = useContext(AppContext);
  useEffect(() => {
    loadDummyData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {isLoading ? (
        <Preloader />
      ) : (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/:name" component={Restaurant} />
        </Switch>
      )}
    </ThemeProvider>
  );
};

export default App;
