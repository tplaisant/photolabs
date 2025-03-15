import '../styles/TopNavigationBar.scss'
import TopicList from '../components/TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const topics = props.topics;
  const favPhoto = props.favPhoto;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={favPhoto}/>
    </div>
  )
};

export default TopNavigation;
