import axios from 'axios';

export const empData = [];
export const getEmployeList = async () => {
    const result = await axios.get('http://localhost:3000/employee');
        const data = result.data;
        // getRoleTags(data);
        return data
}


// const getRoleTags =(data)=>{
//     // const roleTag = [];
//     data.map((val)=>{
//         roleTag.push(val.roleName.toString());
//     });
//     return ;
// }

// export default getEmployeList;
