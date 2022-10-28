import React from 'react';
import { Link } from 'react-router-dom';


const Course = ({ course, handleShowDetails }) => {
    console.log(course)
    return (
        <div onClick={() => {
            handleShowDetails(course.id)
        }} className="card w-96 glass cursor-pointer">
            <figure><img src={course.image_url} alt="car!" /></figure>
            <div className="card-body bg-blue-300">
                <h2 className="card-title text-white">{course.course_name}</h2>
                <p>{course.course_description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/courses/${course.id}`}><button className="btn  bg-card text-white">Show More Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;