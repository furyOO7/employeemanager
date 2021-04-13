import axios from 'axios';
    
const addRolesData = async (postObj) =>{
        const result = await axios.post('http://localhost:3000/roles', postObj, {
            headers: {
                'content-type': 'application/json'
            }
        });
        if(result.status === 201){
            return {
                status: result.status,
                msg:"Role Added Successfully."
            }
        }
        return {
            status: result.status
        }
    }


export default addRolesData;
