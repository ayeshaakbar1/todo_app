import {
  Avatar,
  Box,
  Modal,
  styled,
  TextField,
  Typography,
  ButtonGroup,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";

import axios from "axios";
import { addTodo } from "../../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "Center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddTodo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.todoReducers.user);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddTodo = () => {
    const data = {
      todo: title,
      completed: body,
      userId: user.id,
    };

    axios
      .post("https://dummyjson.com/todos/add", data, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(
        (response) => {
          dispatch(addTodo(response.data));

          setOpen(false);
          // setError("")
        },
        (error) => {
          console.log(error);
          // setError(error.response.data.message)
        }
      );
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (

        <>
          <Button
            sx={{ backgroundColor: "deeppink", fontWeight: 600 }}
            variant="contained"
            onClick={(e) => setOpen(true)}
            startIcon={<AddIcon />}
          >
            Add Todo
          </Button>
          <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              width={600}
              height={300}
              bgcolor={"background.default"}
              color={"text.primary"}
              p={3}
              borderRadius={5}
            >
              <Typography variant="h6" color="gray" textAlign="center">
                ADD TODO
              </Typography>
      {user && (

              <UserBox>

                <Avatar src={user.image} sx={{ width: 30, height: 30 }} />
                <Typography fontWeight={500} variant="span">
                  {`${user.firstName} ${user.lastName}`}
                </Typography>

              </UserBox>
      )}

              <TextField
                sx={{ width: "100%" }}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
                value={title}
                onChange={handleTitle}
              />

              <Box sx={{ minWidth: 110, mb: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    color="secondary"
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>True</MenuItem>
                    <MenuItem value={20}>False</MenuItem>
                  </Select>
                </FormControl>
              </Box>
          
              <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="outlined button group"
                color="secondary"
              >
                <Button onClick={handleAddTodo}>Post</Button>
                
              </ButtonGroup>
            </Box>
          </StyledModal>
    </>
  );
};

export default AddTodo;
