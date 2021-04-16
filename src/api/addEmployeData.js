import axios from 'axios';
    
export  const addEmployeData = async (postObj) =>{
        const result = await axios.post('http://localhost:3000/employee', postObj, {
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

        
export  const deleteEmployeData = async (postObj) =>{
    console.log(postObj)
    const result = await axios.delete('http://localhost:3000/employee/'+ postObj.id, {
        headers: {
            'content-type': 'application/json'
        }
    });
    if(result.status === 201){
        console.log(result)
        return {
            status: result.status,
            msg:"Employee Deleted Successfully."
        }
    }
    return {
        status: result.data
    }
}


