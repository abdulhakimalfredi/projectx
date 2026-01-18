import Card from "./Card";


export default function MilestoneTracker() {
  return (
    <div className="milestone-tracker-container">
      <h3 className="milestone-tracker-title">The Milestone Tracker</h3>
      
      <div className="progress-section">
        <h3>Your Progress</h3>
        <p className="progress-percentage">35%</p>
        <p className="progress-completed-text">7/20 completed</p>
      </div>
      
      <div className="progress-bar-label">Progress Bar</div>
      
      <div className="progress-container">
        <div className="progress-fill" style={{width: "35%"}}></div>
      </div>
      
      <div className="topics-list">
        <ul>
          <li className="topic-item completed">
            ✅ Topic 1 (Completed)
          </li>
          
          <li className="topic-item in-progress">
            🔄 Topic 2 (In Progress - 60%)
          </li>
          
          <li className="topic-item not-started">
            ⏳ Topic 3 (Not Started)
          </li>
          
          <li className="topic-item not-started">
            ⏳ Topic 4 (Not Started)
          </li>
        </ul>
      </div>
      
      <Card>
        <div className="next-milestone">
          <h3 className="next-milestone-title">🏆 Next Milestone</h3>
          <p>Complete React Basics to unlock React Hooks!</p>
        </div>
      </Card>
    </div>
  );
}