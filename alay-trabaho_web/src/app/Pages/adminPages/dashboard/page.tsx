"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsisV, 
  faMapMarkerAlt, 
  faPlus,
  faHome, 
  faUser, 
  faLocationDot, 
  faRightFromBracket,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ colorScheme }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className={`w-full h-full rounded-xl p-6 ${colorScheme.bg}`}>
        {/* Header with date and options */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm text-gray-600">February 12, 2021</span>
          <button className="text-gray-600 hover:text-gray-800 p-1">
            <FontAwesomeIcon icon={faEllipsisV} className="w-4 h-4" />
          </button>
        </div>

        {/* Company name */}
        <div className="mb-2">
          <span className="text-sm text-gray-600">RAFI MFI Inc</span>
        </div>

        {/* Job title */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Senior UI/UX Designer
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Array(3).fill('Full-time').map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${colorScheme.tagBg} ${colorScheme.tagText}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col items-start text-gray-600">
            <span className="text-sm">P516</span>
            <span className="text-sm">Sto Niño, Cebu City</span>
        </div>

          <button 
            className="px-4 py-1 rounded-md text-sm font-medium bg-gray-800 text-white hover:bg-gray-700"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const AddJobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    employmentType: 'full-time',
    income: '',
    paymentFrequency: 'monthly'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Add New Job</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Job Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Employment Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Employment Type
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* Income */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Income Amount
            </label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Payment Frequency */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Frequency
            </label>
            <select
              name="paymentFrequency"
              value={formData.paymentFrequency}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="monthly">Per Month</option>
              <option value="bi-weekly">Per 15 Days</option>
              <option value="daily">Per Day</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LogoutModal = ({ setShowLogoutModal, setShowDropdown }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-96">
      <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4" />
      <h3 className="text-xl font-semibold mb-4">Confirm Logout</h3>
      <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
      <div className="flex justify-end gap-4">
        <button 
          onClick={() => setShowLogoutModal(false)}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          Cancel
        </button>
        <button 
          onClick={() => {
            setShowLogoutModal(false);
            setShowDropdown(false);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
);

const JobListings = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAddJobModal, setShowAddJobModal] = useState(false);

  useEffect(() => {
    document.title = "Admin Dashboard | AlayTrabaho";
  }, []);

  const colorSchemes = [
    {
      bg: 'bg-gray-50',
      tagBg: 'bg-gray-200',
      tagText: 'text-gray-600'
    },
    {
      bg: 'bg-green-50',
      tagBg: 'bg-green-100',
      tagText: 'text-green-600'
    },
    {
      bg: 'bg-blue-50',
      tagBg: 'bg-blue-100',
      tagText: 'text-blue-600'
    },
    {
      bg: 'bg-sky-50',
      tagBg: 'bg-sky-100',
      tagText: 'text-sky-600'
    },
    {
      bg: 'bg-rose-50',
      tagBg: 'bg-rose-100',
      tagText: 'text-rose-600'
    },
    {
      bg: 'bg-violet-50',
      tagBg: 'bg-violet-100',
      tagText: 'text-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b">
        <div className="flex items-center">
          <img
            src="/assets/img/Logo.png"
            alt="AlayTrabaho Logo"
            className="w-8 h-8 object-contain mr-3"
          />
          <h1 className="text-xl font-bold">
            Alay<span className="text-blue-600">TRABAHO</span>
          </h1>
        </div>
        <div className="relative">
          <button 
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img 
              src="/assets/img/default-profileimg.png"
              className="w-8 h-8 rounded-full object-cover"
            />
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 top-12 w-56 bg-gray-800 rounded-lg shadow-lg py-2">
              <a href="../userPages/dashboard">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center gap-2">
                  <FontAwesomeIcon icon={faHome} className="w-4 h-4 text-white" />
                  <span className="text-white">Home</span> 
                </button>
              </a>

              <a href="../userPages/UserSettings">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-white" />
                  <span className="text-white">Profile</span> 
                </button>
              </a>
              
              <a href="../userPages/ManageJob">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-white" />
                  <span className="text-white">Manage Job Applied</span>
                </button>
              </a>
              
              <div className="border-t border-gray-700 my-1"></div>
              
              <button 
                className="w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center gap-2 text-red-400"
                onClick={() => {
                  setShowLogoutModal(true);
                  setShowDropdown(false);
                }}
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Jobs Posted</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorSchemes.map((scheme, index) => (
            <JobCard key={index} colorScheme={scheme} />
          ))}
        </div>
      </main>

      {/* Fixed Add Button */}
      <button 
        onClick={() => setShowAddJobModal(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full shadow-lg 
          flex items-center justify-center text-white hover:bg-blue-700"
      >
        <FontAwesomeIcon icon={faPlus} className="w-6 h-6" />
      </button>

      {/* Modals */}
      {showLogoutModal && (
        <LogoutModal 
          setShowLogoutModal={setShowLogoutModal}
          setShowDropdown={setShowDropdown}
        />
      )}
      
      <AddJobModal 
        isOpen={showAddJobModal}
        onClose={() => setShowAddJobModal(false)}
      />
    </div>
  );
};

export default JobListings;