import React, { useState } from 'react';
import CoursesDatabase from './CoursesDatabase';
import CourseSearch from './CourseSearch';
import CourseList from './CourseList';
import '../../styles/CourseSearch.css'

function Courses() {
  //Initializes the state with an empty string to hold the user's search input
  const [searchTerm, setSearchTerm] = useState('');
  //Update searchTerm with the provided term from the CourseSearch component
  const handleSearch = term => {
    setSearchTerm(term);
  };
  
  //Renders the Courses structure
  return (
    <div>
      <button className="course-info-button">i
        <span className="course-info-text">You will need to register with FAI Connect to book courses</span>
      </button>
      <CourseSearch onSearch={handleSearch} />
      <CourseList courses={CoursesDatabase} searchTerm={searchTerm} />
    </div>
  );
};

export default Courses;