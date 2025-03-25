import { useState } from 'react';

const useApplicationData = () => {

const [likedPhotosArray, setLikedPhotosArray] = useState([]);
const [selectedPhotoId, setselectedPhotoId] = useState(null);

const onClickPhoto = (id) => {
  (selectedPhotoId) 
  ? setselectedPhotoId(null)
  : setselectedPhotoId(id)
}

const handleClickFav = (id) => {
  setLikedPhotosArray(prevArray => 
    prevArray.includes(id) 
      ? prevArray.filter(photoId => photoId !== id) // Remove if already liked
      : [...prevArray, id] // Add if not liked
  );  
};

return { onClickPhoto,
    likedPhotosArray,
    setLikedPhotosArray, 
    selectedPhotoId,
    setselectedPhotoId,
    handleClickFav }

};

export default useApplicationData;