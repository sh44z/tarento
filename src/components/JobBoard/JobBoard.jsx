
import React from 'react';
import JobCard from './JobCard';
import { useState } from 'react';
import SearchDiv from '../SearchDiv/SearchDiv';



const JobBoard = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const jobsArray = [
    {
      id: 1,
      title: 'SDR',
      company: 'salesforce',
      location: 'London',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim suscipit quasi neque vero sunt deleniti omnis dolore saepe explicabo.",
    },
    {
      id: 2,
      title: 'ADR',
      company: 'Google',
      location: 'Reading  ',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim suscipit quasi neque vero sunt deleniti omnis dolore saepe explicabo.",
    },
    {
      id: 3,
      title: 'Lead Generaion specilaist',
      company: 'Mcafe',
      location: 'Bristol',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim suscipit quasi neque vero sunt deleniti omnis dolore saepe explicabo.",
    },

    {
      id: 4,
      title: 'Account Manager',
      company: 'salesforce',
      location: 'London',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim suscipit quasi neque vero sunt deleniti omnis dolore saepe explicabo.",
    },
    {
      id: 5,
      title: 'Account Manager',
      company: 'salesforce',
      location: 'London',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim suscipit quasi neque vero sunt deleniti omnis dolore saepe explicabo.",
    },
    {
      id: 6,
      title: 'Account Manager',
      company: 'salesforce',
      location: 'London',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur necessitatibus sit in, aliquid porro! Omnis rerum temporibus recusandae aspernatur impedit itaque libero molestias molestiae",
    },
    // Add more jobs to the array as needed
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter jobs based on the search query
  const filteredJobs = jobsArray.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || locationMatch; // Show jobs with a matching title or location
  });

  return (
    <div>
    <SearchDiv handleSearch={handleSearch}  />
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    
    {/* Render the filtered jobs using the JobDiv component */}
    {filteredJobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
    </div>

  );
};

export default JobBoard;

