import "../styles/PhotoList.scss";
import PhotoListItem from '../components/PhotoListItem';

const PhotoList = (props) => {

  const photos = props.photos;

  return (
    <ul className="photo-list">
      { photos.map((user, index) => 
      <PhotoListItem key={index} userData={user}/>
      )}
    </ul>
  );
};

export default PhotoList;