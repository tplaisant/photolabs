import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import { useState, useReducer } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favPhoto, setFavPhoto] = useState(false)
  const [likedPhoto, dispatch] = useReducer((likedPhoto, amount) => {
    likedPhoto => 1 && setFavPhoto(prev => !prev) 
    }, 0);
  const likedPhotosArray = new Array;
  console.log(likedPhotosArray)

  const [favouritePhoto, setFavouritePhoto] = useState(false);
  const handleClickFav = () => {
    setFavouritePhoto(prev => !prev);
  }

  return (
    <div className="App"> 
      <HomeRoute topics={topics} photos={photos} favPhoto={favPhoto} handleClickFav={handleClickFav} favouritePhoto={favouritePhoto}/>
    </div>
  );
};

export default App;
