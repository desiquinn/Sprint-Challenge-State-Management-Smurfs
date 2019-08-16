import React from "react";
import { connect } from 'react-redux';
import SmurfList from './SmurfList.js';
import { getSmurfs } from '../actions/action.js';


import "./App.css";



function App (props) {

  console.log(props)
  
    return (
      <div className="App">
        <h1>Desiree's Smurf Village!</h1>
        <button onClick={props.getSmurfs}>Meet Smurfs</button>
        {props.smurfs && (
          <div>
            {props.smurfs.map(smurf => <SmurfList smurf={smurf}/>)}
          </div>
        )} 
      </div>
    );
  
};

const mapStateToProps = (state) => {
  return{
    smurfs: state.smurfs, 
    error: state.error, 
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getSmurfs }) (App);
