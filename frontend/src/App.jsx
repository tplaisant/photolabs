import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
// import { useState } from 'react';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = ({}) => {
  
  const { onClickPhoto,
    likedPhotosArray,
    setLikedPhotosArray, 
    selectedPhotoId,
    setselectedPhotoId,
    handleClickFav } = useApplicationData();

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
      likedPhotos={likedPhotosArray}
      onClickClose={onClickPhoto}
      handleClickFav={handleClickFav}
      />
      )}
    </div>
  );
};

export default App;