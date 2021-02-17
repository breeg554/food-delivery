import React, { Component, createContext } from "react";
import { restaurants } from "../dummyData/data.json";

const AppContext = createContext();

class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      isLoading: true,
      isError: false,
    };
  }
  loadDummyData = () => {
    this.setState({ restaurants: restaurants, isLoading: false });
  };
  render() {
    return (
      <AppContext.Provider
        value={{ ...this.state, loadDummyData: this.loadDummyData }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
