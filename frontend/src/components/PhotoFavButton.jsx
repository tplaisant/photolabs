import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({
  handleClickFav,
  id,
  likedPhotos
}) => {

  const handleClick = () => {
    handleClickFav(id);
  }  
  const favouritePhoto = likedPhotos.includes(id)

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
        selected={favouritePhoto}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;