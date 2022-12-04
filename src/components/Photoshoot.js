import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

export default function Kalyanamandapam() {
  const navigate = new useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Typography variant="h4" color="white">
        PhotoShoot
      </Typography>

      <Typography>
        <Typography variant="h5" color="white">
          HERE IS THE DETAILS OF THE PHOTO SHOOT:
        </Typography>
        <Grid
          container
          style={{ display: "flex", gap: "60px", marginTop: "10vh" }}
        >
          <Card sx={{ maxWidth: 345, marginLeft: "60vh" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1415093433/photo/detail-of-photographer-holding-dslr-camera-outdoors.webp?s=612x612&w=is&k=20&c=PqscjjqLrW7u7WzY0sxGAjq-zixkXfWwgW0ETsb44nk="
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PHOTO SHOOt
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NAME: AB PHOTOSHOOT
                <br />
                CONTACTER:7013530836
                <br />
                RATING:⭐️⭐️⭐️⭐️⭐️
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PHOTO SHOOT
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NAME: TR PHOTOSHOOT
                <br />
                CONTACTER:7013530836
                <br />
                RATING:⭐️⭐️⭐️⭐️
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Typography>
    </div>
  );
}
