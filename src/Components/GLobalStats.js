import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#e1f5fe"
  },
  title:{
    color: '#3f51b5',
    fontSize: "28px"
  },
  string:{
    fontWeight:"bold",
    fontSize:"25px"
  }
}));

export default function GLobalStats() {
  const [globalData, setGlobalDData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covid19api.com/summary")
      let data = await response.json();

      //Deleting extra source
      setGlobalDData(data.Global)
      console.log(data.Global)
    }
    getData();
  }, [])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((key, ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper
                className={classes.paper}
                elevation={3}>
                <h3 className={classes.title}>
                  {key.replace(/_/g,' ')}
                </h3>
                <h3 className={classes.string}>{globalData[key].toLocaleString("en-IN")}</h3>
              </Paper>
            </Grid>

          )
        })}
      </Grid>
    </div>
  );
}
