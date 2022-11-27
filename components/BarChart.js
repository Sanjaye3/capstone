import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\BarChart.css';
const data = [
  {
    name: 'MON',
    pv: 100,
     
  },
  {
    name: 'TUE',
    pv: 200,
    amt: 200,
  },
  {
    name: 'WED',
    pv: 300,
     
  },
  {
    name: 'THU',
    pv: 400,
    
  },
  {
    name: 'FRI',
    pv: 500
  },
  {
    name: 'SAT',
    pv: 600,
     
  },
  {
    name: 'SUN',
    pv: 700
  },
];

export default  function App() {
  

  
    return (
      <div className="codekata">
      <p style={{color: "#33028A",fontWeight: "bold",fontSize:20}}>Webkata</p>
      <p  style={{textAlign: "right"}}>Today:0</p>
      <p style={{textAlign: "right"}}>Total:0</p>
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" tick={{stroke:"#6C709E"}} />
          
        
          <Bar dataKey="pv" fill="#FFBEBE" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
