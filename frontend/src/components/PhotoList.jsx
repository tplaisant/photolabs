import "../styles/PhotoList.scss";
import PhotoListItem from '../components/PhotoListItem';

const sampleDataForPhotoList = [
  {
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
  },
  {
    id: 2,
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: "/Image-2-Full.jpeg",
      regular: "/Image-2-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 3,
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: "/Image-3-Full.jpeg",
      regular: "/Image-3-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
];

const listItems = sampleDataForPhotoList.map((user, index) => 
      <PhotoListItem key={index} userData={user}/>
  )

  // {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {listItems}
    </ul>
  );
};

export default PhotoList;

// .photo-list {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
// }

// .photo-list:after {
//   content: "";
//   flex: 0 1 30%;
//   margin: 5px;
// }