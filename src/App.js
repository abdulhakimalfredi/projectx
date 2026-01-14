import React from "react";
import "./assets/styles/App.css";
import HeaderWeb from "./components/HeaderWeb";
import Post from "./components/Post";
import TheRoadMap from "./components/TheRoadMap";
import TaskItem from "./components/TaskItem";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import MilestoneTracker from "./components/MilestoneTracker"
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

      {/* الحاوية الرئيسية للأقسام الثلاثة */}
      <div className="main-layout">
        
        <aside className="sidebar-section">
          <Card>
            <TheRoadMap />
          </Card>
        </aside>

        <main className="content-section">
          <Card>
            <div className="lessons-container" style={{}}>
            <h3>The Knowledge Base</h3>
              <KnowledgeBase/>
            </div>
          </Card>
        </main>

        <section className="tracker-section">
          <Card>
            <MilestoneTracker/>
          </Card>
        </section>

      </div>
    </div>
  );
}

export default App;