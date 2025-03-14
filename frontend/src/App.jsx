import "./styles/PhotoList.scss";
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
// import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App"> 
      <TopNavigationBar />   
      {/* <TopicList /> */}
      <PhotoList />
    </div>
  );
};

export default App;
