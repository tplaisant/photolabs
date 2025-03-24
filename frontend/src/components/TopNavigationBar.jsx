import '../styles/TopNavigationBar.scss'
import TopicList from '../components/TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({
    topics, 
    isFavPhotoExist
  }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
};

export default TopNavigationBar;
