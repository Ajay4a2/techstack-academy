export const COURSES = [
  {
    id: 'mern',
    name: 'MERN Stack',
    icon: '⚛️',
    duration: '12 weeks',
    level: 'Intermediate',
    description: 'Master MongoDB, Express.js, React, and Node.js to build full-stack applications',
    topics: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Authentication']
  },
  {
    id: 'python',
    name: 'Python Full Stack',
    icon: '🐍',
    duration: '10 weeks',
    level: 'Beginner to Advanced',
    description: 'Learn Python, Django, Flask, and modern frontend frameworks',
    topics: ['Python', 'Django', 'Flask', 'PostgreSQL', 'REST APIs', 'Deployment']
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    icon: '☁️',
    duration: '14 weeks',
    level: 'Advanced',
    description: 'Master CI/CD, Docker, Kubernetes, AWS, and modern DevOps practices',
    topics: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Monitoring']
  },
  {
    id: 'java',
    name: 'Java Spring Boot',
    icon: '☕',
    duration: '12 weeks',
    level: 'Intermediate',
    description: 'Build enterprise applications with Java, Spring Boot, and microservices',
    topics: ['Java', 'Spring Boot', 'Microservices', 'JPA', 'Security', 'Testing']
  },
  {
    id: 'dotnet',
    name: '.NET Core Stack',
    icon: '🔷',
    duration: '11 weeks',
    level: 'Intermediate',
    description: 'Develop scalable applications using .NET Core, C#, and Azure',
    topics: ['C#', '.NET Core', 'Entity Framework', 'Azure', 'Web APIs', 'Blazor']
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    icon: '📱',
    duration: '13 weeks',
    level: 'Intermediate',
    description: 'Build cross-platform mobile apps with React Native and Flutter',
    topics: ['React Native', 'Flutter', 'Mobile UI', 'APIs', 'App Store', 'Firebase']
  }
];

export const EXPERIENCE_LEVELS = [
  { value: 'beginner', label: 'Beginner (0-1 years)' },
  { value: 'intermediate', label: 'Intermediate (1-3 years)' },
  { value: 'advanced', label: 'Advanced (3+ years)' }
];

export const SCHEDULES = [
  { value: 'weekday-morning', label: 'Weekday Morning (9 AM - 12 PM)' },
  { value: 'weekday-evening', label: 'Weekday Evening (6 PM - 9 PM)' },
  { value: 'weekend', label: 'Weekend (Flexible)' }
];
