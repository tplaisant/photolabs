import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { id, slug, title } = props.topicData
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