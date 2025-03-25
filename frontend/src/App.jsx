import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState, useEffect } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [likedPhotosArray, setLikedPhotosArray] = useState([]);
  const [selectedPhotoId, setselectedPhotoId] = useState(null);

  const handleClickFav = (id) => {
    setLikedPhotosArray(prevArray => 
      prevArray.includes(id) 
        ? prevArray.filter(photoId => photoId !== id) // Remove if already liked
        : [...prevArray, id] // Add if not liked
    );  
  };

  const onClickPhoto = (id) => {
    (selectedPhotoId) 
    ? setselectedPhotoId(null)
    : setselectedPhotoId(id)
  }

  useEffect(() => {}, [likedPhotosArray]); // Trigger re-render if a photo is liked

  return (
    <div className="App"> 
      <HomeRoute 
      topics={topics} 
      photos={photos} 
      isFavPhotoExist={likedPhotosArray.length > 0}
      handleClickFav={handleClickFav} 
      likedPhotos={likedPhotosArray}
      onClickPhoto={onClickPhoto}
      />

      {selectedPhotoId && (
      <PhotoDetailsModal
      photoId={selectedPhotoId}
      photo={photos.find(photo => photo.id === selectedPhotoId)}
      // similarPhotos={selectedPhoto.similar_photos || []}
      likedPhotos={likedPhotosArray}
      onClickClose={onClickPhoto}
      />
      )}
    </div>
  );
};

export default App;