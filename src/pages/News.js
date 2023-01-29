import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from '@mui/material/CircularProgress';

const News = () => {
  const [keyword, setKeyword] = useState("get-coronavirus-news");
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(0);
 
  const options = {
    method: "GET",
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/${keyword}/${page}`,
    headers: {
      "X-RapidAPI-Key": "193054a8e1msh54b91652feb3e3ap1e1bf8jsnad84dc5f1426",
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setNewsData(response.data.news);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [keyword, page]);

  return (
    <Box
      sx={{
        display: "flex",
        color: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:'center',
        gap: "2rem",
        marginTop: "2rem",
      }}
    >
      <Box sx={{ width: 700, display: "flex", gap: "2rem", flexWrap:'wrap'}}>
        <Button
          onClick={() => setKeyword("get-vaccine-news")}
          sx={{
            backgroundColor: "#191B2F",
            color: "white",
            fontWeight: "bold",
            ":hover": { backgroundColor: "#191B2F" },
            width:'200px',
            padding:'1rem'
          }}
        >
          <VaccinesIcon />
          &nbsp;&nbsp;Vaccines
        </Button>
        <Button
          onClick={() => setKeyword("get-coronavirus-news")}
          sx={{
            backgroundColor: "#191B2F",
            color: "white",
            fontWeight: "bold",
            ":hover": { backgroundColor: "#191B2F" },
            width:'200px',
            padding:'1rem'
          }}

        >
          <CoronavirusIcon />
          &nbsp;&nbsp;covid-19
        </Button>
        <Button
          onClick={() => setKeyword("get-health-news")}
          sx={{
            backgroundColor: "#191B2F",
            color: "white",
            fontWeight: "bold",
            ":hover": { backgroundColor: "#191B2F" },
            width:'200px',
            padding:'1rem'
          }}
        >
          <MonitorHeartIcon />
          &nbsp;&nbsp;Health
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {newsData.length!==0?(
        newsData.slice(1).map((elem,idx) => {
          return (
            <Card
              sx={{
                maxWidth: 400,
                height: "460px",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                backgroundColor:'#191B2F',
                color:'white'
              }}
              key={idx}
            >
              <CardMedia
                sx={{ height: 190, backgroundPosition: "top" }}
                image={elem.urlToImage}
                title={elem.reference}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elem.title}
                </Typography>
                <Typography sx={{color:'#a1a1a1'}} variant="body2">
                  {elem.content}
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: "0 0 1.5rem 1rem" }}>
                <Button
                  href={elem.link}
                  target="_blank"
                  size="small"
                  variant="contained"
                  color="success"
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          );
        })):(
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )
        }
      </Box>
      <Stack spacing={2} sx={{ padding: "2rem 0" }}>
        <Pagination
          sx={{
            backgroundColor: "white",
            padding: "0.5rem 3rem",
            borderRadius: "10px",
          }}
          size="large"
          count={10}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default News;
