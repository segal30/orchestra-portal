// import React, {useState} from 'react';
// import './newUser.css';
// import userImg from '../../../assets/no-image-icon.jpeg';
// import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';



// export const NewUser = () => {
//   const [file, setFile] = useState('')
//   console.log(file)

   
//   return (
//     <div className='newUser'>
//         <h1 className="newUserTitle">Add new user</h1>
//         <div className="newUserImg">
//           <img 
//             src=
//             {file
//                ? URL.createObjectURL(file) : {userImg}} 
//             alt="" />
//             <label htmlFor='file' >
//             <DriveFolderUploadIcon className='uploadIcon'/>
//             </label>
//             <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
//           </div>
//         <form className='newUserForm'>
          
//             <div className="newUserItem">
//             <label >Username</label>
//             <input type="text" placeholder=''/>
//             </div>
//             <div className="newUserItem">
//             <label >Name</label>
//             <input type="text" placeholder=''/>
//             </div>
//             <div className="newUserItem">
//             <label >Email</label>
//             <input type="text" placeholder=''/>
//             </div>
//             <div className="newUserItem">
//             <label >phone</label>
//             <input type="text" placeholder=''/>
//             </div>
//             <div className="newUserItem">
//             <label >Address</label>
//             <input type="text" placeholder=''/>
//             </div>
//             <div className="newUserItem">
//             <label >Password</label>
//             <input type="text" placeholder=''/>
//             </div>
//             <div className="newUserItem">
//             <label >Gender</label>
//             <div className="newUserGender">
//             <input type="radio" name='gender' id="male" value="male"/>
//             <label for="male">Male</label>
//             <input type="radio" name='gender' id="female" value="female"/>
//             <label for="female">Female</label>
//             <input type="radio" name='gender' id="other" value="other"/>
//             <label for="other">Other</label>
//               </div>
//             </div>
//             <div className="newUserItem">
//             <label >Active</label>
//             <select name="active" id="active" className="newUserSelect">
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//             </select>
           
//             <button className="newUserButton">Create</button>

//             </div>
           
//         </form>
//         </div>
//   )
// }
