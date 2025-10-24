import React, { useState, useEffect } from 'react';
import { Database, RefreshCw, TrendingUp } from 'lucide-react';
import { enrollmentAPI } from '../services/api';

const AdminPage = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchEnrollments();
    fetchStatistics();
  }, []);

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      const response = await enrollmentAPI.getAll();
      setEnrollments(response.data.data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await enrollmentAPI.getStatistics();
      setStatistics(response.data.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enrollment?')) {
      try {
        await enrollmentAPI.delete(id);
        fetchEnrollments();
        fetchStatistics();
      } catch (error) {
        console.error('Error deleting enrollment:', error);
      }
    }
  };

  const filteredEnrollments = filter === 'all' 
    ? enrollments 
    : enrollments.filter(e => e.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage student enrollments and contact information</p>
          </div>
          <button
            onClick={() => { fetchEnrollments(); fetchStatistics(); }}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {statistics && (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600">Total Enrollments</h3>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{statistics.total}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600">Pending</h3>
                <TrendingUp className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{statistics.pending}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600">Enrolled</h3>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{statistics.enrolled}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600">Popular Course</h3>
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm font-bold text-gray-900">
                {statistics.byCourse[0]?._id || 'N/A'}
              </p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">
              Enrollment Records ({filteredEnrollments.length})
            </h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-white bg-transparent text-white font-semibold"
            >
              <option value="all" className="text-gray-900">All Status</option>
              <option value="pending" className="text-gray-900">Pending</option>
              <option value="contacted" className="text-gray-900">Contacted</option>
              <option value="enrolled" className="text-gray-900">Enrolled</option>
              <option value="rejected" className="text-gray-900">Rejected</option>
            </select>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <RefreshCw className="w-8 h-8 mx-auto mb-4 text-gray-400 animate-spin" />
              <p className="text-gray-500">Loading enrollments...</p>
            </div>
          ) : filteredEnrollments.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <Database className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">No enrollments found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Course</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Experience</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Schedule</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredEnrollments.map((enrollment) => (
                    <tr key={enrollment._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{enrollment.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{enrollment.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{enrollment.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{enrollment.course}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">{enrollment.experience}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{enrollment.preferredSchedule}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          enrollment.status === 'enrolled' ? 'bg-green-100 text-green-800' :
                          enrollment.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                          enrollment.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {enrollment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(enrollment.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleDelete(enrollment._id)}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {filteredEnrollments.length > 0 && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Database Information</h3>
            <p className="text-gray-700 text-sm">
              All enrollment data is stored in MongoDB and persists across sessions. 
              Data is fetched from the backend API in real-time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
