const express = require('express');
const router = express.Router();
const {
  createEnrollment,
  getAllEnrollments,
  getEnrollment,
  updateEnrollment,
  deleteEnrollment,
  getStatistics
} = require('../controllers/enrollmentController');
const { validateEnrollment } = require('../middleware/validator');

router.post('/', validateEnrollment, createEnrollment);
router.get('/', getAllEnrollments);
router.get('/statistics', getStatistics);
router.get('/:id', getEnrollment);
router.put('/:id', validateEnrollment, updateEnrollment);
router.delete('/:id', deleteEnrollment);

module.exports = router;
