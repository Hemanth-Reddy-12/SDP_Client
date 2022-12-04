import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RegVal from "./validation/RegVal";

const theme = createTheme({ backgroundColor: "red" });

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [valid, setVaid] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(RegVal(values));
    if (!errors.email && !errors.password) {
      axios
        .post("/login", {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          if (res.data.status) {
            localStorage.setItem("details", JSON.stringify(res.data.details));
            localStorage.setItem("token", JSON.stringify(res.data.token));
            navigate("/");
          } else {
            setVaid(res.data);
          }
        })
        .catch((err) => {
          console.log(err.message);
          alert("login failed");
        });
    }
  };

  let navigate = useNavigate();
  return (
    <>
      <Box container style={{ height: "90vh", marginTop: 0 }}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Grid
                component="form"
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                {valid.error && <p style={{ color: "red" }}>{valid.error}</p>}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  sx={{
                    input: { textAlign: "center" },
                  }}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => {
                        navigate("/Signup");
                      }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}
