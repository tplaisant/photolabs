import PhotoListItem from './components/PhotoListItem';
import "./styles/PhotoList.scss";
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg", 
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const photos = new Array()
photos.push(sampleDataForPhotoListItem)
photos.push(sampleDataForPhotoListItem)
photos.push(sampleDataForPhotoListItem)

const listItems = photos.map((photo) => 
  <div className='photo-list'>
    <PhotoListItem key={photo.id} photoData={photo}/>
  </div>
)

// Note: Rendering a single component to build components in isolation
const App = () => {


  console.log(photos)

  return (
    <div className="App">    
      {listItems}
    </div>
  );
};

export default App;
