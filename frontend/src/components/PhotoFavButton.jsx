import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  const handleClickFav = props.handleClickFav;
  const favouritePhoto = props.favouritePhoto

  return (
    <div className="photo-list__fav-icon" onClick={handleClickFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhoto}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;