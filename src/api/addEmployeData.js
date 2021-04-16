import axios from 'axios';
    
const addEmployeData = async (postObj) =>{
        const result = await axios.post('http://localhost:3000/addemp', postObj, {
            headers: {
                'content-type': 'application/json'
            }
        });
        if(result.status === 201){
            return {
                status: result.status,
                msg:"Employee Added Successfully."
            }
        }
        return {
            status: result.status
        }
    }


export default addEmployeData;
