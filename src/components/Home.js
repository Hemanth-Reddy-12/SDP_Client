import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Events from "./Events";

function Home() {
  const navigate = new useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="slab"
        color="black"
      >
        Entertinement Management System
      </Typography>
      <Events />
    </Box>
  );
}

export default Home;
