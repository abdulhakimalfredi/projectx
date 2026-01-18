import CategoryButton from "./CategoryButton";

export default function KnowledgeBase({ActivePath}) {
  return (
    <div className="knowledge-base-container">
      
      {/* ✅ عرض العنوان دائماً */}
      <h2 className="section-title" style={{textAlign: "center"}}>
        {ActivePath.title || "Choose Your Path"}
      </h2>
      
      {/* القسم العام - General */}
      {ActivePath.id === "General" && (
        <div className="General-Section">
          <div className="topic-group">
            <h3>Scrum</h3>
            <div className="links-list">
              <div className="resource-row">
                <a href="https://www.youtube.com/watch?v=cJH0xlFR3Qs" className="resource-link">
                  Scrum in 10 minutes
                </a>
                <input type="checkbox"/>
              </div>
              <div className="resource-row">
                <a href="https://www.youtube.com/watch?v=xoNlhLAKly4" className="resource-link">
                  Introduction to Scrum [Arabic]
                </a>
                <input type="checkbox"/>
              </div>
              <div className="resource-row">
                <a href="https://www.scrum.org/resources/scrum-guide" className="resource-link">
                  The Scrum Guide
                </a>
                <input type="checkbox"/>
              </div>
              <div className="resource-row">
                <a href="https://www.scrum.org/open-assessments/scrum-open" className="resource-link">
                  Scrum Open assessment
                </a>
                <input type="checkbox"/>
              </div>
            </div>
          </div>

          <div className="topic-group">
            <h3>Git</h3>
            <div className="links-list">
              <div className="resource-row">
                <a href="https://www.youtube.com/watch?v=Z6C35WqawGs" className="resource-link">
                  GitHub Playlist
                </a>
                <input type="checkbox"/>
              </div>
              <div className="resource-row">
                <a href="https://chris.beams.io/git-commit" className="resource-link">
                  How to Write a Git Commit Message
                </a>
                <input type="checkbox"/>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* قسم الفرونت إند - Front-End */}
      {ActivePath.id === "FrontEnd" && (
        <div className="FrontEnd-Section">
          <div className="topic-group">
            <h3>JavaScript & React</h3>
            <div className="resource-row">
              <a href="https://www.youtube.com/watch?v=2EAV2cB3FWY" className="resource-link">
                JavaScript Course
              </a>
              <input type="checkbox"/>
            </div>
            <div className="resource-row">
              <a href="https://www.youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS" className="resource-link">
                React Course
              </a>
              <input type="checkbox"/>
            </div>
          </div>
        </div>
      )}

      {/* قسم الباك إند - Back-End */}
      {ActivePath.id === "BackEnd" && (
        <div className="BackEnd-Section">
          <div className="topic-group">
            <h3>SQL Database</h3>
            <div className="resource-row">
              <a href="https://satr.tuwaiq.edu.sa/course/FtkmhtJpQW/view" className="resource-link">
                SQL 101
              </a>
              <input type="checkbox"/>
            </div>
            <div className="resource-row">
              <a href="https://satr.tuwaiq.edu.sa/course/APjgdQqVWR/view" className="resource-link">
                SQL 102
              </a>
              <input type="checkbox"/>
            </div>
            <div className="resource-row">
              <a href="https://satr.tuwaiq.edu.sa/course/bOXiOFzkMv/view" className="resource-link">
                SQL 103
              </a>
              <input type="checkbox"/>
            </div>
            <div className="resource-row">
              <a href="https://www.datacamp.com/tutorial/normalization-in-dbms" className="resource-link">
                Normalization in DBMS (article)
              </a>
              <input type="checkbox"/>
            </div>
          </div>

          <div className="topic-group">
            <h3>PHP & Laravel</h3>
            <div className="resource-row">
              <a href="#" className="resource-link">PHP for Beginners</a>
              <input type="checkbox"/>
            </div>
            <div className="resource-row">
              <a href="#" className="resource-link">Laravel Framework</a>
              <input type="checkbox"/>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
