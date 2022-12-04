import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = new useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Typography variant="h4" color="white">
        MARRIAGE TRANSPOTATION
      </Typography>

      <Typography>
        <br />
        <Typography variant="h5" color="white">
          HERE IS THE DETAILS OF THE TRANSPOTATION:
        </Typography>
        <Grid
          container
          style={{ display: "flex", gap: "50px", marginTop: "10vh" }}
        >
          <Card sx={{ maxWidth: 345, marginLeft: "60vh" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://i.pinimg.com/originals/8f/5c/24/8f5c24d61164fddafe88e4f8074133ab.jpg"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
              >
                MARRIAGE CARS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NAME: AB CARS
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
              image="https://gumlet.assettype.com/knocksense%2F2022-11%2F97dbf04c-d779-44d0-a371-6cf3e6280e5f%2Felectric_buses_india_tata_motors_electric_bus_lucknow_electric_bus_electric_vehicles_india_luckn_154.jpg?auto=format%2Ccompress&fit=max&format=webp&w=1700&dpr=1.5"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MARRIAGE BUSES
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NAME: TR BUSES
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
