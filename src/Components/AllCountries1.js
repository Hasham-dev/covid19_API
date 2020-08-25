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
    background: "#e1f5fe !important",
    position: "sticky",
    color: "black",
    fontWeight:'bolder',
    textDecoration: 'underline',
    fontSize: '25px !important' 
  },
  td1:{
    fontWeight:"bold",
    fontSize:"20px"
  },
  text_one:{
    fontSize:'12px'
  },
  Table_Data:{
    fontSize:"15px",
    fontWeight: "bold"

  },
  Table_Data_Red:{
    fontSize:"15px",
    color: "red",
    fontWeight: "bold"

  },
  Table_Data_Green:{
    fontSize:"15px",
    color: "#00c853",
    fontWeight: "bold"

  },
  Headed:{
    fontWeight:"bolder",
    fontSize:"15px"
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
        <TableHead >
          <TableRow className={classes.head}>
            <StyledTableCell className={classes.Headed}>Sr. No</StyledTableCell>
            <StyledTableCell align="left" className={classes.Headed}>Country Name</StyledTableCell>
            <StyledTableCell align="left" className={classes.Headed}>Total Cases</StyledTableCell>
            <StyledTableCell align="left" className={classes.Headed}>Total Recovered</StyledTableCell>
            <StyledTableCell align="left" className={classes.Headed}>Total Deadths</StyledTableCell>
            <StyledTableCell align="left" className={classes.Headed}>Total Active Cases</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {globalData.map((key,ind)=> (
            <StyledTableRow key={globalData[ind].title} className={classes.text_one}>
              <StyledTableCell align="left">{globalData[ind].ourid}</StyledTableCell>
              <StyledTableCell component="th" align="left" scope="row" className={classes.td1}>
              {globalData[ind].title}
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.Table_Data}>{globalData[ind].total_cases}</StyledTableCell>
              <StyledTableCell align="left" className={classes.Table_Data_Green}>{globalData[ind].total_recovered}</StyledTableCell>
              <StyledTableCell align="left" className={classes.Table_Data_Red}>{globalData[ind].total_deaths}</StyledTableCell>
              <StyledTableCell align="left" className={classes.Table_Data_Red}>{globalData[ind].total_active_cases}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
