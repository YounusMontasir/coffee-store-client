import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, chef, supplier, category, taste, details, photo} = coffee;
    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name, chef,taste,supplier,category,details,photo}
        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data=> console.log(data)
        )
        
    }
    return (
        
        <div className='w-8/12 mx-auto mt-20 bg-gray-300 p-20'>
            <h1 className='text-5xl text-center mb-8'>Update coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* 1st row */}
                <div className='flex gap-4'>
                <div className='form-control w-full'>
                    <label htmlFor="">Name</label>
                <input type="text" placeholder="Type here" name='name' defaultValue={name} class="input input-bordered w-full " />
                </div>
                <div className='form-control w-full'>
                    <label htmlFor="">Chef</label>
                <input type="text" placeholder="Type here" name='chef' defaultValue={chef} class="input input-bordered w-full " />
                </div>
                </div>
                {/* 1st row */}
                <div className='flex gap-4'>
                <div className='form-control w-full'>
                    <label htmlFor="">Supplier</label>
                <input type="text" placeholder="Type here" name='supplier' defaultValue={supplier} class="input input-bordered w-full " />
                </div>
                <div className='form-control w-full'>
                    <label htmlFor="">Taste</label>
                <input type="text" placeholder="Type here" name='taste' defaultValue={taste} class="input input-bordered w-full " />
                </div>
                </div>
                {/* 1st row */}
                <div className='flex gap-4'>
                <div className='form-control w-full'>
                    <label htmlFor="">Category</label>
                <input type="text" placeholder="Type here" name='category' defaultValue={category} class="input input-bordered w-full " />
                </div>
                <div className='form-control w-full'>
                    <label htmlFor="">Details</label>
                <input type="text" placeholder="Type here" name='details' defaultValue={details} class="input input-bordered w-full " />
                </div>
                </div>
                <div className='form-control w-full'>
                <label htmlFor="">PhotoURL</label>
                <input type="text" placeholder="Type here" name='photo' defaultValue={photo} class="input input-bordered w-full " />
                </div>
                <button type='submit' className='btn btn-accent mt-10 block w-full'>Update</button>

            </form>
        </div>
    );
};

export default UpdateCoffee;