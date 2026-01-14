import CategoryButton from "./CategoryButton";

export default function KnowledgeBase() {
  return (
    <div>
      <div
        className="resource-card"
        style={{
          border: "1px solid #ddd",
          padding: "0px",
          borderRadius: "10px",
        }}
      >
        <div className="General-Section">
          <div className="resource-card" style={{ cardStyle }}>
            <h3 style={textStyle}> Scrum </h3>
            <p style={textStyle}>Essential tools for workflow</p>

            <div style={ cardStyle }>
              <a href="https://www.youtube.com/watch?v=O5XukD0QleM&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=30" 
              style={linkButtonStyle}> View Resource </a>

              {/* استخدام المكون الجاهز الخاص بك هنا */}
              <CategoryButton title="Done ✓" onClick={() => console.log("Completed!")} />
            </div>
            <h3 style={textStyle}> Git</h3>
            <p style={textStyle}>Essential tools for workflow</p>
            <div style={ cardStyle }>
              <a href="https://www.youtube.com/watch?v=O5XukD0QleM&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=30" 
              style={linkButtonStyle}> View Resource </a>

              {/* استخدام المكون الجاهز الخاص بك هنا */}
              <CategoryButton title="Done ✓" onClick={() => console.log("Completed!")} />
            </div>

          </div>
        </div>
        <div className="FrontEnd-Section">
          <div className="resource-card" style={{ cardStyle }}>
            <h3 style={textStyle}> JavaScript </h3>
             <p style={textStyle}>Essential tools for workflow</p>

            <div style={ cardStyle }>
              <a href="https://www.youtube.com/watch?v=O5XukD0QleM&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=30" 
              style={linkButtonStyle}> View Resource </a>

              {/* استخدام المكون الجاهز الخاص بك هنا */}
              <CategoryButton title="Done ✓" onClick={() => console.log("Completed!")} />
            </div>

            <h3 style={textStyle}> React</h3>
            <p style={textStyle}>Essential tools for workflow</p>
            <div style={ cardStyle }>
              <a href="https://www.youtube.com/watch?v=O5XukD0QleM&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=30" 
              style={linkButtonStyle}> View Resource </a>

              {/* استخدام المكون الجاهز الخاص بك هنا */}
              <CategoryButton title="Done ✓" onClick={() => console.log("Completed!")} />
            </div>
          </div>
        </div>

        <div className="BackEnd-Section">
          <div className="resource-card" style={{ cardStyle }}>
            <h3 style={textStyle}> php  </h3>
             <p style={textStyle}>Essential tools for workflow</p>

            <div style={ cardStyle }>
              <a href="https://www.youtube.com/watch?v=O5XukD0QleM&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=30" 
              style={linkButtonStyle}> View Resource </a>

              {/* استخدام المكون الجاهز الخاص بك هنا */}
              <CategoryButton title="Done ✓" onClick={() => console.log("Completed!")} />
            </div>

            <h3 style={textStyle}> laravel </h3>
            <p style={textStyle}>Essential tools for workflow</p>
            <div style={ cardStyle }>
              <a href="https://www.youtube.com/watch?v=O5XukD0QleM&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=30" 
              style={linkButtonStyle}> View Resource </a>

              {/* استخدام المكون الجاهز الخاص بك هنا */}
              <CategoryButton title="Done ✓" onClick={() => console.log("Completed!")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const cardStyle = {
  borderRadius: "10px",
  padding: "15px",
  marginBottom: "15px", // تباعد بين البطاقات
  backgroundColor: "#fff",
};
const textStyle = { color: "#888", fontSize: "14px" }; // لون رمادي للوقت

const linkButtonStyle = {
  textDecoration: "none",
  color: "#007bff",
  fontSize: "14px",
  fontWeight: "bold",
  marginRight: "10px",
};
