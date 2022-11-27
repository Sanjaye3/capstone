 
import './App.css';
import BarChart from "C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\BarChart.js";
import WebKata from "C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\WebKata.js"
import Task from "C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\Task.js";
import CompletionBar from "C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\Completionbar.js";
import Login from "C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\Login.js"
import { Routes, Route, Link } from "react-router-dom";
function Dashboard() {
  return(
    <div>
    <p style={{color: "black",fontSize: "50px",fontWeight: "bold",marginBottom:  "1px solid #4CAF50"}}>Dashboard</p>
    <div classname="rightend">
      <p>user</p>
    </div>
    </div>
  )
}
function App() {
  return (
    <div className="CodeKata">
       <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>
      
      <Dashboard />
      <hr size="3" width="100%" color= "#DEDEDE"/> 
      <p style={{color: "#33028A",fontSize: "35px",fontWeight: "bold" }}>Overview</p>
      <div className="overview">
      <CompletionBar bgcolor="#4B0DBA" progress='90'  height={30} />
      </div>
      <p style={{color: "#33028A",fontSize: "25px", }}>Activities</p>
      <BarChart />
      <WebKata />
      <Task />
     
    </div>
  );
}
// function Login(){
//   return(
//       <div className ="login">
//           <p>Login</p>
//           <label for="email">Email<br/></label>
// <input type="email" id="email" name="email"></input><br/>

// <label for="pwd">Password</label><br />
// <input type="password" id="pwd" name="pwd"></input>
//       </div>
//   )
// }


export default App;
