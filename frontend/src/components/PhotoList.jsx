import "../styles/PhotoList.scss";
import PhotoListItem from '../components/PhotoListItem';

const PhotoList = ({
  photos,
  handleClickFav,
  likedPhotos,
  onClickPhoto
}) => {

  return (
    <ul className="photo-list">
      { photos.map((user) =>         
      <PhotoListItem 
      key={user.id} 
      userData={user} 
      handleClickFav={handleClickFav} 
      likedPhotos={likedPhotos}
      onClickPhoto={onClickPhoto}
      />
      )}
    </ul>
  );
};

export default PhotoList;