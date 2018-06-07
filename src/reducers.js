import { combineReducers } from "redux";
import {
  SET_CITY_INFO,
  SET_CITY_IMG,
  SET_CITY_SCORES,
  SET_CITY_WITH_MOST_COMMENTS,
  SET_MATCHED_CITIES,
  GET_COMMENTS_FOR_CITY
} from "./actions";

const cityInfo = (state = [], action) => {
  switch (action.type) {
    case SET_CITY_INFO:
      return action.payload;
    default:
      return state;
  }
};
const cityImages = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY_IMG:
      return action.payload;
    default:
      return state;
  }
};
const cityScores = (state = [], action) => {
  switch (action.type) {
    case SET_CITY_SCORES:
      return action.payload;
    default:
      return state;
  }
};

const citiesWithMostComments = (state = [], action) => {
  switch (action.type) {
    case SET_CITY_WITH_MOST_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};

const cityFoundWithSetAttributes = (state = [], action) => {
  switch (action.type) {
    case SET_MATCHED_CITIES:
      return action.payload;
    default:
      return state;
  }
};

const currentCityComments = (state=[], action) => {
  switch(action.type) {
    case GET_COMMENTS_FOR_CITY:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  cityInfo,
  cityImages,
  cityScores,
  citiesWithMostComments,
  cityFoundWithSetAttributes,
  currentCityComments
});
