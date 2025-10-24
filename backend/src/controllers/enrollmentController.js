const Enrollment = require('../models/Enrollment');

// Create new enrollment
exports.createEnrollment = async (req, res, next) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    
    res.status(201).json({
      success: true,
      message: 'Enrollment created successfully',
      data: enrollment
    });
  } catch (error) {
    next(error);
  }
};

// Get all enrollments
exports.getAllEnrollments = async (req, res, next) => {
  try {
    const { status, course, page = 1, limit = 50 } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (course) query.course = course;

    const enrollments = await Enrollment.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Enrollment.countDocuments(query);

    res.status(200).json({
      success: true,
      count: enrollments.length,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: enrollments
    });
  } catch (error) {
    next(error);
  }
};

// Get single enrollment
exports.getEnrollment = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: enrollment
    });
  } catch (error) {
    next(error);
  }
};

// Update enrollment
exports.updateEnrollment = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Enrollment updated successfully',
      data: enrollment
    });
  } catch (error) {
    next(error);
  }
};

// Delete enrollment
exports.deleteEnrollment = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Enrollment deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Get statistics
exports.getStatistics = async (req, res, next) => {
  try {
    const totalEnrollments = await Enrollment.countDocuments();
    const pendingEnrollments = await Enrollment.countDocuments({ status: 'pending' });
    const enrolledStudents = await Enrollment.countDocuments({ status: 'enrolled' });
    
    const courseStats = await Enrollment.aggregate([
      { $group: { _id: '$course', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total: totalEnrollments,
        pending: pendingEnrollments,
        enrolled: enrolledStudents,
        byCourse: courseStats
      }
    });
  } catch (error) {
    next(error);
  }
};
