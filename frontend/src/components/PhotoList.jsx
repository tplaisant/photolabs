import "../styles/PhotoList.scss";
import PhotoListItem from '../components/PhotoListItem';

const PhotoList = (props) => {

  const photos = props.photos;
  const handleClickFav = props.handleClickFav;
  const favouritePhoto = props.favouritePhoto

  return (
    <ul className="photo-list">
      { photos.map((user, index) => 
      <PhotoListItem key={index} userData={user} handleClickFav={handleClickFav} favouritePhoto={favouritePhoto}/>
      )}
    </ul>
  );
};

export default PhotoList;