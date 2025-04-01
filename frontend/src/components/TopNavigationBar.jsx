import '../styles/TopNavigationBar.scss'
import TopicList from '../components/TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({
    topics, 
    isFavPhotoExist,
    handleClickTopic,
    onClickHome
  }) => {

    const handleClickHome = () => {
      onClickHome();
    }

  return (
    <div className="top-nav-bar">
      <div onClick={handleClickHome}>
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </div>
      <TopicList 
      topics={topics}
      handleClickTopic={handleClickTopic}/>
      <FavBadge 
      isFavPhotoExist={isFavPhotoExist}
      selected={true}/>
    </div>
  )
};

export default TopNavigationBar;
