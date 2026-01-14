import React from "react";
import "./assets/styles/App.css";
import HeaderWeb from "./components/HeaderWeb";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";
import TaskItem from "./components/TaskItem";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import { postsData, tasksData } from "./components/RoadMap";

function App() {
  const lessonsList = postsData.map((post) => (
    <Post key={post.id} title={post.title} content={post.content} />
  ));

  const tasksList = tasksData.map((task) => (
    <TaskItem key={task.id} title={task.title} isCompleted={task.isCompleted} />
  ));

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
            <SideMenu />
          </Card>
        </aside>

        <main className="content-section">
          <Card>
            <div className="lessons-container" style={{}}>
            <h3>The Knowledge Base</h3>
              {lessonsList}
            </div>
          </Card>
        </main>

        <section className="tracker-section">
          <Card>
            <h3>The Milestone Tracker</h3>
            {tasksList}
          </Card>
        </section>

      </div>
    </div>
  );
}

export default App;