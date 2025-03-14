import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = (props) => {
  
  const [favouritePhoto, setFavouritePhoto] = useState(false);
  const handleClick = () => {
    setFavouritePhoto(prev => !prev);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon active={favouritePhoto} />
      </div>
    </div>
  );
};

export default PhotoFavButton;