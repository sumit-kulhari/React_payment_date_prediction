import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '4vh',
    width: "95vw",
       
  },
 
}));


export default function DenseAppBar() {
  const classes = useStyles();

  return (
    
      <header style={{ background: '#324752' ,}}>
        <div className={classes.root} >
          
          <div style={{gap:"19vw",display:"flex",flexDirection:"row"}}>
            <img  src="/images/Group 20399.svg" alt="logo 1" ></img>
            <img  src="/images/logo.svg" alt="logo 2"  ></img>
           
        </div>
        </div>
      </header>
    
  );
}
