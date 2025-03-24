import "../styles/PhotoList.scss";
import PhotoListItem from '../components/PhotoListItem';

const PhotoList = (props) => {

  const photos = props.photos;
  const handleClickFav = props.handleClickFav;
  const likedPhotos = props.likedPhotos

  return (
    <ul className="photo-list">
      { photos.map((user) =>         
      <PhotoListItem 
      key={user.id} 
      userData={user} 
      handleClickFav={handleClickFav} 
      // favouritePhoto={favPhoto}
      likedPhotos={likedPhotos}
      />
      )}
    </ul>
  );
};

export default PhotoList;