import React, { useContext } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';

const Signup = () => {
    const {createUser, setUser} = useContext(AuthContext)
    const handleSignup = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUsers = {name, email}
        console.log(newUsers);
        
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
            fetch("http://localhost:5000/users",{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUsers)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
            
        })
        .catch(error => {
            console.log("errror", error);
            
        })
    }
    return (
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignup} class="card-body">
        <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name='name' class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' class="input input-bordered" required />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button type='submit' class="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
    );
};

export default Signup;