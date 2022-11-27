import React from 'react';
import 'C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\Completionbar.css'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
      
      const Childdiv = {
        height: '80%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
        <div classname="overview"> 
         
        <p style={{color: '#B3BDC7',fontSize: "25px", }}>Completion</p>
    <div style={Parentdiv}>
      <div style={Childdiv}>

      
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    </div>
    )
}
  
export default Progress_bar;