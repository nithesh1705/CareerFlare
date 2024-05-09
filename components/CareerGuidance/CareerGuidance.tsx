"use client"
import React, { useState } from 'react';
import axios from "axios";

const CareerGuidance = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(17).fill("Choose option"));
  const [popupData, setPopupData] = useState(null);

  const labels = [
    "Database Fundamentals", "Computer Architecture", "Distributed Computing Systems","Cyber-Security", "Networking", "Development", 
    "Programming Skills", "Project Management","Computer Forensics Fundamentals", "Technical Communication", "AI ML", "Software Engineering", 
    "Business Analysis","Communication skills", "Data Science", "Troubleshooting-skills", "Graphics Designing"
  ];

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/career/', {
        features: selectedOptions.map(option => {
          switch(option) {
            case "Choose option":
              return 0;
            case "Not Interested":
              return 1;
            case "Poor":
              return 2;
            case "Beginner":
              return 3;
            case "Average":
              return 4;
            case "Intermediate":
              return 5;
            case "Excellent":
              return 6;
            case "Professional":
              return 7;
            default:
              return 0;
          }
        })
      });
      setPopupData(response.data.top_predicted_roles);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOptionChange = (index, event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const closePopup = () => {
    setPopupData(null);
    setSelectedOptions(Array(17).fill("Choose option"));
  };

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Explore various career paths and assess your skills with our Career Guidance tool</h1>
      <h3 className="mb-6 text-center">Select from a range of labels representing different domains, and choose your proficiency level from the dropdown options. Get personalized insights to help shape your career journey.</h3>
      {labels.map((label, index) => (
        <div key={index} className="flex items-center justify-center mb-4">
          <div className="w-1/2 table-column md:flex md:w-1/2 items-center justify-between mt-2">
            <label className="mr-4">{label}</label>
            <select
              className="border rounded px-4 py-2 border-fuchsia-600 bg-stone-300 dark:bg-gray-600"
              value={selectedOptions[index]}
              onChange={(event) => handleOptionChange(index, event)}
            >
              <option value="Choose option">Choose option</option>
              <option value="Not Interested">Not Interested</option>
              <option value="Poor">Poor</option>
              <option value="Beginner">Beginner</option>
              <option value="Average">Average</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Excellent">Excellent</option>
              <option value="Professional">Professional</option>
            </select>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button
          className="bg-purple-500 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSubmit}
        >
          Discover
        </button>
      </div>
      {popupData && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white text-black dark:bg-slate-700 dark:text-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Top Predicted Roles</h2>
            <ul>
              {popupData.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
            <button className="mt-4 bg-purple-500 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGuidance;
