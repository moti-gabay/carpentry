import axios from "axios";
import { TOKEN_KEY } from "./url";


// get request to get users by admin or get category by user & admin
export const apiGet = async (url) => {
    try {
        const response = await axios.get(url, {
            headers:{
                'Content-Type': 'application/json',
                'x-api-key': localStorage[TOKEN_KEY]
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

  // ALL OTHER REQUESTS
  // generic request (POST, DELETE, PUT, PATCH)
  export const apiRequest = async (url, method, bodyData) => {
    try {
        const response = await axios({
            url,
            method:method,
            data: JSON.stringify(bodyData),
            headers: {
                'Content-Type': 'application/json',
                'x-api-key':localStorage[TOKEN_KEY]
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}


// // post request
// export const apiPost = async (url, bodyData) => {
//     try {
//         const response = await axios({
//             url,
//             data: JSON.stringify(bodyData),
//             method:'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//                 'x-api-key': localStorage[TOKEN_KEY]
//             }
//         });
//         return response;
//     } catch (error) {
//         throw error;
//     }
// }

// // put request to chanage wood category (by admin)


// // patch request to change inStock
// export const apiPatch = async(url, bodyData) => {
//     try {
//         const response = await axios({
//             url,
//             method:"PATCH",
//             headers:{
//                 'Content-Type': 'application/json',
//                 'x-api-key': localStorage[TOKEN_KEY]
//             }
//         });
//         return response;
//     } catch (error) { 
//     }
// }


// // delete request wood category or user (by admin)
// export const apiDelete = async(url) => {
//     try{
//       const response = await axios({
//         url,
//         method:"DELETE",  
//         headers:{
//             'Content-Type': 'application/json',
//             'x-api-key': localStorage[TOKEN_KEY]
//         }  
//       })
//       return response;
//     }
//     catch(err){
//       throw err;
//     }
//   }