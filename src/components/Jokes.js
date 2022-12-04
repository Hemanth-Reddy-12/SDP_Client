import React, { useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Jokes = () => {
  const [joke, setjoke] = useState("");
  console.log(joke);
  const getjoke = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        setjoke(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      container
      sx={{
        marginTop: "20vh",
        marginLeft: "80vh",
        marginBottom: "40vh",
      }}
    >
      <Card sx={{ height: "auto", width: 300 }}>
        <CardContent sx={{ height: "50%" }}>
          <Typography variant="h5">random Jokes</Typography>
          <Typography component="div">{joke}</Typography>
          <Button onClick={getjoke}>get joke</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Jokes;
