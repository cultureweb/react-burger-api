import React from 'react';
import classes from './BuildControl.css';

const BuildControl = props => (
    <div className={classes.BuildControl}>
      <div className={classes.Label} >{props.label}</div>
      <button lassName={classes.Less} >Less</button> 
      <button lassName={classes.More} >More</button> 
    </div>
  );




export default BuildControl;
