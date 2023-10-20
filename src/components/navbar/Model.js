import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

function MyComponent() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div onMouseOver={handleShow}>Products</div>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ position: "absolute", left: "-300px", top: "50px" }}>
        <div
          className="modal-content   "
          style={{
            width: "70vw",
            minHeight: "400px",
            border: "5px solid red",
          }}>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-4 ">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="card ">
                    <div class="card-body">
                      <h5 class="card-title">Inventary Management</h5>
                      <p class="card-text">Get accurate stock detail</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <button className="btn btn-dark p-3 mt-3">
                      click here
                    </button>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default MyComponent;
