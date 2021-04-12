import React from 'react';
import '../App.css';

const MainButton = (props) => {
    return ( 
        <div className="btnmainclass">
             { props.mainbtnArry.map((elBtn,i) => <button key={i} className="btn" ><a target="_blank" href={`http://localhost:3000/${elBtn.link}`}>{elBtn.text}</a></button>)}
             </div>
     );
    
}
 
export default MainButton;