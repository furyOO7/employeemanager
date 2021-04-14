import axios from 'axios';

export const roleTag = [];
export const getRoleData = async () => {
    const result = await axios.get('http://localhost:3000/roles');
        const data = result.data;
        getRoleTags(data);
        return roleTag
}


const getRoleTags =(data)=>{
    // const roleTag = [];
    data.map((val)=>{
        roleTag.push(val.roleName.toString());
    });
    return ;
}

// export default getRoleData;
