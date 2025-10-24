const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\d\s\+\-\(\)]+$/, 'Please provide a valid phone number']
  },
  course: {
    type: String,
    required: [true, 'Course selection is required'],
    enum: [
      'MERN Stack',
      'Python Full Stack',
      'DevOps & Cloud',
      'Java Spring Boot',
      '.NET Core Stack',
      'Mobile Development'
    ]
  },
  experience: {
    type: String,
    required: [true, 'Experience level is required'],
    enum: ['beginner', 'intermediate', 'advanced']
  },
  preferredSchedule: {
    type: String,
    required: [true, 'Preferred schedule is required'],
    enum: ['weekday-morning', 'weekday-evening', 'weekend']
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'enrolled', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes for better query performance
enrollmentSchema.index({ email: 1 });
enrollmentSchema.index({ createdAt: -1 });
enrollmentSchema.index({ status: 1 });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
