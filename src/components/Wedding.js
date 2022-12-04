import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

export default function Wedding() {
  const navigate = new useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Box sx={{ margin: "5vh" }}>
        <Typography variant="h3" color="white">
          {" "}
          VENUE{" "}
        </Typography>
        <Typography>
          <Typography variant="h5" color="white">
            HERE IS THE DETAILS OF THE VENUES:
          </Typography>
          <Grid
            container
            style={{ display: "flex", gap: "50px", marginTop: "10vh" }}
          >
            <Card sx={{ maxWidth: 345, marginLeft: "20vh" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://5.imimg.com/data5/DB/HG/MY-3749211/wedding-planners-500x500.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  VENUES
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NAME: AB KALYANAMADAPAM
                  <br />
                  CONTACTER:7013530836
                  <br />
                  RATING:⭐️⭐️⭐️⭐️⭐️
                  <br />
                  AVAILABILITY:
                  <br /> 7TH AND 8TH OF NOVEMBER
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://media.weddingz.in/images/7941daefa912e70969e8804792325945/top-5-outdoor-wedding-venues-in-gurgaon-for-you-to-get-married-in.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  VENUES
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NAME: TR KALYANAMANDAPAM
                  <br />
                  CONTACTER:7013530836
                  <br />
                  RATING:⭐️⭐️⭐️⭐️
                  <br />
                  AVAILABILITY:
                  <br /> 24TH AND 27TH OF NOVEMBER
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.giftalove.com/blog/wp-content/uploads/20-Best-Winter-Wedding-Venues-Across-India.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  VENUES
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NAME: "L" CONVENTION HALL
                  <br />
                  CONTACTER:7013530836
                  <br />
                  RATING:⭐️⭐️⭐️⭐️
                  <br />
                  AVAILABILITY:
                  <br /> 13 AND 14TH OF NOVEMBER
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://media.weddingz.in/images/3bbb2b49ff3d9d54bbaa00fe18ac1daa/majestic-convention-halls-in-bangalore-ideal-for-hosting-big-fat-indian-weddings.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  VENUES
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NAME: "M&N" CONVENTION HALL
                  <br />
                  CONTACTER:7013530836
                  <br />
                  RATING:⭐️⭐️⭐️⭐️
                  <br />
                  AVAILABILITY:
                  <br /> 10 AND 12TH OF NOVEMBER
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Typography>
      </Box>
    </div>
  );
}
