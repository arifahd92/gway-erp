import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function SimpleModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400, // Set the width as needed
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={modalStyle}>
          <div className="border border-2 d-flex justify-content-end">
            <Button
              className="border border-5 "
              onClick={handleClose}
              variant="contained"
            >
              Close
            </Button>
          </div>
          <h2 id="simple-modal-title">Simple Modal</h2>
          <p id="simple-modal-description">Hello! I am a simple modal.</p>
        </Box>
      </Modal>
    </div>
  );
}

export default SimpleModal;
