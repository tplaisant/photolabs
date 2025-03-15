import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = (props) => {

  const [favouritePhoto, setFavouritePhoto] = useState(false);
  const handleClick = () => {
    setFavouritePhoto(prev => !prev);
  }

  console.log(props.index)

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhoto} />
      </div>
    </div>
  );
};

export default PhotoFavButton;