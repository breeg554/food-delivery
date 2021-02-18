import { useEffect, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import PrivateRoute from "./PrivateRoute";
import { AppContext } from "./context/AppContext";
import { theme } from "./utils/theme";
import { GlobalStyles } from "./GlobalStyles";
import Preloader from "./components/Preloader";
import HomePage from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import ShoppingCart from "./pages/ShoppingCart";
import DuringPreparation from "./pages/DuringPreparation";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const { loadDummyData, isLoading } = useContext(AppContext);

  const handleFirstTab = (e) => {
    if (e.keyCode === 9) {
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    document.body.classList.remove("user-is-tabbing");

    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  };

  useEffect(() => {
    loadDummyData();
    window.addEventListener("keydown", handleFirstTab);
    return () => window.removeEventListener("keydown", handleFirstTab);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <ReactNotification />
      <GlobalStyles />
      {isLoading ? (
        <Preloader />
      ) : (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={ShoppingCart} />
          <PrivateRoute path="/preparation" exact component={DuringPreparation} />
          <Route exact path="/:name" component={Restaurant} />
          <Route component={ErrorPage} />
        </Switch>
      )}
    </ThemeProvider>
  );
};

export default App;
