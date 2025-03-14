import "../styles/HomeRoute.scss";
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {

  const topics = props.topics;
  const photos = props.photos;

  return (
    <div className="home-route"> 
      <TopNavigationBar topics={topics}/>   
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;
