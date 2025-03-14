import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  const { id, slug, title } = props.topicData

  return (
    <div className="topic-list__item">
      {title}
    </div>
  );
};

export default TopicListItem;