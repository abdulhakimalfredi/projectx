export default function MilestoneTracker() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: "center" }}>The Milestone Tracker</h3>

        <div className="progress-section" style={{ textAlign: "center" }}>
          <h3>Your Progress</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "5px 0" }}>
            35%
          </p>
          <p style={{ color: "#666" }}>7/20 completed</p>
        </div>

        <div style={{ marginBottom: "10px" }}>Progress Bar</div>
        <div
          className="progress-container"
          style={{
            width: "100%",
            height: "20px",
            background: "#8f9090ff",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            className="progress-fill"
            style={{
              width: "35%",
              height: "100%",
              background: "#162432ff",
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
        
        {/* المهمة 1.3: قائمة المواضيع */}
      <div className="topics-list" style={{ marginTop: "25px", textAlign: "left", padding: "0 10px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          
          {/* موضوع مكتمل */}
          <li className="topic-item completed" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #eee" }}>
            ✅ Topic 1 (Completed)
          </li>

          {/* موضوع قيد التنفيذ */}
          <li className="topic-item in-progress" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #eee", color: "#0056b3" }}>
            🔄 Topic 2 (In Progress - 60%)
          </li>

          {/* موضوع لم يبدأ */}
          <li className="topic-item not-started" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #eee", color: "#888" }}>
            ⏳ Topic 3 (Not Started)
          </li>

          <li className="topic-item not-started" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #eee", color: "#888" }}>
            ⏳ Topic 4 (Not Started)
          </li>
          
        </ul>

      </div>
      </div>

      <div className="next-milestone" style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: "center" }}>🏆 Next Milestone</h3>
        <p>Complete React Basics to unlock React Hooks!</p>
      </div>
      
    </div>
  );
}
