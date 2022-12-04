import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import axios from "axios";
import validation from "./validation/Validation";

const theme = createTheme();

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    console.log(
      !errors.username,
      !errors.fullname,
      !errors.email,
      !errors.password
    );
    if (
      !errors.username &&
      !errors.fullname &&
      !errors.email &&
      !errors.password
    ) {
      axios
        .post("/register", {
          username: values.username,
          fullname: values.fullname,
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          alert("successful regester");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{ maxWidth: "90vh" }}>
        <CssBaseline />
        <Paper
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "0.2px solid gray",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Grid
            component="form"
            Validation
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 5,
              width: "70%",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              sx={{
                input: { textAlign: "center" },
              }}
              label="username"
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullname"
              sx={{
                input: { textAlign: "center" },
              }}
              label="fullname"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && (
              <p style={{ color: "red" }}>{errors.fullname}</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              sx={{
                input: { textAlign: "center" },
              }}
              label="email"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <TextField
              margin="normal"
              label="password"
              required
              fullWidth
              sx={{
                input: { textAlign: "center" },
              }}
              name="password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
