import React from 'react';

const MainButton = (props) => {
    return ( 
    props.mainbtnArry.map(elBtn => <button>{elBtn}</button>)
     );
}
 
export default MainButton;