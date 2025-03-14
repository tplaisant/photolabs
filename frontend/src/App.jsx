import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import "./styles/PhotoList.scss";
import './App.scss';
import TopicList from './components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">    
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
