import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import { FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';
import './App.css'; // Your custom CSS

const Dropdown = () => {
  const [occupation, setOccupation] = useState('');
  const [studyHours, setStudyHours] = useState('');
  const [location, setLocation] = useState('');
  const [understanding, setUnderstanding] = useState('');
  const [internetAccess, setInternetAccess] = useState('');
  const [jambPreparation, setJambPreparation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [responseData, setResponseData] = useState(null); // For displaying full response

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object and append user input
    const formData = new FormData();
    formData.append('parental_occupation', occupation);
    formData.append('study_hours', studyHours);
    formData.append('location', location);
    formData.append('understanding_of_subjects', understanding);
    formData.append('internet_access', internetAccess);
    formData.append('adequate_jamb_preparation', jambPreparation);

    try {
      // Send POST request with FormData
      const response = await axios.post('https://jambvision.onrender.com/predict', formData);
      
      console.log('Response from server:', response); // Log full response in the console
      setResponseData(response.data); // Save response data for display
      setResultMessage('Connection successful!'); // Indicate a successful connection
      setSubmitted(true); // Set submitted status to true
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setResultMessage('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className='drop-down-container'>
      <Typography variant="h6" align="center" gutterBottom>
        Check The Likelihood of You Passing or Failing Your Jamb Exam.
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl className="custom-dropdown" variant="outlined">
          <InputLabel id="occupation-label">Parental Occupation</InputLabel>
          <Select
            labelId="occupation-label"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            label="Parental Occupation"
          >
            <MenuItem value="">
              <em>Select One</em>
            </MenuItem>
            <MenuItem value="Artisan">Artisan</MenuItem>
            <MenuItem value="Civil servant">Civil servant</MenuItem>
            <MenuItem value="Business owner">Business owner</MenuItem>
            <MenuItem value="Trader">Trader</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="custom-dropdown" variant="outlined">
          <InputLabel id="study-hours-label">Study Hours</InputLabel>
          <Select
            labelId="study-hours-label"
            value={studyHours}
            onChange={(e) => setStudyHours(e.target.value)}
            label="Study Hours"
          >
            <MenuItem value="">
              <em>Select One</em>
            </MenuItem>
            <MenuItem value="1-3 hours">1-3 hours</MenuItem>
            <MenuItem value="More than 5 hours">More than 5 hours</MenuItem>
            <MenuItem value="3-5 hours">3-5 hours</MenuItem>
            <MenuItem value="Less than 1 hour">Less than 1 hour</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="custom-dropdown" variant="outlined">
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            label="Location"
          >
            <MenuItem value="">
              <em>Select One</em>
            </MenuItem>
            <MenuItem value="Epe">Epe (Public)</MenuItem>
            <MenuItem value="Lekki">Lekki (Private)</MenuItem>
            <MenuItem value="Ikorodu">Ikorodu (Public)</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
            <MenuItem value="Victoria Island">Victoria Island (Private)</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="custom-dropdown" variant="outlined">
          <InputLabel id="understanding-label">Understanding of Subjects</InputLabel>
          <Select
            labelId="understanding-label"
            value={understanding}
            onChange={(e) => setUnderstanding(e.target.value)}
            label="Understanding of Subjects"
          >
            <MenuItem value="">
              <em>Select One</em>
            </MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="Poor">Poor</MenuItem>
            <MenuItem value="Excellent">Excellent</MenuItem>
            <MenuItem value="Average">Average</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="custom-dropdown" variant="outlined">
          <InputLabel id="internet-access-label">Internet Access</InputLabel>
          <Select
            labelId="internet-access-label"
            value={internetAccess}
            onChange={(e) => setInternetAccess(e.target.value)}
            label="Internet Access"
          >
            <MenuItem value="">
              <em>Select One</em>
            </MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="Poor">Poor</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="custom-dropdown" variant="outlined">
          <InputLabel id="jamb-preparation-label">Adequate JAMB Preparation</InputLabel>
          <Select
            labelId="jamb-preparation-label"
            value={jambPreparation}
            onChange={(e) => setJambPreparation(e.target.value)}
            label="Adequate JAMB Preparation"
          >
            <MenuItem value="">
              <em>Select One</em>
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: '#f5ba13', color: '#fff', width: '300px', marginTop: '20px' }}
          >
            Submit
          </Button>
        </div>
      </form>

      {submitted && (
        <div>
          <Typography className="success-message" variant="body1" align="center">
            {resultMessage}
          </Typography>
          {responseData && (
            <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
              {JSON.stringify(responseData, null, 2)} {/* Display full server response */}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
