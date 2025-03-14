import "../styles/PhotoList.scss";
import PhotoListItem from '../components/PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      { photos.map((user, index) => 
      <PhotoListItem key={index} userData={user}/>
      )}
    </ul>
  );
};

export default PhotoList;