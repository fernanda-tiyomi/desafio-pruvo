import { http } from './config'

export default {
   listar: async () =>{
    return await http.get('feed', {
        params:{
           api_key: 'Zodrf7cMXuuh1QLa5NPd78N9QWuIFut8tkItRhun'
        }
        
    })
   } 
}