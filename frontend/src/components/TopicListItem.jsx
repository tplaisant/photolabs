import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const id = props.topicData.id
  const title = props.topicData.title
  const handleClickTopic = props.handleClickTopic

  const handleClick = () => {
    handleClickTopic(id)
  }

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {title}
    </div>
  );
};

export default TopicListItem;