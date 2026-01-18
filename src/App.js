import React, { useState } from "react";
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

const [ActivePath, setActivePath] = useState({});

  return (
    <div className="App">
      <HeaderWeb />

      {/* قسم التعليمات */}
      <div className="instructions-container">
        <Instructions ActivePath={ActivePath} />
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
              <TheRoadMap setActivePath={setActivePath} />{" "}
            </Card>{" "}
          </div>
          <div className="knowledge-base">
            {" "}
            <Card>
              {" "}
              <KnowledgeBase ActivePath={ActivePath} />{" "}
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
