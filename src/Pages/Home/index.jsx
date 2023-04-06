import {
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Grid,
  Stack,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import { Box } from "@mui/system";
import AddTodo from "../../components/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodo } from "../../redux/actions/todoActions";
import TodoDetailModel from '../../components/TodoDetailModel';
import axios from "axios";

const Home = (setTodoId) => {
  const todoList = useSelector((state) => state.todoReducers.todoList);
  const user = useSelector((state) => state.todoReducers.user);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos?limit=10&skip=0", {
        // headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(
        (response) => {
          dispatch(setTodo(response.data.todos));
        },
        (error) => {
          console.log(error);
          // setError(error.response.data.message)
        }
      );
  }, []);


  return (
    <Container sx={{ pt: 14 }}>
      <Stack direction="column" gap={2}>
        <Grid>
          <Box display="flex" justifyContent="start" alignItems="center">
            <AddTodo />
          </Box>
        </Grid>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todoList.map((item) => {
                return (
                  <TableRow hover role="checkbox">
                    <TableCell>{item.id}</TableCell>
                   
                    <TableCell><TodoDetailModel TodoObject={item}/></TableCell>
                    <TableCell>
                      {item.completed ? "completed" : "pending"}
                    </TableCell>
                    
                   
                    <Tooltip title="Delete" >
                      <TableCell>
                        <DeleteIcon
                          onClick={() => dispatch(deleteTodo(item.id))}
                        />
                      </TableCell>
                    </Tooltip>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
};

export default Home;
