import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\Task.css";

const data = [
  {
    name: 0,
    uv: 4000,
    pv: 2400,
    amt: 7.0,
  },
  {
    name: 2,
    uv: 3000,
    pv: 8.0,
    amt: 8.0,
  },
  {
    name: 4,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 6,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 8,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name:  10,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name:  12,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  14,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  16,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  18,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  20,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  22,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  24,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  26,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  28,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:  3,
    uv: 3490,
    pv: 4300,
    amt: 21000,
  },
];

export default function App() { 

 
    return (
        <div className="task">
            <p style={{color: "#33028A",fontWeight: "bold",fontSize:20}}>Task</p>
            <p  style={{textAlign: "right"}}>Submitted Tasks:0</p>
      <p style={{textAlign: "right"}}>Pending Tasks:0</p>
      <ResponsiveContainer width="50%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis dataKey="amt"/>
           
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }

