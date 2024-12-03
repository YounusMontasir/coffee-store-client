import React from 'react';
import { MdDelete, MdOutlineSecurityUpdate } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Users = () => {
    const users = useLoaderData()
    const handleDeleteUser = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/users/${id}`,{
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(data =>{
               if(data.deletedCount>0){
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
               }
               
            })
            }
          });
    }
    
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-5xl text-center mt-10 mb-10'>{users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>  
      {
        users.map(user => <tr key={user._id}>
            <th>3</th>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <button onClick={() => handleDeleteUser(user._id)} className='btn '>Delete <MdDelete /></button>
            <Link  className='btn'>Update <MdOutlineSecurityUpdate /></Link>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;