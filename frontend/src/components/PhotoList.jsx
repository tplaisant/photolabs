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
      { photos.map((photo) => (  
      <PhotoListItem 
      key={photo.id}
      photo={photo} 
      handleClickFav={handleClickFav} 
      likedPhotos={likedPhotos}
      onClickPhoto={onClickPhoto}
      />
      ))}
    </ul>
  );
};

export default PhotoList;