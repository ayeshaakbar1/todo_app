import {
  Box,
  Modal,
  styled,
  Typography,
  
} from "@mui/material";
import React, { useState } from "react";



const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "Center",
});


const TodoDetailModel = ({ TodoObject }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box onClick={(e) => setOpen(true)}>{TodoObject.todo}</Box>
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
           <Typography variant="h5" color="gray" textAlign="center">
                DETAIL TODO
              </Typography>
              <Typography variant="h6" mt={5} letterSpacing={6} color="gray" textAlign="center">
            Userid:{TodoObject.userId}
          </Typography>
          <Typography variant="h6" mt={7} letterSpacing={2} textAlign="center">
            Task:  {TodoObject.todo}
          </Typography>
          <Typography variant="h6" color="gray" textAlign="center">
            {TodoObject.completed}
          </Typography>
       
        </Box>
      </StyledModal>
    </>
  );
};

export default TodoDetailModel;
