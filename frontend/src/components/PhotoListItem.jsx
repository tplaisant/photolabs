import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {id, location, urls, user} = props.photoData

  return (
    <>
    <img src={urls.regular}/>
    <img src={user.profile}/>
    <br></br>
    {user.name}
    <br></br>
    {location.city}  {""}
    {location.country}
    </>
  )
};

export default PhotoListItem;