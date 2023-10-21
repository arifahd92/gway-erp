import React, { useState, useRef, useEffect } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function MyModal({ navItem }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (
        e.clientX < modalRef.current.getBoundingClientRect().left ||
        e.clientX > modalRef.current.getBoundingClientRect().right ||
        e.clientY > modalRef.current.getBoundingClientRect().bottom
      ) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousemove", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseLeave);
    };
  }, [open]);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    backgroundColor: "white",
    padding: "20px",
    overflow: "auto",
  };

  return (
    <div>
      <div variant="contained" onMouseOver={handleOpen}>
        {navItem}
      </div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={modalStyle} ref={modalRef}>
          <div className="container ">
            <div className="row">
              <div className="col-md-4 col-sm-6 ">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Inventary Management</h5>
                    <p class="card-text">Get accurate stock detail</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 text-center">
                <button className="btn btn-dark p-3 mt-3">click here</button>
              </div>

              <div className="col-md-4 col-sm-6"></div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default MyModal;
