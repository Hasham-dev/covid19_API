import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common,
    color: theme.palette.common,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  head:{
    background: "white !important",
    color: "black",
    fontWeight:'bold',
    textDecoration: 'underline'
  }
});

export default function AllCountries1() {
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.head}>
            <StyledTableCell>Sr. No</StyledTableCell>
            <StyledTableCell align="left">Country Name</StyledTableCell>
            <StyledTableCell align="left">Total Cases</StyledTableCell>
            <StyledTableCell align="left">Total Recovered</StyledTableCell>
            <StyledTableCell align="left">Total Deadth</StyledTableCell>
            <StyledTableCell align="left">Total Active Cases</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {globalData.map((key,ind)=> (
            <StyledTableRow key={globalData[ind].title}>
              <StyledTableCell align="left">{globalData[ind].ourid}</StyledTableCell>
              <StyledTableCell component="th" align="left" scope="row">
              {globalData[ind].title}
              </StyledTableCell>
              <StyledTableCell align="left">{globalData[ind].total_cases}</StyledTableCell>
              <StyledTableCell align="left">{globalData[ind].total_recovered}</StyledTableCell>
              <StyledTableCell align="left">{globalData[ind].total_deaths}</StyledTableCell>
              <StyledTableCell align="left">{globalData[ind].total_active_cases}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
