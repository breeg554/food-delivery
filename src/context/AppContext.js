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
    };
  }
  loadDummyData = () => {
    this.setState(
      {
        restaurants: restaurants,
        filteredRestaurants: restaurants,
      },
      () => setTimeout(() => this.setState({ isLoading: false }), 1000) // API mockup
    );
  };

  handleGetRestaurant = (name) => {
    const { restaurants } = this.state;
    const index = restaurants.findIndex((res) => res.name.toLowerCase() === name.toLowerCase());

    if (index < 0) return null;
    return _.cloneDeep(restaurants[index]);
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
    this.setState({ shoppingCart: tmpShoppingCart });
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

    this.setState({ shoppingCart: tmpShoppingCart });
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
          getNumberOfProductInCart: this.getNumberOfProductInCart,
          removeFromShoppingCart: this.removeFromShoppingCart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
