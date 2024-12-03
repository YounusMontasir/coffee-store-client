import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, chef,taste,supplier,category,details,photo}
        console.log(newCoffee);
        fetch("http://localhost:5000/coffee",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data=> console.log(data)
        )
        
    }
    return (
        <div className='w-8/12 mx-auto mt-20 bg-gray-300 p-20'>
            <form onSubmit={handleAddCoffee}>
                {/* 1st row */}
                <div className='flex gap-4'>
                <div className='form-control w-full'>
                    <label htmlFor="">Name</label>
                <input type="text" placeholder="Type here" name='name' class="input input-bordered w-full " />
                </div>
                <div className='form-control w-full'>
                    <label htmlFor="">Chef</label>
                <input type="text" placeholder="Type here" name='chef' class="input input-bordered w-full " />
                </div>
                </div>
                {/* 1st row */}
                <div className='flex gap-4'>
                <div className='form-control w-full'>
                    <label htmlFor="">Supplier</label>
                <input type="text" placeholder="Type here" name='supplier' class="input input-bordered w-full " />
                </div>
                <div className='form-control w-full'>
                    <label htmlFor="">Taste</label>
                <input type="text" placeholder="Type here" name='taste' class="input input-bordered w-full " />
                </div>
                </div>
                {/* 1st row */}
                <div className='flex gap-4'>
                <div className='form-control w-full'>
                    <label htmlFor="">Category</label>
                <input type="text" placeholder="Type here" name='category' class="input input-bordered w-full " />
                </div>
                <div className='form-control w-full'>
                    <label htmlFor="">Details</label>
                <input type="text" placeholder="Type here" name='details' class="input input-bordered w-full " />
                </div>
                </div>
                <div className='form-control w-full'>
                <label htmlFor="">PhotoURL</label>
                <input type="text" placeholder="Type here" name='photo' class="input input-bordered w-full " />
                </div>
                <input  type="submit" className='btn btn-accent mt-10 block w-full' />

            </form>
        </div>
    );
};

export default AddCoffee;