import { useReducer } from 'react';

/* insert app levels actions below */
export const ACTIONS = {
  LIKE_PHOTO: 'LIKE_PHOTO',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, {
    likedPhotosArray: [],
    selectedPhotoId: null
  });

  const toggleSelectedPhoto = (id) => {
    dispatch({ type: 'SELECT_PHOTO', payload: id })
  }

  const handleClickFav = (id) => {
    dispatch({ type: 'LIKE_PHOTO', payload: id });
  };

  return { 
    toggleSelectedPhoto,    
    selectedPhotoId: state.selectedPhotoId,
    handleClickFav,
    likedPhotosArray: state.likedPhotosArray
  }
};

export default useApplicationData;