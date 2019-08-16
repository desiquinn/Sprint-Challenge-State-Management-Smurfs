import React, { useState } from 'react';

const SmurfForm = props => {

    const [smurf, setSmurf] = useState({});

    console.log('FormProps:', props)

    const handleChange = (event) => {
        console.log("Whats the name:", event.target.name);
        console.log("Whats the value:", event.target.value);
        setSmurf({[event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addSmurfs(smurf);
        setSmurf("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add A Smurf: </label>
            <input 
                type='text'
                name='name'
                placeholder="Smurf Name"
                value={props.name}
                onChange={handleChange}
            />
            <input 
                type='text'
                name='age'
                placeholder="Age"
                value={props.age}
                onChange={handleChange}
            />
            <input 
                type='text'
                name='height'
                placeholder="Height"
                value={props.height}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SmurfForm;