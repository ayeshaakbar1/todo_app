import React from "react";
import {
  Avatar,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { TextField, Checkbox, Button, Link, Stack } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/todoActions";

const Login = () => {
  const user = useSelector((state) => state.todoReducers.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleApi = () => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          dispatch(addUser(response.data));
          setError("");
          navigate("/");
        },
        (error) => {
          setError(error.response.data.message);
        }
      );
  };

  const btnStyle = {
    margin: "30px 0",
    padding: "4%",
    backgroundColor: "#9c27b0",
    fontWeight: 600,
  };
  const avatarStyle = {
    backgroundColor: "#9c27b0",
    height: "45px",
    width: "66px",
    margin: "22px",
  };
  const textStyle = { padding: "20px" };
  const typoStyle = { height: "3vh", margin: "5px 145px" };
  const accStyle = { margin: "0 70px" };
  const boxStyle = { margin: "0 120px" };
  return (
    <Grid>
      <Paper
        elevation={11}
        sx={{
          minWidth: 250,
          padding: 9,
          height: 600,
          width: 400,
          margin: "120px auto",
        }}
      >
        <Grid align="center">
          <Avatar style={avatarStyle}>
            {" "}
            <AutoStoriesIcon />{" "}
          </Avatar>
          <h1>Welcome Again</h1>
          <h2>Login Here</h2>
        </Grid>
        <Grid style={textStyle}>
          <Stack spacing={3}>
            <Typography variant="outline" color="error">
              {error}
            </Typography>
            <TextField
              id="filled-basic"
              label="Enter Username"
              placeholder="Enter Username"
              variant="filled"
              shadow
              fullWidth
              required="true"
              value={username}
              onChange={handleUsername}
            />
            <TextField
              id="filled-basic"
              label="Password"
              placeholder="Enter Password"
              type="password"
              variant="filled"
              shadow
              fullWidth
              required="true"
              value={password}
              onChange={handlePassword}
            />
          </Stack>
        </Grid>
        <FormControlLabel
          style={boxStyle}
          control={<Checkbox color="secondary" />}
          label="Remember Me"
        />
        <Button
          onClick={handleApi}
          variant="contained"
          fullWidth
          style={btnStyle}
        >
          LOGIN IN
        </Button>
        <Typography style={typoStyle}>
          {" "}
          <Link href="#" variant="body2">
            Forgot Password{" "}
          </Link>
        </Typography>
        <Typography style={accStyle}>
          {" "}
          Do you have an account ?<Link href="SignUp">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
