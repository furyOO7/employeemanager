import React, { useState, useEffect } from 'react';
import '../App.css';
import image from '../images/nodata.png'
import {getEmployeList} from '../api/getEmployeList'
import {deleteEmployeData} from '../api/addEmployeData'
import EmployeList from '../components/displayEmplyoee/employelist'

const Dashboard = (props) => {
    let style ={backgroundImage: `url(${image})`,  height:"500px", backgroundPosition:"center", backgroundRepeat: 'no-repeat'}
    let [empData, setEmpdata]= useState([])
    useEffect(() => {
      const fetchEmpData = async () => {
          const data = await getEmployeList();
          // console.log(tags);
          setEmpdata(data);
      }
      fetchEmpData();
  }, [])
const deleteHandler = async(e, data) => {
  e.persist()
  const data1 = await deleteEmployeData(data);
  console.log(data1);
  const data2 = await getEmployeList();
          // console.log(tags);
          setEmpdata(data2);

}
    return (
        <div className="dashboard">
        {empData.length ? <EmployeList empData={empData} deleteHandler={(e,emp) =>deleteHandler(e,emp)}/> : <div style={style}></div>}
        </div>
      );
}
 
export default Dashboard;