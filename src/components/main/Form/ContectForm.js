import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    landline: "",
    phone: "",
    comments: "",
    org_name: "",
  });
  const [request, setRequest] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      setRequest(true);
      const api = "https://api.greenwayitsolutions.com/enquirydb/new";
      const response = await axios.post(api, formData);

      console.log(response);
      alert(`Thanks for contacting! We will be back soon.`);
      setRequest(false);
    } catch (error) {
      alert(error.message);
      setRequest(false);
    }
  };

  return (
    <div className="container">
      {request && <Alert severity="warning">Please wait...</Alert>}
      <Container maxWidth="sm" className="mt-3">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mobile"
                name="landline"
                type="tel"
                value={formData.landline}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column">
                <Typography variant="subtitle1">Message</Typography>
                <textarea
                  className="scrollable-textarea"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                />
              </Box>
            </Grid>
          </Grid>
          <Button
            className="mt-3 p-3"
            style={{ backgroundColor: "rgb(2, 22, 19)" }}
            type="submit"
            variant="contained"
            disabled={request}
            fullWidth
            m={2}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ContactForm;
