import "../styles/PhotoListItem.scss";
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoListItem = (props) => {

  const {id, location, urls, user} = props.photo
  const handleClickFav = props.handleClickFav
  const likedPhotos = props.likedPhotos
  const onClickPhoto = props.onClickPhoto

  const handleClick = () => {
    onClickPhoto(id);
  }  

  return (
    <div className ="photo-list__item">
      <div>
        <PhotoFavButton 
        id={id} 
        handleClickFav={handleClickFav}
        likedPhotos={likedPhotos}
        />
      </div>
      <div onClick={handleClick}>
        <img className ="photo-list__image" src={urls.regular}/>    
        <div className="photo-list__user-details">      
          <img className ="photo-list__user-profile" src={user.profile}/>
          <div className="photo-list__user-info">
            {user.name}
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>      
      </div>
    </div>
  )
};

export default PhotoListItem;