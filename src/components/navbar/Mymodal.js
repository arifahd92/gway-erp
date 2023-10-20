import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function MyModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    backgroundColor: "white",
    padding: "20px",
  };

  return (
    <div>
      <div variant="contained" onClick={handleOpen}>
        Open Modal
      </div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <Box sx={modalStyle}>
          <div className="container">
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
