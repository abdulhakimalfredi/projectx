import React from "react";
import CategoryButton from "./CategoryButton.js";

export default function TheRoadMap({ setActivePath }) {
  return (
    <div
      style={{
        margin: "25px",
        flexDirection: "column",
        display: "flex",
        textAlign: "center",
      }}
    >
      <h2>The Roadmap</h2>
      <CategoryButton
        title="General"
        onClick={() => setActivePath({ id: "General", title: "General" })}
      />
      <CategoryButton
        title="FrontEnd"
        onClick={() =>
          setActivePath({ id: "FrontEnd", title: "Front-End Development" })
        }
      />
      <CategoryButton
        title="BackEnd"
        onClick={() =>
          setActivePath({ id: "BackEnd", title: "Back-End Development" })
        }
      />
    </div>
  );
}
