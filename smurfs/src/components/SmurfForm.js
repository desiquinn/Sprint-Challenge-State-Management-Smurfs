import React from 'react';

const SmurfForm = props => {

    console.log('FormProps:', props)
    return (
        <form>
            <label>Add A Smurf to the Village!</label>
            <input 
                type='text'
                name='name'
                placeholder="Smurf's Name"
                value={name}
                onChange={handleChange}
            />
            <input 
                type='text'
                name='age'
                placeholder="Age"
                value={age}
                onChange={handleChange}
            />
            <input 
                type='text'
                name='height'
                value={height}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SmurfForm;