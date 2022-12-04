import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

export default function Dj() {
  const navigate = new useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Typography variant="h3" color="white">
        {" "}
        DJ{" "}
      </Typography>

      <Typography>
        <Typography variant="h5" color="white">
          HERE IS THE DETAILS OF THE DJ MANERGER:
        </Typography>
        <Grid
          container
          style={{ display: "flex", gap: "50px,", marginTop: "10vh" }}
        >
          <Card sx={{ maxWidth: 345, marginLeft: "50vh" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://st.depositphotos.com/1011382/2840/i/950/depositphotos_28403737-stock-photo-afro-music-headphones.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DJ ATRIST
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NAME: ARJUN BASKAR CONTACTER:7013530836
                <br />
                RATING:⭐️⭐️⭐️
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/commons/b/bd/Robert_Hood_Live_%40_Kennedys%2C_Dublin%2C_Ireland_2009.JPG"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DJ ARTIST
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NAME: CH.TARUN REDDY CONTACTER:7013530836
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
