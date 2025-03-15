import "../styles/HomeRoute.scss";
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {

  const topics = props.topics;
  const photos = props.photos;
  const favPhoto = props.favPhoto;

  return (
    <div className="home-route"> 
      <TopNavigationBar topics={topics} favPhoto={favPhoto}/>   
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;
