import React, { useState } from 'react';
import '../App.css';
import image from '../images/nodata.png'

const Dashboard = (props) => {
    let style ={backgroundImage: `url(${image})`,  height:"500px", backgroundPosition:"center", backgroundRepeat: 'no-repeat'}
    let [empData, setEmpdata]= useState([])
    return (
        <div className="dashboard">
        {empData.length ? 'SomeKaam' : <div style={style}></div>}
        </div>
      );
}
 
export default Dashboard;