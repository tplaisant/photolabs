import { useReducer, useEffect } from 'react';
import axios from 'axios';

/* insert app levels actions below */
export const ACTIONS = {
  LIKE_PHOTO: 'LIKE_PHOTO',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS_DATA: 'SET_TOPICS_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

const API_URL = 'http://localhost:8001/api';

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LIKE_PHOTO:
      return state.likedPhotosArray.includes(action.payload)
      ? {
        ...state,
        likedPhotosArray: state.likedPhotosArray.filter(id => id !== action.payload)
      } // Remove if already existed
      : {
        ...state,
        likedPhotosArray: [...state.likedPhotosArray, action.payload]
      }; // Add if it doesn't exist      
    case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhotoId: state.selectedPhotoId === action.payload ? null : action.payload
    };
    case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload.data      
    };
    case ACTIONS.SET_TOPICS_DATA:
    return {
      ...state,
      topicData: action.payload.data      
    };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return {
      ...state,
      photoByTopic: action.payload.data      
    };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, {
    // Initialize
    likedPhotosArray: [],
    selectedPhotoId: null,
    photoData: [],
    topicData: [],
    photoByTopic: []
  });

  useEffect(() => {

    // Retrieve photos
    const photosPromise = axios.get(`${API_URL}/photos`);
    // Retrieve topics
    const topicPromise = axios.get(`${API_URL}/topics`);
    const promises = [photosPromise, topicPromise];

    Promise.all(promises)
     .then((responseArray) => {

      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data: responseArray[0].data } })
      dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: { data: responseArray[1].data } })
     })
     .catch((error) => {
      console.log(error.message);
     })
  }, []);

  const toggleSelectedPhoto = (id) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: id })
  }

  const handleClickFav = (id) => {
    dispatch({ type: ACTIONS.LIKE_PHOTO, payload: id });
  };

  const onClickHome = () => {
    // Retrieve photos by topic when user click on specific topic
    axios.get(`${API_URL}/photos`)
    .then((response) => {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: { data: response.data } })})
    .catch((error) => {
      console.log(error.message)
    })
  }

  const handleClickTopic = (id) => {
    // Retrieve photos by topic when user click on specific topic
    axios.get(`${API_URL}/topics/${id}/photos`)
    .then((response) => {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: { data: response.data } })})
    .catch((error) => {
      console.log(error.message)
    })
  }
  
  return { 
    toggleSelectedPhoto,    
    selectedPhotoId: state.selectedPhotoId,
    handleClickFav,
    handleClickTopic,
    likedPhotosArray: state.likedPhotosArray,
    photoData: state.photoData,
    topicData: state.topicData,
    photoByTopic: state.photoByTopic,
    onClickHome,
  }
};

export default useApplicationData;