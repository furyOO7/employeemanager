import React from 'react';
const EmployeList = (props) => {
    console.log(props)
    return ( 
        <table className="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Status</th>
               
            </tr>
        </thead>
        <tbody>
            {
                props.empData.map((emp,i) => {
                    return(
                        <tr key={i}>
                    <td>{emp.name}</td>
                    <td>{
                   new Date() > new Date( emp.to) ? "Ex Employee" : "Employee"
                    }</td>
                    <div>Edit</div>
                    <div onClick={e => props.deleteHandler(e,emp)}>Delete</div>
                    </tr>
                    )
                })
            }
            </tbody>
            </table>
     );
}
 
export default EmployeList;