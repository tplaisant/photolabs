import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  const handleClickFav = props.handleClickFav;
  // const favouritePhoto = props.favouritePhoto
  const id = props.id

  const handleClick = () => {
    handleClickFav(id);
  }  

  const likedPhotos = props.likedPhotos
  const favouritePhoto = likedPhotos.includes(id)
  console.log(favouritePhoto)

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