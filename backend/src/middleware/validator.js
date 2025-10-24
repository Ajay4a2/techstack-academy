const { body, validationResult } = require('express-validator');

exports.validateEnrollment = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[\d\s\+\-\(\)]+$/).withMessage('Please provide a valid phone number'),
  
  body('course')
    .notEmpty().withMessage('Course selection is required')
    .isIn([
      'MERN Stack',
      'Python Full Stack',
      'DevOps & Cloud',
      'Java Spring Boot',
      '.NET Core Stack',
      'Mobile Development'
    ]).withMessage('Invalid course selection'),
  
  body('experience')
    .notEmpty().withMessage('Experience level is required')
    .isIn(['beginner', 'intermediate', 'advanced']).withMessage('Invalid experience level'),
  
  body('preferredSchedule')
    .notEmpty().withMessage('Preferred schedule is required')
    .isIn(['weekday-morning', 'weekday-evening', 'weekend']).withMessage('Invalid schedule'),
  
  body('message')
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];
