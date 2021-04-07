import React from 'react';
import { makeStyles } from '@material-ui/core' ;
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    loader: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh'
    }
}))

const Loader = ()=>{

    const classes = useStyles();

    return(<>
    <div className={classes.loader}>
    <CircularProgress color="primary" />
    </div>
    </>
    );
}

export default Loader;