import React from 'react';

import SmurfForm from './SmurfForm.js'

const SmurfList = props => {

    console.log('ListProps:', props)
    return (
        <div>
            <h2>smurf name here</h2>
            <p>Age: smurf age here</p>
            <p>Height: smurf height here</p>
            <SmurfForm />
        </div>
    )
}

export default SmurfList;