import React from 'react';
import './assets/styles/App.css';
// ملاحظة: تأكد أن أسماء المجلدات تطابق ما لديك (مثلاً Header و Post)
import HeaderWeb from "./components/HeaderWeb"; 
import Post from "./components/Post";             
import SideMenu from "./components/SideMenu"; // تأكد من تصحيح اسم الملف إلى SideMenu.js

function App() {
  return (
   <div className='App'> 
   <HeaderWeb/>
    <div 

    style={{ display: "flex",   }}> 
      <div style={{ width: "60%" }}> <Post/> <Post/> <Post/> </div>
      <div> <SideMenu/> </div>

    </div>
   </div>
  );
}

export default App;