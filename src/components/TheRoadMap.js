import React from "react";
import CategoryButton from "./CategoryButton.js";

export default function TheRoadMap() {
  // const generalList = generalData.map((item) => (
  //   <CategoryButton key={item.id} title={item.title} />
  // ));

  // const frontendList = frontendData.map((item) => (
  //   <CategoryButton key={item.id} title={item.title} />
  // ));
  // const backendList = backendData.map((item) => (
  //   <CategoryButton key={item.id} title={item.title} />
  // ));

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
      <CategoryButton title="General"/>
      <CategoryButton title="FrontEnd"/>
      <CategoryButton title="BackEnd"/>
    </div>
  );
}

// const generalData = [
//   { id: 1, title: "Scrum" },
//   { id: 2, title: "Git" },
// ];

// // 2. مصفوفة الفرونت إند
// const frontendData = [
//   { id: 3, title: "JavaScript" },
//   { id: 4, title: "React" },
// ];

// // 3. مصفوفة الباك إند
// const backendData = [
//   { id: 5, title: "SQL" },
//   { id: 6, title: "PHP" },
//   { id: 7, title: "Laravel" },
// ];
