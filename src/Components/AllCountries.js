import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color: '#3f51b5',
    textTransform: "uppercase"
  }
}));

export default function AllCOuntries() {
  const [globalData, setGlobalDData] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      let data = await response.json();

      setGlobalDData(Object.values(Object.values(data.countryitems)[0]));
    }
    getData();
  }, [])
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <table>
            {globalData.map((key,ind)=>{
                return(
                    <tr>
                        <td>
                            {globalData[ind].title}
                        </td>
                        <td>
                            <h3>
                            {globalData[ind].total_cases}
                            </h3>
                        </td>
                        <td>
                            <h3>
                            {globalData[ind].total_active_cases}
                            </h3>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>
  );
}
