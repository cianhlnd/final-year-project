import React from 'react';
import '../../styles/CourseList.css';
//Takes in courses and searchTerm props
function CourseList ({ courses, searchTerm}) {
  //Filter courses via searchTerm
  const filteredCourses = courses.filter((course) =>
  //Course data sent to lowercase to avoid case sensitivity
    course.title.toLowerCase().includes(searchTerm.toLowerCase())||
    course.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Renders the course containers in a flexbox format
  return (
    <div className="course-list-container">
      <div className="courses-wrapper">
        {/*Map over array to generate courses*/}
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-container">
            <p>Title: {course.title}</p>
            <p>Location: {course.location}</p>
            <p>Date: {course.date}</p>
            <a href={course.link} target="_blank" rel="noopener noreferrer" className = "book-btn">
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;