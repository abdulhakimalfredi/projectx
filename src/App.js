import React from "react";
import "./assets/styles/App.css";
import HeaderWeb from "./components/HeaderWeb";
import Post from "./components/Post";
import TheRoadMap from "./components/TheRoadMap";
import TaskItem from "./components/TaskItem";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import MilestoneTracker from "./components/MilestoneTracker";
import KnowledgeBase from "./components/KnowledgeBase";
function App() {
  // const tasksList = tasksData.map((task) => (
  //   <TaskItem key={task.id} title={task.title} isCompleted={task.isCompleted} />
  // ));

  return (
    <div className="App">
      <HeaderWeb />

      {/* قسم التعليمات */}
      <div className="instructions-container">
        <Instructions />
        <hr />
      </div>
      <Card>
        <div className="main-container" style={{ textAlign: "center" }}>
          {" "}
          {/* الحاوية الكبرى */}
          <div className="roadmap-section">
            {" "}
            <Card>
              {" "}
              <TheRoadMap />{" "}
            </Card>{" "}
          </div>
          <div className="knowledge-base">
            {" "}
            <Card>
              {" "}
              <KnowledgeBase />{" "}
            </Card>{" "}
          </div>
          <div className="tracker-section">
            {" "}
            <Card>
              {" "}
              <MilestoneTracker />{" "}
            </Card>{" "}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
