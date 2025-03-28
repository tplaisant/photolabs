import "../styles/TopicList.scss";
import TopicListItem from '../components/TopicListItem';

const TopicList = ({
  topics,
  handleClickTopic,
}) => {

  return (
    <div className="top-nav-bar__topic-list">
      { topics.map((topicData, index) => 
      <TopicListItem 
      key={topicData.id} 
      topicData={topicData}
      handleClickTopic={handleClickTopic}
       /> )}
    </div>
  );
};

export default TopicList;
