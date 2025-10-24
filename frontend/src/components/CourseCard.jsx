import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate('/enroll', { state: { selectedCourse: course.name } });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
        <div className="text-5xl mb-3">{course.icon}</div>
        <h3 className="text-2xl font-bold">{course.name}</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
            {course.level}
          </span>
        </div>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleEnroll}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Enroll in this Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
