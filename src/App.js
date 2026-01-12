import React from 'react';
import './assets/styles/App.css';
import HeaderWeb from "./components/HeaderWeb"; 
import Post from "./components/Post";             
import SideMenu from "./components/SideMenu";
import TaskItem from './components/TaskItem';
//import Alert from './components/Alert';
import Card from './components/Card';
import Instructions from './components/Instructions';



const postsData = [
  
  // قسم الفرونت إند - من الصورة الأولى
    { 
      id: 1, 
      title: "Git Version Control", 
      content: "Master commits, branching and merging. Resources: Chris Beams, Medium.", 
      category: "Frontend" },
    { 
      id: 2, 
      title: "JavaScript Essentials", 
      content: "Complete the playlist for DOM manipulation and ES6+.", 
      category: "Frontend" },
  
    { 
      id: 3, 
      title: "Database (MySQL)", 
      content: "SQL 101 to 103 on Satr Platform. Learn Normalization.", 
      category: "Backend" },
    { 
      id: 4, 
      title: "PHP & Laravel", 
      content: "Start with Laracasts for beginners then move to Laravel 11.", 
      category: "Backend" },

];
const tasksData = [
  { id: 1, title: "Content will be here...", isCompleted: true },
  { id: 2, title: "Content will be here...", isCompleted: false },
  { id: 3, title: "Content will be here...", isCompleted: false },
];

      function App(){

        const lessonsList = postsData.map((post) => (<Post
          key={post.id}
          title={post.title}
          content={post.content}
       /> ))

       const tasksList = tasksData.map((task) => (<TaskItem
             key={task.id}
             title={task.title} 
             isCompleted={task.isCompleted}  />))

        return (
          <div className='App'>
            <HeaderWeb/>
            <div style={{
              backgroundColor:"whitesmoke",
              borderRadius: "5px", 
              padding: "20px",
              margin: "20px 0",
              borderLeft: "10px solid #2c3e50",
              borderRight: "10px solid #2c3e50",
              }}> 
              <h4>Instructions You Need To Consider</h4>
            <Instructions/>
            <hr/>
            </div>
            <div style={{display:"flex",justifyContent:"center",gap:"30px",alignItems:"flex-start",marginTop:"30px"}}>

              <div style={{width:"20%"}}>
                <Card> <SideMenu/> </Card>
                </div>

              <div style={{width:"50%"}}>
                <Card> 
                <h3> The Knowledge base </h3>
                {lessonsList}  </Card>
                </div>

              <div style={{width:"30%"}}>
                <Card> 
                <h3>The Milestone Tracker</h3>
                {tasksList}
                </Card>
                </div>


            </div>
          </div>
        );
      }





export default App;