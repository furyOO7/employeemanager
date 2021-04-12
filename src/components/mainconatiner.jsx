import React from 'react';
import MainButton from './mainbutton';

const MainContainer = (props) => {
    let mainbtnArry = ['Add Role', 'Add Employee']
    return ( 
        <React.Fragment>
            <MainButton mainbtnArry={mainbtnArry} />
        </React.Fragment>
     );
}
 
export default MainContainer;