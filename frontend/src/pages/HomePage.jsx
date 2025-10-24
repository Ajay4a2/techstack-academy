import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Code, Award } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master <span className="text-blue-600">Tech Stacks</span> with Industry Experts
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your career with our comprehensive training programs. Learn from real-world projects and get job-ready in months.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/courses')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Explore Courses
            </button>
            <button
              onClick={() => navigate('/enroll')}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert-Led Training</h3>
            <p className="text-gray-600">Learn from industry professionals with 10+ years of experience</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hands-On Projects</h3>
            <p className="text-gray-600">Build real-world applications and expand your portfolio</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Job Assistance</h3>
            <p className="text-gray-600">Get placement support and career guidance after completion</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join 5,000+ students who have transformed their careers with us</p>
          <button
            onClick={() => navigate('/enroll')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
