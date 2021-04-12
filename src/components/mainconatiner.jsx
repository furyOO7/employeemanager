import React from 'react';
import MainButton from './mainbutton';
import Dashboard from './Dashboard';

const MainContainer = (props) => {
    let mainbtnArry = [{link:'page-2',text:'Add Role'}, {link: 'page-3', text: 'Add Employee'}]
    return ( 
        <React.Fragment>
            <MainButton key="1" mainbtnArry={mainbtnArry} />
            <Dashboard />
        </React.Fragment>
     );
}
 
export default MainContainer;