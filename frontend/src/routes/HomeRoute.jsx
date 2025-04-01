import "../styles/HomeRoute.scss";
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({
    topics, 
    photos, 
    isFavPhotoExist, 
    handleClickFav, 
    likedPhotos,
    onClickPhoto,
    handleClickTopic,
    onClickHome,
  }) => {

  return (
    <div className="home-route"> 
      <TopNavigationBar 
      topics={topics} 
      isFavPhotoExist={isFavPhotoExist}
      handleClickTopic={handleClickTopic}
      onClickHome={onClickHome}
      />   
      <PhotoList 
      photos={photos} 
      handleClickFav={handleClickFav}
      likedPhotos={likedPhotos}
      onClickPhoto={onClickPhoto}
      />
    </div>
  );
};

export default HomeRoute;