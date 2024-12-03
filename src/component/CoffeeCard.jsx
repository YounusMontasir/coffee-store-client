import React from 'react';
import { CiViewList } from 'react-icons/ci';
import { MdDelete, MdOutlineSecurityUpdate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffeeItem, setCoffeeItem}) => {
    const handleDelete = (_id) => {
        console.log(_id);
    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, { // Fix here
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
    
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            const remainingCoffee = coffeeItem.filter(remCoffee => remCoffee._id !== _id)
                            console.log(remainingCoffee);
                            
                            setCoffeeItem(remainingCoffee)
                        }
                    });
            }
        });
    };
    
    return (
        <div class="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={coffee.photo}
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{coffee.name}</h2>
          <p>{coffee.chef}</p>
          <p>{coffee.category}</p>
          <div class="card-actions justify-end">
            <button className='btn'>Details <CiViewList /></button>
            <button onClick={() => handleDelete(coffee._id)} className='btn '>Delete <MdDelete /></button>
            <Link to={`updatecoffee/${coffee._id}`} className='btn'>Update <MdOutlineSecurityUpdate /></Link>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;