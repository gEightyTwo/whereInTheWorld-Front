import axios from 'axios'
import { request } from './helper'

export const SET_CITY_INFO = 'SET_CURRENT_CITY'
export const SET_CITY_IMG = 'SET_CITY_IMG'
export const SET_CITY_SCORES = 'SET_CITY_SCORES'
export const SET_CITY_WITH_MOST_COMMENTS = 'SET_CITY_WITH_MOST_COMMENTS'



export const getCityInfo = (cityName) => {
  cityName = cityName.replace(/\s+/g, '-').toLowerCase();
  return(dispatch) => {
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/details/`)
    .then(response => {
      dispatch({type: SET_CITY_INFO, payload: response.data.categories})
    })
  }
}
export const getCityImg = (cityName) => {
  cityName = cityName.replace(/\s+/g, '-').toLowerCase();
  return(dispatch) => {
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/images/`)
    .then(response => {
      dispatch({type: SET_CITY_IMG, payload: response.data.photos[0]})
    })
  }
}
export const getCityScores = (cityName) => {
  cityName = cityName.replace(/\s+/g, '-').toLowerCase();
  return(dispatch) => {
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`)
    .then(response => {
      dispatch({type: SET_CITY_SCORES, payload: {categories: response.data.categories, summary: response.data.summary, score:response.data.teleport_city_score}})
    })
  }
}

export const getCityCard = () => {
    return(dispatch) => {
        request('/cities')
        .then(response => {
            console.log(response.data)
            dispatch({type: SET_CITY_WITH_MOST_COMMENTS, payload: response.data.data})
        })
    }
}
