import "../styles/HomeRoute.scss";
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {

  const topics = props.topics;
  const photos = props.photos;
  const favPhoto = props.favPhoto;
  const handleClickFav = props.handleClickFav;
  const likedPhotos = props.likedPhotos

  return (
    <div className="home-route"> 
      <TopNavigationBar 
      topics={topics} 
      favPhoto={favPhoto}
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