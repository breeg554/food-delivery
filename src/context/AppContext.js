import React, { Component, createContext } from "react";
import { restaurants } from "../dummyData/data.json";

const AppContext = createContext();

class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      filteredRestaurants: [],
      restaurantCategory: "ALL",
      restaurantInputValue: "",
      isLoading: true,
    };
  }
  loadDummyData = () => {
    this.setState(
      {
        restaurants: restaurants,
        filteredRestaurants: restaurants,
      },
      () => setTimeout(() => this.setState({ isLoading: false }), 1000) //mockup API
    );
  };
  handleGetRestaurant = (name) => {
    const { restaurants } = this.state;
    const index = restaurants.findIndex((res) => res.name.toLowerCase() === name.toLowerCase());

    if (index < 0) return null;
    return restaurants[index];
  };
  handleChangeInputValue = (e) => {
    this.setState({
      restaurantInputValue: e.target.value,
    });
  };
  handleChangeCategory = (value) => {
    this.setState({ restaurantCategory: value });
  };
  handleFilterRestaurants = () => {
    const { restaurants, restaurantCategory, restaurantInputValue } = this.state;

    let tmpRestaurants = restaurants.filter((res) => {
      if (!res.name.toLowerCase().includes(restaurantInputValue.toLocaleLowerCase())) return false;
      if (restaurantCategory === "ALL") return true;

      let hasCategory = false;

      res.categories.forEach((cat) => {
        if (cat === restaurantCategory) hasCategory = true;
      });

      return hasCategory;
    });

    this.setState({ filteredRestaurants: tmpRestaurants });
  };
  componentDidUpdate(prevProp, prevState) {
    const { restaurantCategory, restaurantInputValue } = this.state;

    if (prevState.restaurantCategory !== restaurantCategory || prevState.restaurantInputValue !== restaurantInputValue) {
      this.handleFilterRestaurants();
    }
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          loadDummyData: this.loadDummyData,
          handleChangeCategory: this.handleChangeCategory,
          handleChangeValue: this.handleChangeInputValue,
          handleGetRestaurant: this.handleGetRestaurant,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
