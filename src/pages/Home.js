import React,{useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'

import countryData from './countryData';
import covidDetails from '../covidDetails';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {

  const[covidData, setCovidData] = useState([]);
  const[clickData, setClickData] = useState("");
  const[keyword,setKeyword] = useState("")
  const[filter,setFilter] = useState([])

  const options = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${clickData}`,
    headers: {
      'X-RapidAPI-Key': '193054a8e1msh54b91652feb3e3ap1e1bf8jsnad84dc5f1426',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setCovidData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[clickData]);

  const TolowerPascal = (word) =>{
    if(word!=='World' && word!=='Oceania'){
      return (word.toLocaleLowerCase().split(" ").join(""));
    }
    else if(word==='Oceania'){
      return 'australia';
    }
    else{
      return("")
    }
  }

  useEffect(() => {
    const filterList = covidData.filter((elem) =>{
      if(elem.Country.startsWith(keyword)){
        return true;
      }
      return false
    })
    setFilter(filterList);

  },[keyword])

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const capitalize = (word) => {
    const nword = word.toLowerCase().split(" ");
    let result="";
    if(nword.length>1){
      const fword = nword[0]?.charAt(0).toUpperCase() + nword[0]?.slice(1);
      const sword = nword[1]?.charAt(0).toUpperCase() + nword[1]?.slice(1);
      result = fword+sword;
    }
    else{
      result= 'Serious_Critical';
    }
    return result;
  }

  const snakeCase = (word) => {
    const nword = word?.split(" ");
    let result="";
    if(nword?.length===2){
      const fword = nword[0].toLowerCase()?.charAt(0).toUpperCase() +nword[0]?.slice(1);
      const sword = nword[1].toLowerCase()?.charAt(0).toUpperCase() + nword[1]?.slice(1);
      result = fword+'_'+sword;
    }
    else if(nword?.length===3){
      const fword = nword[0].toLowerCase()?.charAt(0).toUpperCase() +nword[0]?.slice(1);
      const sword = nword[1].toLowerCase()?.charAt(0).toUpperCase() + nword[1]?.slice(1);
      const tword = nword[2].toLowerCase()?.charAt(0).toUpperCase() + nword[2]?.slice(1);
      result = fword+'_'+sword+'_'+tword;
    }
    else{
      result= word;
    }
    return result;
  }

  const keyPress = e =>{
    if(e.key==='Enter'){
      setKeyword(e.target.value);
    }
}

const convertNumberIntoFraction =  (num) =>{
  return Number(parseFloat(num).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 0
});
}

  return (
    <Box sx={{display:'flex' ,justifyContent:'center',padding:'1rem 0.5rem',backgroundColor:'#283048',margin:'0.5rem',borderRadius:'10px'}}>
      <List
      sx={{
        width: '100%',
        maxWidth: 250,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 'calc(100vh - 150px)',
        '& ul': { padding: 0 },
        backgroundColor:'#1B1A2F',
        display: { xs: 'none', md: 'block' }
      }}
      subheader={<li />}
      className="listItem"
      position="fixed"
    >
      {['Continents','MostViewed','Countries'].map((sectionId) => (
        <Box key={`section-${sectionId}`} sx={{padding:'0 0.5rem' }}>
            <ListSubheader sx={{fontSize:'1.3rem',color:'white',fontWeight:'bold',backgroundColor:'#1B1A2F',textAlign:'center'}}>{sectionId}</ListSubheader>
            {
            countryData[sectionId]?.map((item,idx) => (
              <ListItem key={idx} sx={{padding:'0.1em'}}>
                <Button sx={clickData===TolowerPascal(item?.Country)?
                {
                  ':hover': {
                    backgroundColor:'#0C63A4'
                  },
                  backgroundColor:'#0C63A4',
                  textAlign:'start',
                  textTransform: 'capitalize',
                  width: '100%',
                  color:'white',
                  borderRadius:'10px'
                }:
                {
                  ':hover': {
                    backgroundColor:'#0C63A4'
                  },
                  textAlign:'start',
                  textTransform: 'capitalize',
                  width: '100%',
                  color:'white',
                  backgroundColor:'#083358',
                  borderRadius:'10px'
                  }}>
                  <ListItemText onClick={() => setClickData(TolowerPascal(item?.Country))} primary={item?.Country} />
                  </Button>
              </ListItem>
            ))}
        </Box>
      ))}
    </List>
    <Box sx={{width:'83%',paddingLeft:'0.7rem'}}>
      <Grid  sx={clickData===""?{paddingBottom:'1rem'}:{display:'none'}}>
          <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: 'background.default',
                  display: 'flex',
                  justifyContent:'space-between',
                  flexWrap:'wrap',
                  gap: 2
                }}
              >
                {
                ['TOTAL CASES', 'ACTIVE CASES', 'TOTAL DEATHS', 'NEW CASES','CRITICAL','NEW DEATHS'].map((elevation,idx) => (
                  <Paper key={elevation} elevation={3} sx={{
                    padding:'0.8rem 2rem', 
                    width:'330px',
                    textAlign:'center',
                    background: 'linear-gradient(to right, #151E30, #1C2D43, #243B55)',
                    color:'white',
                    borderRadius:'5px'
                    }}>
                    <Typography variant="h5" sx={{letterSpacing:'4px',fontWeight:'bold'}}>{elevation}</Typography>
                    {covidData?.length!==0?(
                    <Typography className= {`cases${idx}`} variant="h5" x={{fontWeight:'bold'}}>{convertNumberIntoFraction(covidData[0]?.[capitalize(elevation)])}</Typography>
                    ):(
                      <Box sx={{display: 'flex', justifyContent:'center'}}>
                        <CircularProgress color="inherit" />
                      </Box>
                    )
                    }
                  </Paper>
                ))}
              </Box>
          </Grid>
      </Grid>
      <Box>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static" sx={{ backgroundColor:'#1B1A2F',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                World Data
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onKeyUp={keyPress}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
        <Paper>
          <TableContainer sx={clickData!==""?{ maxHeight: 500,overflowX:'scroll'}:{maxHeight: { xs: '500px', md: '300px' },overflowX:'scroll'}} className="tableData">
            {covidData.length!==0?(
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{backgroundColor:'#1B1A2F'}}>
                  {covidDetails.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                      sx={{ backgroundColor:'#1B1A2F',color:'white', whiteSpace:'nowrap',border:'none',fontWeight:'700'}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filter.length===0?(
                (clickData!==""?(covidData):(covidData.slice(2))).map((elem,idx) => {
                    return (
                      <TableRow className='tableRow'  tabIndex={-1} key={idx}>
                        {covidDetails.map((column) => {
                          return (
                            <TableCell className='columnDataHome' key={column.id} sx={{color:'white', border:'none',padding:'0.4rem 1rem',fontWeight:'700'}}>
                              {column.label==='Country'?(elem[snakeCase(column.label)]):(convertNumberIntoFraction(elem[snakeCase(column.label)]))}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })):
                  ((keyword!==""?(filter):(filter.slice(2))).map((elem,idx) => {
                    return (
                      <TableRow className='tableRow'  tabIndex={-1} key={idx}>
                        {covidDetails.map((column) => {
                          return (
                            <TableCell className='columnDataHome' key={column.id} sx={{color:'white', border:'none',padding:'0.4rem 1rem',fontWeight:'700'}}>
                              {column.label==='Country'?(elem[snakeCase(column.label)]):(convertNumberIntoFraction(elem[snakeCase(column.label)]))}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  }))
                  }
              </TableBody>
            </Table>
            ):(
              <Box sx={{ width: '100%' }}>
                <LinearProgress />
              </Box>
            )}
          </TableContainer>
        </Paper>
      </Box>
    </Box>
    </Box>
  )
}

export default Home