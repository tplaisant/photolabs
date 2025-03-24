import "./styles/PhotoList.scss";
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favPhoto, setFavPhoto] = useState(false)
  
  const [favouritePhoto, setFavouritePhoto] = useState(false);
  // const likedPhotosArray = new Array;
  const likedPhotosArray = [];
  const handleClickFav = (id) => {
    likedPhotosArray.push([id])    
    setFavouritePhoto(prev => !prev);
    // console.log(likedPhotosArray)
  }

  return (
    <div className="App"> 
      <HomeRoute 
      topics={topics} 
      photos={photos} 
      favPhoto={favPhoto} 
      handleClickFav={handleClickFav} 
      // favouritePhoto={favouritePhoto}
      likedPhotos={likedPhotosArray}
      />
    </div>
  );
};

export default App;