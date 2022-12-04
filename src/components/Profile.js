import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ActionAreaCard() {
  const navigate = new useNavigate();
  const [details, setdetails] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    axios.get("/display").then((response) => {
      setdetails(response.data);
    });
  }, []);

  return (
    <Box
      container
      sx={{
        marginTop: "20vh",
        marginLeft: "80vh",
        marginBottom: "40vh",
      }}
    >
      <Card sx={{ height: 345, width: 345, justifyItems: "center" }}>
        <CardContent sx={{ height: "50%", marginLeft: "80px" }}>
          <Typography variant="h4" component="div">
            Profile
          </Typography>
          {details.map((val, key) => {
            return (
              <div key={key} className="customer">
                <CardMedia
                  component="img"
                  height="140"
                  image={key.url}
                  alt="userimage"
                />
                <h3>{val.username}</h3>
                <h3>{val.fullname}</h3>
                <h3>{val.age}</h3>
                <h3>{val.DOB}</h3>
                <h3>{val.phoneno}</h3>
              </div>
            );
          })}
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
