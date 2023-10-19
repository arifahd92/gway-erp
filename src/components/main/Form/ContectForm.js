import axios from "axios";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    phone: "",
    message: "",
  });

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
      const api = "https://gwayerp.com/contact";
      const response = await axios.post(api, formData);

      console.log(response.data);
      alert(`thanks for contacting we will be back soon`);
    } catch (error) {
      alert(error.message);
    }

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
          />
        </div>
        <button type="submit" className="btn btn-dark btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
