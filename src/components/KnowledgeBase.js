
export default function KnowledgeBase({
  ActivePath,
  setCompletedTopics,
  completedTopics,
  topicsData,
}) {
  const currentTopics = topicsData.filter(
    (topic) => topic.path === ActivePath.id,
  );

  function handleToggle(topicId) {
    if (completedTopics.includes(topicId)) {
      // 1. حالة الحذف: أنشئ مصفوفة جديدة بدون هذا الـ ID
      const newItems = completedTopics.filter((id) => id !== topicId);
      setCompletedTopics(newItems);
    } else {
      // 2. حالة الإضافة: أضف الـ ID للمصفوفة الحالية
      setCompletedTopics([...completedTopics, topicId]);
    }
  }
  return (
    <div className="knowledge-base-container">
      {/* عنوان المسار الحالي */}
      <h2 className="section-title">
        {ActivePath.title || "Choose Your Path"}
      </h2>

      <div className="knowledge-base-list">
        {currentTopics.length > 0 ? (
          currentTopics.map((topic) => (
            <div
              key={topic.id}
              className={`topic-row ${completedTopics.includes(topic.id) ? "completed-item" : ""}`}
            >
              <input
                type="checkbox"
                checked={completedTopics.includes(topic.id)}
                onChange={() => handleToggle(topic.id)}
              />

              <a
                className="topic-link"
                href={topic.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {topic.title}
              </a>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>
            Select a path from the roadmap to see the resources.
          </p>
        )}
      </div>
    </div>
  );
}
