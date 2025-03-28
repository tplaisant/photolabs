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
    likedPhotosArray: [],
    selectedPhotoId: null,
    photoData: [],
    topicData: [],
    photoByTopic: []
  });

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
    .then((response) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data: response.data } }))
    
    axios.get('http://localhost:8001/api/topics')
    .then((response) => dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: { data: response.data } }))  
  }, []);

  const toggleSelectedPhoto = (id) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: id })
  }

  const handleClickFav = (id) => {
    dispatch({ type: ACTIONS.LIKE_PHOTO, payload: id });
  };

  const handleClickTopic = (id) => {
    axios.get(`http://localhost:8001/api/topics/${id}/photos`)
    .then((response) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: { data: response.data } }))  
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: id });
  }
  
  return { 
    toggleSelectedPhoto,    
    selectedPhotoId: state.selectedPhotoId,
    handleClickFav,
    handleClickTopic,
    likedPhotosArray: state.likedPhotosArray,
    photoData: state.photoData,
    topicData: state.topicData
  }
};

export default useApplicationData;