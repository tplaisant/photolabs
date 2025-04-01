import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = ({}) => {
  
  const { 
    toggleSelectedPhoto,
    likedPhotosArray,
    selectedPhotoId,
    handleClickFav,
    photoData,
    topicData,
    photoByTopic,
    handleClickTopic,
    onClickHome } = useApplicationData();

  return (
    <div className="App"> 
      <HomeRoute 
      topics={topicData} 
      photos={(photoByTopic.length !== 0) ? photoByTopic : photoData} 
      isFavPhotoExist={likedPhotosArray.length > 0}
      handleClickFav={handleClickFav} 
      handleClickTopic={handleClickTopic}
      likedPhotos={likedPhotosArray}
      onClickPhoto={toggleSelectedPhoto}
      onClickHome={onClickHome}
      />

      {selectedPhotoId && 
      <PhotoDetailsModal
      photoId={selectedPhotoId}
      photo={photoData.find(photo => photo.id === selectedPhotoId)}
      likedPhotos={likedPhotosArray}
      onClickClose={toggleSelectedPhoto}
      handleClickFav={handleClickFav}
      />
      }
    </div>
  );
};

export default App;