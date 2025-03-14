import "../styles/TopicList.scss";
import TopicListItem from '../components/TopicListItem';

const TopicList = (props) => {

  const topics = props.topics;

  return (
    <div className="top-nav-bar__topic-list">
      { topics.map((topicData, index) => 
      <TopicListItem key={topicData.id} topicData={topicData} /> )}
    </div>
  );
};

export default TopicList;
