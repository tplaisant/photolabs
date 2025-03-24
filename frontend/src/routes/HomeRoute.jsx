import "../styles/HomeRoute.scss";
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({
    topics, 
    photos, 
    isFavPhotoExist, 
    handleClickFav, 
    likedPhotos 
  }) => {

  return (
    <div className="home-route"> 
      <TopNavigationBar 
      topics={topics} 
      isFavPhotoExist={isFavPhotoExist}
      />   
      <PhotoList 
      photos={photos} 
      handleClickFav={handleClickFav}
      likedPhotos={likedPhotos}
      />
    </div>
  );
};

export default HomeRoute;