import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const MainButton = (props) => {
    return ( 
        <div className="btnmainclass">
             { props.mainbtnArry.map((elBtn,i) => <button key={i} className="btn" ><Link  to={`/${elBtn.link}`}>{elBtn.text}</Link></button>)}
             </div>
     );
    
}
 
export default MainButton;