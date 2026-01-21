import React, { useState, useEffect } from "react";
import "./assets/styles/App.css";
import HeaderWeb from "./components/HeaderWeb";
import TheRoadMap from "./components/TheRoadMap";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import KnowledgeBase from "./components/KnowledgeBase";
import { topicsData } from "./components/topicsData";
import StudyDashboard from "./components/StudyDashboard";
export default function App() {

  const[tempInput, setTempInput] = useState("");
  const [userName, setUserName] = useState("");
  const [ActivePath, setActivePath] = useState({});

  const [completedTopics, setCompletedTopics] = useState(() => {
    // 1. ابحث عن البيانات في الذاكرة
    const savedProgress = localStorage.getItem("my_progress");

    // 2. إذا وجدت بيانات، حولها من نص إلى مصفوفة ورجعها
    // إذا لم تجد (أول مرة يفتح المستخدم الموقع)، ابدأ بمصفوفة فارغة
    return savedProgress ? JSON.parse(savedProgress) : [];
  });
  useEffect(() => {
    // حفظ المصفوفة في المتصفح تحت اسم "my_progress"
    // نستخدم JSON.stringify لأن المتصفح لا يحفظ مصفوفات، بل يحفظ نصوصاً فقط
    localStorage.setItem("my_progress", JSON.stringify(completedTopics));
  }, [completedTopics]); // هذا السطر يعني: "اشتغل فقط لما تتغير مصفوفة المكتمل"

  return (
    <div className="App">
      {userName === "" ? (
        <div className="FirstPage">
          <h1>Welcome To The Learning Path</h1>
          <input className="Input-Welcome" placeholder="Write Your Name" onChange={(e)=> setTempInput(e.target.value)}/>
          <button className="Welcome-BTN" onClick={()=> setUserName(tempInput)}>Go In</button>
        </div>
      ) : (
        <div>
          <HeaderWeb userName={userName}/>
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
                  {/* <LearnRoute setActivePath={setActivePath}/> */}
                </Card>{" "}
              </div>
              <div className="knowledge-base">
                {" "}
                <Card>
                  {" "}
                  <KnowledgeBase
                    ActivePath={ActivePath}
                    topicsData={topicsData}
                    completedTopics={completedTopics}
                    setCompletedTopics={setCompletedTopics}
                  />{" "}
                </Card>{" "}
              </div>
              <div className="tracker-section">
                {" "}
                <Card>
                  {" "}
                  <StudyDashboard
                    completedTopics={completedTopics}
                    topicsData={topicsData}
                  />
                </Card>{" "}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
