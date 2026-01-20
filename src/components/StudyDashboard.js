import { topicsData } from "./topicsData";

export default function StudyDashboard({ completedTopics, topicsData }) {
  const totalTopics = topicsData.length;
  const completedCount = completedTopics.length;
  const percentage = totalTopics > 0 
    ? Math.round((completedCount / totalTopics) * 100) 
    : 0;
  return (
    <div className="dashboard-card">
      <h3>Your Stats</h3>
      <p>Total: {totalTopics}</p>
      <p>Completed: {completedCount}</p>
      <p>{percentage}%</p>
      <progress value={percentage} max="100"></progress>
    </div>
  );
}
