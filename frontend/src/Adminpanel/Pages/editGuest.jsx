import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const EditGuest = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userPassword: '',
    userRole: 'guest', // Default value as per model
    firstName: '',
    lastName: '',
    userEmail: '',
    phoneNumber: '',
    status: 'active', // Default status
  });

  const navigate = useNavigate(); // useNavigate for navigation
  const { id } = useParams(); // Get guest ID from URL parameters

  // Fetch existing guest data when the component loads
  useEffect(() => {
    axios.get(`/api/useraccount/${id}`)
      .then((response) => {
        setFormData(response.data); // Populate the form with existing data
      })
      .catch((error) => {
        console.error('Error fetching guest data:', error);
      });
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to update the guest data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/useraccount/${id}`, formData);
      // After successful update, navigate to the guest list page
      navigate('/guestList');
    } catch (error) {
      console.error('Error updating guest data:', error);
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title mt-5">Edit Guest</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit}>
                <div className="row formtype">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        className="form-control"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control"
                        type="password"
                        name="userPassword"
                        value={formData.userPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Role</label>
                      <select
                        className="form-control"
                        name="userRole"
                        value={formData.userRole}
                        onChange={handleChange}
                      >
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="housekeeping">Housekeeping</option>
                        <option value="guest">Guest</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Status</label>
                      <select
                        className="form-control"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Update Guest
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGuest;
