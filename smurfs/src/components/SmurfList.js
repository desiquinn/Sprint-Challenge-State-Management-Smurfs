import React from 'react';



const SmurfList = props => {

    // console.log('ListProps:', props)
    return (
        <div>
            <h2>Name:{props.smurf.name}</h2>
            <p>Age:{props.smurf.age}</p>
            <p>Height:{props.smurf.height}</p>
        </div>
    )
}

export default SmurfList;