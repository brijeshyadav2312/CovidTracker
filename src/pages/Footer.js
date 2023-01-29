import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#14274D',padding:'1rem 0', color:'white' }}>
        <Box sx={{display:'flex', flexWrap:'wrap',justifyContent:'space-evenly'}}>
            <Box sx={{ my: 3, mx: 2,padding:'0 3rem',width:'400px',fontWeight:'bold'}}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h3" component="div">
                    COVAC.LIVE
                    </Typography>
                </Grid>
                </Grid>
                <Typography color="white" variant="body2">
                covac is an up to date vaccine and covid-19 tracker which has been landed in order to inform people from all over the planet about the present novel coronavirus (COVID-19) pandemic.
                </Typography>
            </Box>
            <Box sx={{ my: 3, mx: 2,width:'200px'}}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                    Vaccine
                    </Typography>
                </Grid>
                </Grid>
                <ListItem component="div" sx={{display:'flex', flexDirection:'column',alignItems:'flex-start'}} disablePadding>
                    <ListItemText primary={`All Vaccines`} />
                    <ListItemText primary={`Pfizer`} />
                    <ListItemText primary={`Moderna`} />
                    <ListItemText primary={`Oxford`} />
                    <ListItemText primary={`Novavax`} />
                    <ListItemText primary={`Sinovac`} />
                </ListItem>
            </Box>
            <Box sx={{ my: 3, mx: 2,width:'200px'}}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                    News
                    </Typography>
                </Grid>
                </Grid>
                <ListItem component="div" sx={{display:'flex', flexDirection:'column',alignItems:'flex-start'}} disablePadding>
                    <ListItemText primary={`Vaccine news`} />
                    <ListItemText primary={`COVID-19 news`} />
                    <ListItemText primary={`Health news`} />
                </ListItem>
            </Box>
            <Box sx={{ my: 3, mx: 2,width:'200px'}}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                    COVID-19
                    </Typography>
                </Grid>
                </Grid>
                <ListItem component="div" sx={{display:'flex', flexDirection:'column',alignItems:'flex-start'}} disablePadding>
                    <ListItemText primary={`World Data`} />
                    <ListItemText primary={`India`} />
                    <ListItemText primary={`Canada`} />
                    <ListItemText primary={`Australia`} />
                    <ListItemText primary={`Japan`} />
                    <ListItemText primary={`France`} />
                    <ListItemText primary={`Netherlands`} />
                </ListItem>
            </Box>
        </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 5,display:'flex',alignItems:'center',flexDirection:'column' }}>
        <Typography gutterBottom variant="h5">
        Please let us know if we can provide any other additional features
        </Typography>
        <Stack direction="row" spacing={1} sx={{justifyContent:'center', flexWrap:'wrap'}}>
          <InstagramIcon style={{fontSize:'5rem'}} />
          <LinkedInIcon style={{fontSize:'5rem'}}/>
          <TwitterIcon style={{fontSize:'5rem'}}/>
          <FacebookIcon style={{fontSize:'5rem'}}/>
          <MailIcon style={{fontSize:'5rem'}}/>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
