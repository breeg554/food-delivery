import React, { Component, createContext } from "react";
import _ from "lodash";
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
      shoppingCart: {},
      totalCost: 0,
    };
  }
  loadDummyData = () => {
    this.setState(
      {
        restaurants: restaurants,
        filteredRestaurants: restaurants,
      },
      () => setTimeout(() => this.setState({ isLoading: false }), 2000) // API mockup
    );
  };
  handleClearRestaurantFilter = () => {
    this.setState({ restaurantCategory: "ALL", restaurantInputValue: "" });
  };
  handleClearShoppingCart = () => {
    this.setState({ shoppingCart: {} });
  };
  handleGetRestaurant = (name) => {
    const { restaurants } = this.state;
    const index = restaurants.findIndex((res) => res.name.toLowerCase() === name.toLowerCase());

    if (index < 0) return null;
    return _.cloneDeep(restaurants[index]);
  };
  handleGetDeliveryCost = () => {
    const { shoppingCart, restaurants } = this.state;
    let tmpCost = 0;
    Object.keys(shoppingCart).forEach((res) => {
      const index = restaurants.findIndex((el) => el.name === res);
      tmpCost += restaurants[index].deliveryCost;
    });
    return tmpCost;
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
  handleUpdateTotalCost = () => {
    const { shoppingCart } = this.state;
    let tmpCost = 0;
    Object.keys(shoppingCart).forEach((res) => {
      shoppingCart[res].forEach((el) => (tmpCost += el.total));
    });
    this.setState({ totalCost: tmpCost });
  };

  pushToShoppingCart = (meal) => {
    const { shoppingCart } = this.state;
    const tmpShoppingCart = _.cloneDeep(shoppingCart);

    if (!tmpShoppingCart[meal.restaurant]) tmpShoppingCart[meal.restaurant] = [];
    let index = tmpShoppingCart[meal.restaurant].findIndex((el) => el.id === meal.id);

    if (index < 0) {
      index = tmpShoppingCart[meal.restaurant].length;
      tmpShoppingCart[meal.restaurant].push(meal);
    }

    tmpShoppingCart[meal.restaurant][index].count++;
    tmpShoppingCart[meal.restaurant][index].total =
      tmpShoppingCart[meal.restaurant][index].cost * tmpShoppingCart[meal.restaurant][index].count;
    this.setState({ shoppingCart: tmpShoppingCart }, () => this.handleUpdateTotalCost());
  };

  removeFromShoppingCart = (meal) => {
    const { shoppingCart } = this.state;
    const tmpShoppingCart = { ...shoppingCart };

    const index = tmpShoppingCart[meal.restaurant].findIndex((el) => el.id === meal.id);
    const tmpMeal = tmpShoppingCart[meal.restaurant][index];

    if (meal.count === 1) {
      tmpShoppingCart[meal.restaurant].splice(index, 1);
      if (tmpShoppingCart[meal.restaurant].length <= 0) {
        delete tmpShoppingCart[meal.restaurant];
      }
    } else {
      tmpMeal.count--;
      tmpMeal.total = tmpMeal.cost * tmpMeal.count;
      tmpShoppingCart[meal.restaurant][index] = tmpMeal;
    }

    this.setState({ shoppingCart: tmpShoppingCart }, () => this.handleUpdateTotalCost());
  };
  getNumberOfProductInCart = () => {
    const { shoppingCart } = this.state;
    let count = 0;
    Object.keys(shoppingCart).forEach((res) => {
      shoppingCart[res].forEach((meal) => {
        count += meal.count;
      });
    });

    return count;
  };
  checkIfInShoppingCart = (meal) => {
    const { shoppingCart } = this.state;
    let isIn = false;
    Object.keys(shoppingCart).forEach((res) => {
      if (meal.restaurant === res) {
        const index = shoppingCart[res].findIndex((el) => el.id === meal.id);
        if (index > -1) return (isIn = true);
      }
    });
    return isIn;
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
          pushToShoppingCart: this.pushToShoppingCart,
          removeFromShoppingCart: this.removeFromShoppingCart,
          getNumberOfProductInCart: this.getNumberOfProductInCart,
          handleGetDeliveryCost: this.handleGetDeliveryCost,
          handleClearRestaurantFilter: this.handleClearRestaurantFilter,
          checkIfInShoppingCart: this.checkIfInShoppingCart,
          handleClearShoppingCart: this.handleClearShoppingCart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
