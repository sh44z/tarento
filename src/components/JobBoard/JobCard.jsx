// JobCard.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const JobCard = ({ job }) => {
  const { title, company, location, description } = job;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleApplyNow = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Clear input fields and file selection on modal close
    setName('');
    setEmail('');
    setSelectedFile(null);
  };

  const handleSubmitApplication = () => {
    // Here you can implement the logic to handle the form submission.
    // Use the 'name', 'email', and 'selectedFile' state values.
    // For this example, we'll just log the data.

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Selected File:', selectedFile);

    // Close the modal after form submission
    closeModal();
  };

  return (
    <div className="job-card bg-white border rounded-lg p-6 max-w-md mx-auto mb-4 ">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h3 className="text-lg font-medium">{company}</h3>
      <p className="mt-2">{location}</p>
      <p className="mt-2">{description}</p>
      <button
        className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleApplyNow}
      >
        Apply Now
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2 className="text-xl font-semibold">Apply for {title}</h2>
        <form className="mt-4">
          <label className="block">
            Name:
            <input
              className="mt-1 form-input block w-full"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="block mt-4">
            Email Address:
            <input
              className="mt-1 form-input block w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block mt-4">
            Upload Resume/CV:
            <input
              className="mt-1 form-input block w-full"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </label>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="mr-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleSubmitApplication}
            >
              Submit Application
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default JobCard;
