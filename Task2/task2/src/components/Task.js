import {React,useState} from 'react';
import Axios from 'axios';

const Task=()=>{

    const [state,setState]=useState([]);


    const apiCall= ()=>{


        Axios.get(" https://reqres.in/api/users?page=1 ").then( (data)=>{ console.log(data);
        
        const newData=data.data.data;
        
        console.log(newData)
        
        setState(newData);
        
       
          
    } )
        
        
        
}



state.map( (e)=>{

    return(
        <div>


<div>
                                                                             
                                                                             <div className="col-10 col-md-6 mt-5 text-center" >
                                                                               
                                                                               <div className="card text-center border-5 border-danger mx-5" >
                                                                                   
                                                                                <figure  className="figure-img img-fluid rounded "  >
                                                                                 <img src={e.avatar} className="figure-img img-fluid rounded" alt="..." height="350px" width="600px"  ></img>
                                                                                </figure>
                                            
                                                                               
                                                                               <h6 > ID:{e.id} </h6>
                                                                               <h6 >Name: {e.first_name +" "+ {e.last_name}</h6>
                                                                               <h6 >Email: {e.email} </h6>
                                            
                                                                               </div>
                                                                                
                                                                             </div>
                                            
                                            
                                                                        </div>

        </div>
    )

} );





}
export default Task;