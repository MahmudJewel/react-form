import React from 'react'

function UserInfo(){
    return(
       <div className='container'>
           <div className='row' >
               <div className='col-md-6' >
                   <label className="text-start mb-1">First Name : </label>
                   <input type='text' className='form-control mb-3'></input>
               </div>
               
               <div className='col-md-6' >
                   <label className="text-start mb-1">Last Name : </label>
                   <input type='text' className='form-control mb-3'></input>
               </div>

               <div className='col-md-6' >
                   <label className="text-start mb-1">Email : </label>
                   <input type='email' className='form-control mb-3'></input>
               </div>

               <div className='col-md-6' >
                   <label className="text-start mb-1">University : </label>
                   <input type='text' className='form-control mb-3'></input>
               </div>

               <div className='col-md-6' >
                   <label className="text-start mb-1">Address : </label>
                   <textarea className='form-control mb-3' rows='5'></textarea>
               </div>

           </div>
       </div>
    );
}

export default UserInfo;