import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../component/CoffeeCard';
import Navbar from '../component/Navbar';

const MainLayout = () => {
    const coffees = useLoaderData() 
    const [coffeeItem, setCoffeeItem] = useState(coffees)
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
            <h1 className='text-center mt-20 mb-20 text-5xl'>Espresso Emporium {coffees.length}</h1>
            <div className='grid grid-cols-3'>
                {
                    coffeeItem.map(coffee => <CoffeeCard coffee={coffee} key={coffee._id} coffeeItem={coffeeItem} setCoffeeItem={setCoffeeItem} ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default MainLayout;