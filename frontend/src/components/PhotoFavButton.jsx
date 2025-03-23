import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  const handleClickFav = props.handleClickFav;
  const favouritePhoto = props.favouritePhoto

  // console.log(props.index)

  return (
    <div className="photo-list__fav-icon" onClick={handleClickFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhoto} index={props.index}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;