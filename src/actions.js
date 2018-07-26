import axios from 'axios'
import { request } from './helper'

export const SET_CITY_INFO = 'SET_CURRENT_CITY'
export const SET_CITY_IMG = 'SET_CITY_IMG'
export const SET_CITY_SCORES = 'SET_CITY_SCORES'
export const SET_CITY_WITH_MOST_COMMENTS = 'SET_CITY_WITH_MOST_COMMENTS'
export const SET_MATCHED_CITIES = 'SET_MATCHED_CITIES'
export const GET_COMMENTS_FOR_CITY = 'GET_COMMENTS_FOR_CITY'

const matchCat = (attArray, cityScores) => {
  return attArray.every(att => {
    const match = cityScores.find(obj => {
      return (obj.name === att.name && obj.score_out_of_10 >= att.score_out_of_10)
    })

    if(match){
      return true
    }
    else{
      return false
    }
  })
}


export const getCitiesByAtt = (attArray) => {
  return(dispatch) => {
    axios.get(`https://api.teleport.org/api/urban_areas/`)
      .then(response => {
        const cityScores = response.data._links['ua:item'].map(cityLink => {
          return axios.get(`${cityLink.href}scores`)
            .then(res => {
              return {
                name: cityLink.name,
                scores: res.data.categories,
                summary: res.data.summary
              }
            })
        })

        Promise.all(cityScores).then(response => {
          const matchedCities = response.filter(city => {
            console.log(city, matchCat(attArray, city.scores))
            return matchCat(attArray, city.scores)
          })

          const promisedCities = matchedCities.map((city) => {
            let slugCity;
            if(city.name === 'Galway'){
              slugCity = 'gaillimh'
            } else {
              slugCity = city.name.replace(/\s+/g, '-').replace(/\./g,'').replace(/,/g,'').toLowerCase();
            }
            return axios.get(`https://api.teleport.org/api/urban_areas/slug:${slugCity}/images/`).then(res => {
              city.img = res.data.photos[0].image.web
              return city
            })
          })

          Promise.all(promisedCities).then(citiesWithImages => {
            console.log(citiesWithImages)
            dispatch({type:SET_MATCHED_CITIES, payload: citiesWithImages})
          })
        })
      })
    }
}

export const getCityInfo = (cityName) => {
  if(cityName === 'Galway'){
    cityName = 'gaillimh'
  } else {
    cityName = cityName.replace(/\s+/g, '-').replace(/\./g,'').replace(/,/g,'').toLowerCase();
  }
  return(dispatch) => {
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/details/`)
    .then(response => {
      dispatch({type: SET_CITY_INFO, payload: response.data.categories})
    })
  }
}
export const getCityImg = (cityName) => {
  if(cityName === 'Galway'){
    cityName = 'gaillimh'
  } else {
    cityName = cityName.replace(/\s+/g, '-').replace(/\./g,'').replace(/,/g,'').toLowerCase();
  }
  return(dispatch) => {
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/images/`)
    .then(response => {
      dispatch({type: SET_CITY_IMG, payload: response.data.photos[0]})
    })
  }
}
export const getCityScores = (cityName) => {
  if(cityName === 'Galway'){
    cityName = 'gaillimh'
  } else {
    cityName = cityName.replace(/\s+/g, '-').replace(/\./g,'').replace(/,/g,'').toLowerCase();
  }
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
            dispatch({type: SET_CITY_WITH_MOST_COMMENTS, payload: response.data.data})
        })
    }
}

export const getCommentsForCity = (userId, cityId) => {
  // console.log(userId, cityId)
  return(dispatch) => {
    request(`/users/${userId}/city/${cityId}/comments`)
    .then(response => {
      // console.log('???', response)
      dispatch({type: GET_COMMENTS_FOR_CITY, payload: response.data.allReviews})
    })
  }
}

export const vote = (commentId, val, cI, userId) => {
  return(dispatch) => {
    request(`/users/${userId}/comments/${commentId}/votes`, 'post', {val})
    .then(response => {
      console.log(response)
      dispatch(getCommentsForCity(userId, cI))
    })
    .catch(err => console.log('Got error its okay tho', err))
  }
}

export const postComment = (title, content, userId, cI) => {
  return(dispatch) => {
    console.log(title, content, userId, cI);
    request(`/users/${userId}/city/${cI}/comments`, 'post', {title, content})
    .then(response => {
      console.log(response)
      dispatch(getCommentsForCity(userId, cI))
    })
  }
}
