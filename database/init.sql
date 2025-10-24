// MongoDB initialization script
db = db.getSiblingDB('techstack_academy');

// Create collections
db.createCollection('enrollments');

// Create indexes
db.enrollments.createIndex({ email: 1 });
db.enrollments.createIndex({ createdAt: -1 });
db.enrollments.createIndex({ status: 1 });
db.enrollments.createIndex({ course: 1 });

// Insert sample data (optional)
db.enrollments.insertMany([
  {
    name: "Sample Student",
    email: "sample@example.com",
    phone: "+91 98765 43210",
    course: "MERN Stack",
    experience: "intermediate",
    preferredSchedule: "weekday-evening",
    message: "This is a sample enrollment",
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

print('Database initialized successfully!');
