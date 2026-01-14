import React from 'react';
import CategoryButton from './CategoryButton.js';


export default function SideMenu() {

  const generalList = generalData.map((item)=> 
    <CategoryButton 
      key={item.id} 
      title={item.title} />);  
  
  const frontendList = frontendData.map((item)=> 
    <CategoryButton 
      key={item.id} 
      title={item.title} />);  
  const backendList = backendData.map((item)=> 
    <CategoryButton 
      key={item.id} 
      title={item.title} />);  
  
  return (
    <div style={{margin: "25px", flexDirection:"column", display:"flex",textAlign:"center"}}>
      <h2>The Roadmap</h2>
      <h3>General</h3>
      {generalList}
      <h3>FrontEnd</h3>
      {frontendList}
      <h3>BackEnd</h3>
      {backendList}
    </div>
  );
}


const generalData = [
    { id: 1, title: "Instructions" },
    { id: 2, title: "Scrum" },
    { id: 3, title: "Git" }
  ];

  // 2. مصفوفة الفرونت إند
  const frontendData = [
    { id: 4, title: "JavaScript" },
    { id: 5, title: "React" }
  ];

  // 3. مصفوفة الباك إند
  const backendData = [
    { id: 6, title: "SQL" },
    { id: 7, title: "PHP" },
    { id: 8, title: "Laravel" }
  ];
