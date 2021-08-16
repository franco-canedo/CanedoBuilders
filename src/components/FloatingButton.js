
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons({closeButton, toCurrent}) {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <Fab onClick={() => closeButton()}
      variant="extended" color="black">
        
         Close
      </Fab>
      <Fab onClick={() => toCurrent("current projects")}
      variant="extended" color="primary">
        
         GO ->
      </Fab>
      
    </div>
  );
}