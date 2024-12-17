export const dummyData = {
  career: [
    { id: 1, option: 'Get a college degree', happiness: +20, intelligence: +50 },
    { id: 2, option: 'Start your own business', health: -30, happiness: +20 },
    { id: 3, option: 'Join a corporate job', happiness: +20, intelligence: +20 },
    { id: 4, option: 'Pursue a creative career (artist, musician, writer)', happiness: +20, intelligence: +50 },
    { id: 5, option: 'Work in a non-profit organization', happiness: +20 },
    { id: 6, option: 'Become an entrepreneur', happiness: +20 },
    { id: 7, option: 'Join the military or civil service', happiness: +20 },
    { id: 8, option: 'Become a teacher or professor', happiness: +20 },
    { id: 9, option: 'Work in the healthcare industry', health: +30, intelligence: +20 },
    { id: 10, option: 'Pursue a trade or technical career', happiness: +20 },
  ],
  social: [
    { id: 1, option: 'Get married', happiness: +50 },
    { id: 2, option: 'Have children', happiness: +70 },
    { id: 3, option: 'Join a social club or organization' },
    { id: 4, option: 'Volunteer for a cause', happiness: +40 },
    { id: 5, option: 'Travel the world', happiness: +20, intelligence: +50 },
    { id: 6, option: 'Attend cultural events or festivals', intelligence: +50 },
    { id: 7, option: 'Host parties or social gatherings', charisma: +30 },
    { id: 8, option: 'Participate in community service', happiness: +40 },
    { id: 9, option: 'Join a sports team or club', intelligence: +50, happiness: +20 },
    { id: 10, option: 'Learn a new language', happiness: +20, intelligence: +50 },
  ],
  finance: [
    { id: 1, option: 'Save for retirement', happiness: +20 },
    { id: 2, option: 'Invest in stocks or real estate', intelligence: +30 },
    { id: 3, option: 'Pay off debts', happiness: -20 },
    { id: 4, option: 'Start an emergency fund', happiness: +10 },
    { id: 5, option: 'Donate to charity', happiness: +30 },
    { id: 6, option: 'Create a budget and stick to it', intelligence: +50 },
    { id: 7, option: 'Invest in your education or skills', intelligence: +40 },
    { id: 8, option: 'Purchase insurance (life, health, etc.)', health: +20 },
    { id: 9, option: 'Plan for your children education', happiness: +20 },
    { id: 10, option: 'Diversify your investment portfolio', intelligence: +50 },
  ],
  activities: [
    { id: 1, option: 'Learn a new skill or hobby', intelligence: +20 },
    { id: 2, option: 'Practice a sport or physical activity', strength: +50 },
    { id: 3, option: 'Attend cultural events or festivals', happiness: +30 },
    { id: 4, option: 'Take up a creative pursuit (painting, music, writing)', happiness: +40 },
    { id: 5, option: 'Spend time with family and friends', happiness: +60, charisma: +20 },
    { id: 6, option: 'Travel to new places', happiness: +70 },
    { id: 7, option: 'Read books or listen to podcasts', intelligence: +30 },
    { id: 8, option: 'Participate in outdoor activities (hiking, camping, etc.)', strength: +40 },
    { id: 9, option: 'Take up gardening or home improvement projects' },
    { id: 10, option: 'Attend classes or workshops', intelligence: +40 },
  ],
  ageoptions: [
    {
      age: 5,
      activities: [
        { option: "Learn Basic Coding Concepts", happiness: +10, intelligence: +15, strength: -5 },
        { option: "Play Educational Coding Games", happiness: +15, intelligence: +10, strength: -5 },
        { option: "Build Simple Robots with Blocks", happiness: +20, intelligence: +20, strength: -10 },
        { option: "Drawing and Coloring", happiness: +15, intelligence: +5 },
        { option: "Outdoor Play", happiness: +10, health: +10, strength: +10 }
      ]
    },
    {
      age: 6,
      activities: [
        { option: "Learn to Use a Computer", happiness: +15, intelligence: +15, health: -5 },
        { option: "Attend a Coding Camp for Kids", happiness: +20, intelligence: +20, health: -10 },
        { option: "Build a Simple Website", happiness: +25, intelligence: +25, health: -10 },
        { option: "Storytime and Reading", happiness: +20, intelligence: +15 },
        { option: "Arts and Crafts", happiness: +15, intelligence: +10 }
      ]
    },
    {
      age: 7,
      activities: [
        { option: "Learn Basic Programming Concepts", happiness: +20, intelligence: +25, strength: -10 },
        { option: "Attend a Game Development Workshop", happiness: +25, intelligence: +20, strength: -10 },
        { option: "Create a Simple Game", happiness: +30, intelligence: +30, health: -10 },
        { option: "Outdoor Sports and Activities", happiness: +25, health: +15, strength: +15 },
        { option: "Board Games and Puzzles", happiness: +20, intelligence: +15 }
      ]
    },
    {
      age: 8,
      activities: [
        { option: "Learn HTML and CSS", happiness: +25, intelligence: +30, health: -10 },
        { option: "Build a Personal Website", happiness: +30, intelligence: +25, health: -10 },
        { option: "Attend a Robotics Workshop", happiness: +35, intelligence: +35, strength: -15 },
        { option: "Creative Writing and Storytelling", happiness: +30, intelligence: +20 },
        { option: "Musical Instrument Practice", happiness: +25, intelligence: +15 }
      ]
    },
    {
      age: 9,
      activities: [
        { option: "Learn a Programming Language", happiness: +30, intelligence: +35, strength: -15 },
        { option: "Create a Simple App", happiness: +35, intelligence: +30, health: -10 },
        { option: "Participate in a Coding Competition", happiness: +40, intelligence: +40, health: -15 },
        { option: "Science Experiments and Projects", happiness: +35, intelligence: +30, strength: -10 },
        { option: "Art and Design Classes", happiness: +30, intelligence: +25 }
      ]
    },
    {
      age: 10,
      activities: [
        { option: "Learn Data Structures and Algorithms", happiness: +35, intelligence: +40, strength: -20 },
        { option: "Build a Game or App with Friends", happiness: +40, intelligence: +35, health: -10 },
        { option: "Attend a Hackathon for Kids", happiness: +45, intelligence: +45, health: -15 },
        { option: "Join a Sports Team", happiness: +40, health: +25, strength: +25 },
        { option: "Participate in a School Play", happiness: +35, intelligence: +30 }
      ]
    },
    {
      age: 11,
      activities: [
        { option: "Learn Object-Oriented Programming", happiness: +40, intelligence: +45, strength: -20 },
        { option: "Build a Simple Database", happiness: +45, intelligence: +40, health: -15 },
        { option: "Join a Coding Club or Group", happiness: +50, intelligence: +50, health: -20 },
        { option: "Volunteer Work and Community Service", happiness: +45, intelligence: +35 },
        { option: "Music or Dance Lessons", happiness: +40, intelligence: +30 }
      ]
    },
    {
      age: 12,
      activities: [
        { option: "Learn Web Development Frameworks", happiness: +45, intelligence: +50, strength: -25 },
        { option: "Build a Dynamic Web Application", happiness: +50, intelligence: +45, health: -20 },
        { option: "Attend a Technology Conference", happiness: +55, intelligence: +55, health: -25 },
        { option: "Participate in a School Club or Organization", happiness: +50, intelligence: +40 },
        { option: "Outdoor Adventure Activities", happiness: +45, health: +30, strength: +30 }
      ]
    },
    {
      age: 13,
      activities: [
        { option: "Learn Mobile App Development", happiness: +50, intelligence: +55, strength: -30 },
        { option: "Build a Mobile App", happiness: +55, intelligence: +50, health: -25 },
        { option: "Participate in a Programming Contest", happiness: +60, intelligence: +60, health: -30 },
        { option: "Join a Debate Club or Public Speaking Group", happiness: +55, intelligence: +50 },
        { option: "Creative Writing and Journaling", happiness: +50, intelligence: +45 }
      ]
    },
    {
      age: 14,
      activities: [
        { option: "Learn Database Management", happiness: +55, intelligence: +60, strength: -35 },
        { option: "Build a Data-Driven Application", happiness: +60, intelligence: +55, health: -30 },
        { option: "Attend a Coding Bootcamp", happiness: +65, intelligence: +65, health: -35 },
        { option: "Volunteer at a Tech Organization", happiness: +60, intelligence: +50 },
        { option: "Participate in a School Musical or Play", happiness: +55, intelligence: +45 }
      ]
    },
    {
      age: 15,
      activities: [
        { option: "Learn Computer Networks and Security", happiness: +60, intelligence: +65, strength: -40 },
        { option: "Build a Secure Web Application", happiness: +65, intelligence: +60, health: -35 },
        { option: "Intern at a Tech Company", happiness: +70, intelligence: +70, health: -40 },
        { option: "Join a Robotics or STEM Club", happiness: +65, intelligence: +60 },
        { option: "Participate in a School Sports Team", happiness: +60, health: +40, strength: +40 }
      ]
    },
    {
      age: 16,
      activities: [
        { option: "Learn Cloud Computing and DevOps", happiness: +65, intelligence: +70, strength: -45 },
        { option: "Build a Cloud-Based Application", happiness: +70, intelligence: +65, health: -40 },
        { option: "Attend a Coding Hackathon", happiness: +75, intelligence: +75, health: -45 },
        { option: "Volunteer at a Local Nonprofit Organization", happiness: +70, intelligence: +60 },
        { option: "Participate in a School Leadership Program", happiness: +65, intelligence: +55 }
      ]
    },
    {
      age: 17,
      activities: [
        { option: "Learn Artificial Intelligence and Machine Learning", happiness: +70, intelligence: +75, strength: -50 },
        { option: "Build a Machine Learning Model", happiness: +75, intelligence: +70, health: -45 },
        { option: "Participate in a Tech Startup", happiness: +80, intelligence: +80, health: -50 },
        { option: "Join a Professional Development Organization", happiness: +75, intelligence: +70 },
        { option: "Attend a College Prep Program", happiness: +70, intelligence: +65, strength: -40 }
      ]
    },
    {
      age: 18,
      activities: [
        { option: "Pursue a Computer Science Degree", happiness: +75, intelligence: +80, health: -55 },
        { option: "Build a Large-Scale Web Application", happiness: +80, intelligence: +75, strength: -50 },
        { option: "Attend Tech Conferences and Meetups", happiness: +85, intelligence: +85, health: -60 },
        { option: "Start a Personal Tech Blog or YouTube Channel", happiness: +80, intelligence: +75 },
        { option: "Participate in a Gap Year Program", happiness: +75, intelligence: +70 }
      ]
    },
    {
      age: 19,
      activities: [
        { option: "Learn Software Engineering Best Practices", happiness: +80, intelligence: +85, strength: -60 },
        { option: "Build an Enterprise-Level Application", happiness: +85, intelligence: +80, health: -55 },
        { option: "Intern at a Major Tech Company", happiness: +90, intelligence: +90, health: -65 },
        { option: "Attend Coding Workshops and Meetups", happiness: +85, intelligence: +80 },
        { option: "Participate in Open-Source Projects", happiness: +80, intelligence: +75 }
      ]
    },
    {
      age: 20,
      activities: [
        { option: "Learn Advanced Data Structures and Algorithms", happiness: +85, intelligence: +90, strength: -65 },
        { option: "Build a High-Performance Application", happiness: +90, intelligence: +85, health: -60 },
        { option: "Attend a Coding Bootcamp for Career Changers", happiness: +95, intelligence: +95, health: -70 },
        { option: "Join a Tech Community or Meetup Group", happiness: +90, intelligence: +85 },
        { option: "Mentor or Tutor in Computer Science", happiness: +85, intelligence: +80 }
      ]
    },
    {
      age: 21,
      activities: [
        { option: "Learn Distributed Systems and Microservices", happiness: +90, intelligence: +95, strength: -70 },
        { option: "Build a Scalable and Fault-Tolerant System", happiness: +95, intelligence: +90, health: -65 },
        { option: "Start Your Own Tech Startup", happiness: +100, intelligence: +100, health: -75 },
        { option: "Attend Developer Conferences and Workshops", happiness: +95, intelligence: +90 },
        { option: "Contribute to Open-Source Projects", happiness: +90, intelligence: +85 }
      ]
    },
    {
      age: 22,
      activities: [
        { option: "Learn Cybersecurity and Ethical Hacking", happiness: +95, intelligence: +100, strength: -75 },
        { option: "Build a Secure and Robust System", happiness: +100, intelligence: +95, health: -70 },
        { option: "Join a Tech Community or Open-Source Project", happiness: +105, intelligence: +105, health: -80 },
        { option: "Start a Tech Blog or Podcast", happiness: +100, intelligence: +95 },
        { option: "Mentor Junior Developers", happiness: +95, intelligence: +90 }
      ]
    },
    {
      age: 23,
      activities: [
        { option: "Learn Data Science and Big Data Analytics", happiness: +100, intelligence: +105, strength: -80 },
        { option: "Build a Data-Driven Decision-Making System", happiness: +105, intelligence: +100, health: -75 },
        { option: "Attend Advanced Tech Conferences and Workshops", happiness: +110, intelligence: +110, health: -85 },
        { option: "Participate in Data Science Competitions", happiness: +105, intelligence: +100 },
        { option: "Collaborate on Research Projects", happiness: +100, intelligence: +95 }
      ]
    },
    {
      age: 24,
      activities: [
        { option: "Learn Blockchain and Cryptocurrency Technologies", happiness: +105, intelligence: +110, strength: -85 },
        { option: "Build a Decentralized Application (DApp)", happiness: +110, intelligence: +105, health: -80 },
        { option: "Pursue a Master's Degree in Computer Science", happiness: +115, intelligence: +115, health: -90 },
        { option: "Attend Blockchain and Crypto Conferences", happiness: +110, intelligence: +105 },
        { option: "Contribute to Blockchain Projects", happiness: +105, intelligence: +100 }
      ]
    },
    {
      age: 25,
      activities: [
        { option: "Learn Internet of Things (IoT) and Embedded Systems", happiness: +110, intelligence: +115, strength: -90 },
        { option: "Build an IoT Solution for a Real-World Problem", happiness: +115, intelligence: +110, health: -85 },
        { option: "Start a Tech Consulting Business", happiness: +120, intelligence: +120, health: -95 },
        { option: "Attend IoT and Embedded Systems Conferences", happiness: +115, intelligence: +110 },
        { option: "Mentor or Teach IoT and Embedded Systems", happiness: +110, intelligence: +105 }
      ]
    },
    {
      age: 26,
      activities: [
        { option: "Learn Advanced Software Architecture", happiness: +115, intelligence: +120, strength: -95 },
        { option: "Build a Scalable and Modular Software System", happiness: +120, intelligence: +115, health: -90 },
        { option: "Attend Software Architecture Workshops", happiness: +125, intelligence: +125, health: -100 },
        { option: "Participate in Code Reviews and Quality Assurance", happiness: +120, intelligence: +115 },
        { option: "Mentor Junior Software Architects", happiness: +115, intelligence: +110 }
      ]
    },
    {
      age: 27,
      activities: [
        { option: "Learn Cloud Architecture and DevOps", happiness: +120, intelligence: +125, strength: -100 },
        { option: "Build a Highly Available and Resilient Cloud System", happiness: +125, intelligence: +120, health: -95 },
        { option: "Attend Cloud Computing and DevOps Conferences", happiness: +130, intelligence: +130, health: -105 },
        { option: "Participate in Cloud Migration Projects", happiness: +125, intelligence: +120 },
        { option: "Mentor Cloud Architects and DevOps Engineers", happiness: +120, intelligence: +115 }
      ]
    },
    {
      age: 28,
      activities: [
        { option: "Learn Advanced Machine Learning and AI", happiness: +125, intelligence: +130, strength: -105 },
        { option: "Build an Intelligent and Autonomous System", happiness: +130, intelligence: +125, health: -100 },
        { option: "Attend AI and Machine Learning Conferences", happiness: +135, intelligence: +135, health: -110 },
        { option: "Participate in AI Research Projects", happiness: +130, intelligence: +125 },
        { option: "Mentor Data Scientists and AI Engineers", happiness: +125, intelligence: +120 }
      ]
    },
    {
      age: 29,
      activities: [
        { option: "Learn Quantum Computing and Cryptography", happiness: +130, intelligence: +135, strength: -110 },
        { option: "Build a Quantum Computing System", happiness: +135, intelligence: +130, health: -105 },
        { option: "Attend Quantum Computing Conferences and Workshops", happiness: +140, intelligence: +140, health: -115 },
        { option: "Collaborate on Quantum Computing Research", happiness: +135, intelligence: +130 },
        { option: "Mentor Quantum Computing Researchers and Engineers", happiness: +130, intelligence: +125 }
      ]
    },
    {
      age: 30,
      activities: [
        { option: "Retirement Planning", happiness: +135, intelligence: +130, strength: -115 },
        { option: "Executive Coaching Services", happiness: +140, intelligence: +125, health: -110 },
        { option: "Investment Portfolio Diversification", happiness: +145, intelligence: +130, health: -120 },
        { option: "Family and Parenting Responsibilities", happiness: +140, intelligence: +125 },
        { option: "Continuing Education Pursuits", happiness: +135, intelligence: +125, strength: -105 }
      ]
    },
    {
      age: 31,
      activities: [
        { option: "International Travel and Exploration", happiness: +140, health: +135, strength: +135 },
        { option: "Business Partnership Ventures", happiness: +145, intelligence: +130, health: -125 },
        { option: "Environmental Conservation Efforts", happiness: +150, intelligence: +135, strength: -130 },
        { option: "Civic Engagement and Advocacy", happiness: +145, intelligence: +130 },
        { option: "Holistic Wellness Retreats", happiness: +140, intelligence: +130, health: +120 }
      ]
    },
    {
      age: 32,
      activities: [
        { option: "Strategic Philanthropic Initiatives", happiness: +145, health: +140, strength: +140 },
        { option: "Technology Incubation Projects", happiness: +150, intelligence: +135, health: -130 },
        { option: "Social Impact Investing", happiness: +155, intelligence: +140, strength: -135 },
        { option: "Public Policy Development", happiness: +150, intelligence: +135 },
        { option: "Spiritual and Mindfulness Practices", happiness: +145, intelligence: +135, health: +125 }
      ]
    },
    {
      age: 33,
      activities: [
        { option: "Educational Leadership Roles", happiness: +150, health: +145, strength: +145 },
        { option: "Innovation and Technology Adoption", happiness: +155, intelligence: +140, health: -135 },
        { option: "Global Health Initiatives", happiness: +160, intelligence: +145, strength: -140 },
        { option: "Community Resilience Projects", happiness: +155, intelligence: +140 },
        { option: "Fitness and Wellness Conventions", happiness: +150, intelligence: +140, health: +130 }
      ]
    },
    {
      age: 34,
      activities: [
        { option: "Educational Policy Advocacy", happiness: +155, health: +150, strength: +150 },
        { option: "Technology Start-up Incubators", happiness: +160, intelligence: +145, health: -140 },
        { option: "Humanitarian Relief Efforts", happiness: +165, intelligence: +150, strength: -145 },
        { option: "Environmental Sustainability Projects", happiness: +160, intelligence: +145 },
        { option: "Mindfulness and Meditation Retreats", happiness: +155, intelligence: +145, health: +135 }
      ]
    },
    {
      age: 35,
      activities: [
        { option: "Executive Leadership Development", happiness: +160, health: +155, strength: +155 },
        { option: "Venture Philanthropy Initiatives", happiness: +165, intelligence: +150, health: -145 },
        { option: "Global Social Entrepreneurship", happiness: +170, intelligence: +155, strength: -150 },
        { option: "Political and Diplomatic Engagement", happiness: +165, intelligence: +150 },
        { option: "Health and Wellness Retreats", happiness: +160, intelligence: +150, health: +140 }
      ]
    },
    {
      age: 36,
      activities: [
        { option: "Corporate Social Responsibility Programs", happiness: +165, health: +160, strength: +160 },
        { option: "Advanced Technology Research and Development", happiness: +170, intelligence: +155, health: -150 },
        { option: "Climate Change and Sustainability Initiatives", happiness: +175, intelligence: +160, strength: -155 },
        { option: "Economic Development and Poverty Reduction Efforts", happiness: +170, intelligence: +155 },
        { option: "Personal Growth and Transformation Retreats", happiness: +165, intelligence: +155, health: +145 }
      ]
    },
    {
      age: 37,
      activities: [
        { option: "Strategic Planning and Business Consulting", happiness: +170, health: +165, strength: +165 },
        { option: "Cutting-Edge Scientific Research Projects", happiness: +175, intelligence: +160, health: -155 },
        { option: "Global Education and Literacy Campaigns", happiness: +180, intelligence: +165, strength: -160 },
        { option: "Political and Social Activism", happiness: +175, intelligence: +160 },
        { option: "Holistic Health and Wellness Programs", happiness: +170, intelligence: +160, health: +150 }
      ]
    },
    {
      age: 38,
      activities: [
        { option: "Mergers and Acquisitions Advisory", happiness: +175, health: +170, strength: +170 },
        { option: "Advanced Robotics and Automation Research", happiness: +180, intelligence: +165, health: -160 },
        { option: "International Development and Aid Work", happiness: +185, intelligence: +170, strength: -165 },
        { option: "Think Tank and Policy Research Initiatives", happiness: +180, intelligence: +165 },
        { option: "Mindfulness and Meditation Teacher Training", happiness: +175, intelligence: +165, health: +155 }
      ]
    },
    {
      age: 39,
      activities: [
        { option: "Venture Capital and Investment Banking", happiness: +180, health: +175, strength: +175 },
        { option: "Advanced Aerospace and Space Exploration Research", happiness: +185, intelligence: +170, health: -165 },
        { option: "Global Health and Disease Prevention Programs", happiness: +190, intelligence: +175, strength: -170 },
        { option: "International Human Rights Advocacy", happiness: +185, intelligence: +170 },
        { option: "Personal Branding and Influence Coaching", happiness: +180, intelligence: +170, health: +160 }
      ]
    },
    {
      age: 40,
      activities: [
        { option: "Legacy Planning and Wealth Management", happiness: +185, health: +180, strength: +180 },
        { option: "Cutting-Edge Energy and Sustainability Research", happiness: +190, intelligence: +175, health: -170 },
        { option: "Global Peace and Conflict Resolution Initiatives", happiness: +195, intelligence: +180, strength: -175 },
        { option: "Public Speaking and Thought Leadership", happiness: +190, intelligence: +175 },
        { option: "Holistic Wellness and Personal Growth Retreats", happiness: +185, intelligence: +175, health: +165 }
      ]
    },
    {
      age: 41,
      activities: [
        { option: "Philanthropic Foundation Management", happiness: +190, health: +185, strength: +185 },
        { option: "Advanced Materials Science and Nanotechnology Research", happiness: +195, intelligence: +180, health: -175 },
        { option: "Global Education and Skills Development Initiatives", happiness: +200, intelligence: +185, strength: -180 },
        { option: "Political and Social Commentary", happiness: +195, intelligence: +180 },
        { option: "Life Coaching and Personal Development Programs", happiness: +190, intelligence: +180, health: +170 }
      ]
    },
    {
      age: 42,
      activities: [
        { option: "Corporate Board Directorship", happiness: +195, health: +190, strength: +190 },
        { option: "Cutting-Edge Biotechnology and Genetic Engineering Research", happiness: +200, intelligence: +185, health: -180 },
        { option: "Global Poverty Alleviation and Economic Development Programs", happiness: +205, intelligence: +190, strength: -185 },
        { option: "Political and Social Movement Leadership", happiness: +200, intelligence: +185 },
        { option: "Executive Coaching and Leadership Development", happiness: +195, intelligence: +185, health: +175 }
      ]
    },
    {
      age: 43,
      activities: [
        { option: "Strategic Business Consulting and Advisory", happiness: +200, health: +195, strength: +195 },
        { option: "Advanced Artificial Intelligence and Robotics Research", happiness: +205, intelligence: +190, health: -185 },
        { option: "Global Environmental Protection and Conservation Efforts", happiness: +210, intelligence: +195, strength: -190 },
        { option: "Public Speaking and Thought Leadership Tours", happiness: +205, intelligence: +190 },
        { option: "Holistic Health and Wellness Coaching", happiness: +200, intelligence: +190, health: +180 }
      ]
    },
    {
      age: 44,
      activities: [
        { option: "Venture Capital and Private Equity Investing", happiness: +205, health: +200, strength: +200 },
        { option: "Advanced Energy and Sustainable Development Research", happiness: +210, intelligence: +195, health: -190 },
        { option: "Global Human Rights and Social Justice Advocacy", happiness: +215, intelligence: +200, strength: -195 },
        { option: "Political and Social Commentary Publishing", happiness: +210, intelligence: +195 },
        { option: "Mindfulness and Meditation Teacher Training Programs", happiness: +205, intelligence: +195, health: +185 }
      ]
    },
    {
      age: 45,
      activities: [
        { option: "Entrepreneurial Mentorship and Coaching", happiness: +210, health: +205, strength: +205 },
        { option: "Advanced Space Exploration and Astronomy Research", happiness: +215, intelligence: +200, health: -195 },
        { option: "Global Health and Medical Research Initiatives", happiness: +220, intelligence: +205, strength: -200 },
        { option: "Political and Social Activism Campaigns", happiness: +215, intelligence: +200 },
        { option: "Personal Growth and Transformation Retreats", happiness: +210, intelligence: +200, health: +190 }
      ]
    },
    {
      age: 46,
      activities: [
        { option: "Corporate Turnaround and Restructuring Advisory", happiness: +215, health: +210, strength: +210 },
        { option: "Advanced Quantum Computing and Cryptography Research", happiness: +220, intelligence: +205, health: -200 },
        { option: "Global Education and Literacy Initiatives", happiness: +225, intelligence: +210, strength: -205 },
        { option: "Political and Social Commentary Media Appearances", happiness: +220, intelligence: +205 },
        { option: "Holistic Health and Wellness Coaching Certification Programs", happiness: +215, intelligence: +205, health: +195 }
      ]
    },
    {
      age: 47,
      activities: [
        { option: "Venture Philanthropy and Impact Investing", happiness: +220, health: +215, strength: +215 },
        { option: "Advanced Materials Science and Nanotechnology Research", happiness: +225, intelligence: +210, health: -205 },
        { option: "Global Environmental Protection and Sustainability Initiatives", happiness: +230, intelligence: +215, strength: -210 },
        { option: "Political and Social Movement Leadership Roles", happiness: +225, intelligence: +210 },
        { option: "Personal Growth and Transformation Coaching", happiness: +220, intelligence: +210, health: +200 }
      ]
    },
    {
      age: 48,
      activities: [
        { option: "Strategic Business and Industry Consulting", happiness: +225, health: +220, strength: +220 },
        { option: "Advanced Biotechnology and Genetic Engineering Research", happiness: +230, intelligence: +215, health: -210 },
        { option: "Global Poverty Alleviation and Economic Development Programs", happiness: +235, intelligence: +220, strength: -215 },
        { option: "Political and Social Commentary Publishing and Interviews", happiness: +230, intelligence: +215 },
        { option: "Holistic Health and Wellness Retreats and Workshops", happiness: +225, intelligence: +215, health: +205 }
      ]
    },
    {
      age: 49,
      activities: [
        { option: "Corporate Board Directorship and Executive Advisory", happiness: +230, health: +225, strength: +225 },
        { option: "Advanced Artificial Intelligence and Robotics Research", happiness: +235, intelligence: +220, health: -215 },
        { option: "Global Environmental Protection and Conservation Efforts", happiness: +240, intelligence: +225, strength: -220 },
        { option: "Political and Social Activism Campaigns and Advocacy", happiness: +235, intelligence: +220 },
        { option: "Mindfulness and Meditation Teacher Certification Programs", happiness: +230, intelligence: +220, health: +210 }
      ]
    },
    {
      age: 50,
      activities: [
        { option: "Legacy and Wealth Management Planning", happiness: +235, health: +230, strength: +230 },
        { option: "Advanced Energy and Sustainable Development Research", happiness: +240, intelligence: +225, health: -220 },
        { option: "Global Human Rights and Social Justice Advocacy", happiness: +245, intelligence: +230, strength: -225 },
        { option: "Political and Social Commentary Media Appearances and Publishing", happiness: +240, intelligence: +225 },
        { option: "Personal Growth and Transformation Coaching Certification Programs", happiness: +235, intelligence: +225, health: +215 }
      ]
    },
    {
      age: 51,
      activities: [
        { option: "Philanthropic Foundation Management", happiness: +240, health: +235, strength: +235 },
        { option: "Advanced Space Exploration and Astronomy Research", happiness: +245, intelligence: +230, health: -225 },
        { option: "Global Health and Medical Research Initiatives", happiness: +250, intelligence: +235, strength: -230 },
        { option: "Political and Social Commentary Media Appearances and Publishing", happiness: +245, intelligence: +230 },
        { option: "Life Coaching and Personal Growth Mentorship Programs", happiness: +240, intelligence: +230, health: +220 }
      ]
    },
    {
      age: 52,
      activities: [
        { option: "Corporate Turnaround and Restructuring Advisory", happiness: +245, health: +240, strength: +240 },
        { option: "Advanced Quantum Computing and Cryptography Research", happiness: +250, intelligence: +235, health: -230 },
        { option: "Global Education and Literacy Initiatives", happiness: +255, intelligence: +240, strength: -235 },
        { option: "Political and Social Movement Leadership Roles", happiness: +250, intelligence: +235 },
        { option: "Holistic Health and Wellness Coaching Certification Programs", happiness: +245, intelligence: +235, health: +225 }
      ]
    },
    {
      age: 53,
      activities: [
        { option: "Venture Philanthropy and Impact Investing", happiness: +250, health: +245, strength: +245 },
        { option: "Advanced Materials Science and Nanotechnology Research", happiness: +255, intelligence: +240, health: -235 },
        { option: "Global Environmental Protection and Sustainability Initiatives", happiness: +260, intelligence: +245, strength: -240 },
        { option: "Political and Social Commentary Publishing and Interviews", happiness: +255, intelligence: +240 },
        { option: "Personal Growth and Transformation Coaching", happiness: +250, intelligence: +240, health: +230 }
      ]
    },
    {
      age: 54,
      activities: [
        { option: "Strategic Business and Industry Consulting", happiness: +255, health: +250, strength: +250 },
        { option: "Advanced Biotechnology and Genetic Engineering Research", happiness: +260, intelligence: +245, health: -240 },
        { option: "Global Poverty Alleviation and Economic Development Programs", happiness: +265, intelligence: +250, strength: -245 },
        { option: "Political and Social Activism Campaigns and Advocacy", happiness: +260, intelligence: +245 },
        { option: "Holistic Health and Wellness Retreats and Workshops", happiness: +255, intelligence: +245, health: +235 }
      ]
    },
    {
      age: 55,
      activities: [
        { option: "Corporate Board Directorship and Executive Advisory", happiness: +260, health: +255, strength: +255 },
        { option: "Advanced Artificial Intelligence and Robotics Research", happiness: +265, intelligence: +250, health: -245 },
        { option: "Global Human Rights and Social Justice Advocacy", happiness: +270, intelligence: +255, strength: -250 },
        { option: "Political and Social Commentary Media Appearances and Publishing", happiness: +265, intelligence: +250 },
        { option: "Mindfulness and Meditation Teacher Certification Programs", happiness: +260, intelligence: +250, health: +240 }
      ]
    },
    {
      age: 56,
      activities: [
        { option: "Legacy and Wealth Management Planning", happiness: +265, health: +260, strength: +260 },
        { option: "Advanced Energy and Sustainable Development Research", happiness: +270, intelligence: +255, health: -250 },
        { option: "Global Environmental Protection and Conservation Efforts", happiness: +275, intelligence: +260, strength: -255 },
        { option: "Political and Social Activism Campaigns and Advocacy", happiness: +270, intelligence: +255 },
        { option: "Personal Growth and Transformation Coaching Certification Programs", happiness: +265, intelligence: +255, health: +245 }
      ]
    },
    {
      age: 57,
      activities: [
        { option: "Philanthropic Foundation Management", happiness: +270, health: +265, strength: +265 },
        { option: "Advanced Space Exploration and Astronomy Research", happiness: +275, intelligence: +260, health: -255 },
        { option: "Global Health and Medical Research Initiatives", happiness: +280, intelligence: +265, strength: -260 },
        { option: "Political and Social Commentary Media Appearances and Publishing", happiness: +275, intelligence: +260 },
        { option: "Life Coaching and Personal Growth Mentorship Programs", happiness: +270, intelligence: +260, health: +250 }
      ]
    },
    {
      age: 58,
      activities: [
        { option: "Corporate Turnaround and Restructuring Advisory", happiness: +275, health: +270, strength: +270 },
        { option: "Advanced Quantum Computing and Cryptography Research", happiness: +280, intelligence: +265, health: -260 },
        { option: "Global Education and Literacy Initiatives", happiness: +285, intelligence: +270, strength: -265 },
        { option: "Political and Social Movement Leadership Roles", happiness: +280, intelligence: +265 },
        { option: "Holistic Health and Wellness Coaching Certification Programs", happiness: +275, intelligence: +265, health: +255 }
      ]
    },
    {
      age: 59,
      activities: [
        { option: "Venture Philanthropy and Impact Investing", happiness: +280, health: +275, strength: +275 },
        { option: "Advanced Materials Science and Nanotechnology Research", happiness: +285, intelligence: +270, health: -265 },
        { option: "Global Poverty Alleviation and Economic Development Programs", happiness: +290, intelligence: +275, strength: -270 },
        { option: "Political and Social Commentary Publishing and Interviews", happiness: +285, intelligence: +270 },
        { option: "Personal Growth and Transformation Coaching", happiness: +280, intelligence: +270, health: +260 }
      ]
    },
    {
      age: 60,
      activities: [
        { option: "Strategic Business and Industry Consulting", happiness: +285, health: +280, strength: +280 },
        { option: "Advanced Biotechnology and Genetic Engineering Research", happiness: +290, intelligence: +275, health: -270 },
        { option: "Global Environmental Protection and Sustainability Initiatives", happiness: +295, intelligence: +280, strength: -275 },
        { option: "Political and Social Activism Campaigns and Advocacy", happiness: +290, intelligence: +275 },
        { option: "Holistic Health and Wellness Retreats and Workshops", happiness: +285, intelligence: +275, health: +265 }
      ]
    },
    { 
      age: 61, 
      activities: [
        { option: "Mentoring Young Entrepreneurs", happiness: +295, intelligence: +290 },
        { option: "Deepening Spiritual Practices", happiness: +300, intelligence: +295, health: +290 },
        { option: "Supporting Refugee Assistance Programs", happiness: +295, intelligence: +290 },
        { option: "Joining a Book Club", happiness: +290, intelligence: +285 }
      ]
    },
    { 
      age: 62, 
      activities: [
        { option: "Exploring Creative Writing Workshops", happiness: +295, intelligence: +290 },
        { option: "Leading Wilderness Conservation Expeditions", happiness: +300, intelligence: +295 },
        { option: "Intensive Mind-Body Healing Retreats", happiness: +305, intelligence: +300, health: +295 },
        { option: "Establishing Community Gardens", happiness: +300, intelligence: +295 },
      ]
    },
    { 
      age: 63, 
      activities: [
        { option: "Starting a Podcast on Personal Growth", happiness: +300, intelligence: +295 },
        { option: "Practicing Advanced Meditation Techniques", happiness: +310, intelligence: +305, health: +300 },
        { option: "Investing in Renewable Energy Initiatives", happiness: +305, intelligence: +300 },
        { option: "Joining a Community Choir", happiness: +300, intelligence: +295 }
      ]
    },
    { 
      age: 64, 
      activities: [
        { option: "Creating an Online Learning Platform", happiness: +305, intelligence: +300 },
        { option: "Supporting Indigenous Peoples' Rights", happiness: +310, intelligence: +305 },
        { option: "Funding Scientific Research for Disease Cure", happiness: +310, intelligence: +305 },
        { option: "Exploring Amateur Astronomy", happiness: +305, intelligence: +300 }
      ]
    },
    { 
      age: 65, 
      activities: [
        { option: "Becoming a Life Coach for Seniors", happiness: +310, intelligence: +305 },
        { option: "Promoting Gender Equality in the Workplace", happiness: +315, intelligence: +310 },
        { option: "Endowing Research Chairs at Universities", happiness: +315, intelligence: +310 },
        { option: "Joining a Philosophy Discussion Group", happiness: +310, intelligence: +305 }
      ]
    },
    { 
      age: 66, 
      activities: [
        { option: "Supporting Global Health Initiatives", happiness: +320, intelligence: +315 },
        { option: "Holistic Healing Retreats in Nature", happiness: +325, intelligence: +320, health: +315 },
        { option: "Establishing Scholarships for Adult Learners", happiness: +320, intelligence: +315 },
        { option: "Exploring Tai Chi and Qi Gong", happiness: +315, intelligence: +310 }
      ]
    },
    { 
      age: 67, 
      activities: [
        { option: "Volunteering for Disaster Relief Organizations", happiness: +320, intelligence: +315 },
        { option: "Advocating for Sustainable Agriculture", happiness: +325, intelligence: +320 },
        { option: "Wellness Retreats Focused on Mind-Body Integration", happiness: +330, intelligence: +325, health: +320 },
        { option: "Supporting Space Exploration Projects", happiness: +325, intelligence: +320 },
      ]
    },
    { 
      age: 68, 
      activities: [
        { option: "Organizing Community Health Fairs", happiness: +325, intelligence: +320 },
        { option: "Investing in Sustainable Energy Startups", happiness: +330, intelligence: +325 },
        { option: "Mindfulness Retreats in Secluded Natural Settings", happiness: +335, intelligence: +330, health: +325 },
        { option: "Establishing Endowed Chairs in Environmental Studies", happiness: +330, intelligence: +325 },
      ]
    },
    { 
      age: 69, 
      activities: [
        { option: "Supporting Mental Health Awareness Campaigns", happiness: +330, intelligence: +325 },
        { option: "Retreats for Holistic Well-Being and Renewal", happiness: +340, intelligence: +335, health: +330 },
        { option: "Funding Scholarships for Indigenous Students", happiness: +335, intelligence: +330 },
        { option: "Joining a Wine Appreciation Society", happiness: +330, intelligence: +325 }
      ]
    },
    { 
      age: 70, 
      activities: [
        { option: "Launching a Social Enterprise for Seniors", happiness: +335, intelligence: +330 },
        { option: "Retreats for Inner Transformation and Awakening", happiness: +345, intelligence: +340, health: +335 },
        { option: "Endowing Research Centers for Age-Related Diseases", happiness: +340, intelligence: +335 },
        { option: "Exploring Pottery and Sculpture Classes", happiness: +335, intelligence: +330 }
      ]
    },
    {
      age: 71,
      activities: [
        { option: "Traveling and Exploring New Destinations", happiness: +80, health: +70, strength: +70 },
        { option: "Spending Quality Time with Family and Friends", happiness: +90, intelligence: +60 },
        { option: "Pursuing Hobbies and Personal Interests", happiness: +85, intelligence: +65, health: +75 },
        { option: "Volunteering and Community Service", happiness: +80, intelligence: +70 },
        { option: "Taking Up a New Sport or Physical Activity", happiness: +75, health: +80, strength: +80 }
      ]
    },
    {
      age: 72,
      activities: [
        { option: "Attending Cultural Events and Performances", happiness: +85, intelligence: +75 },
        { option: "Joining Social Clubs or Interest Groups", happiness: +80, intelligence: +70, health: +65 },
        { option: "Gardening and Outdoor Pursuits", happiness: +90, health: +85, strength: +75 },
        { option: "Taking Educational Courses or Classes", happiness: +75, intelligence: +80 },
        { option: "Practicing Mindfulness and Meditation", happiness: +80, intelligence: +70, health: +75 }
      ]
    },
    {
      age: 73,
      activities: [
        { option: "Planning and Hosting Family Gatherings", happiness: +85, intelligence: +65 },
        { option: "Participating in Recreational Sports Leagues", happiness: +80, health: +80, strength: +85 },
        { option: "Engaging in Creative Pursuits (e.g., Painting, Writing)", happiness: +90, intelligence: +75 },
        { option: "Attending Wellness Retreats or Spa Getaways", happiness: +85, health: +90, strength: +70 },
        { option: "Mentoring or Coaching Younger Generations", happiness: +75, intelligence: +80 }
      ]
    },
    {
      age: 74,
      activities: [
        { option: "Taking Up a New Hobby or Craft", happiness: +80, intelligence: +70, health: +65 },
        { option: "Joining a Book Club or Reading Group", happiness: +75, intelligence: +80 },
        { option: "Participating in Outdoor Activities (e.g., Hiking, Fishing)", happiness: +85, health: +90, strength: +80 },
        { option: "Attending Cooking Classes or Culinary Workshops", happiness: +80, intelligence: +75 },
        { option: "Volunteering at Local Schools or Organizations", happiness: +75, intelligence: +70 }
      ]
    },
    {
      age: 75,
      activities: [
        { option: "Exploring Local History and Cultural Sites", happiness: +80, intelligence: +80 },
        { option: "Joining a Dance or Exercise Class", happiness: +85, health: +85, strength: +75 },
        { option: "Planning and Taking Extended Vacations", happiness: +90, intelligence: +70 },
        { option: "Attending Lectures or Seminars on Various Topics", happiness: +75, intelligence: +85 },
        { option: "Participating in Community Theater or Music Groups", happiness: +80, intelligence: +75, health: +70 }
      ]
    },
    {
      age: 76,
      activities: [
        { option: "Visiting Museums and Art Galleries", happiness: +85, intelligence: +80 },
        { option: "Joining a Walking or Hiking Club", happiness: +80, health: +90, strength: +80 },
        { option: "Learning a New Language or Skill", happiness: +75, intelligence: +85 },
        { option: "Attending Concerts or Live Performances", happiness: +90, intelligence: +75 },
        { option: "Participating in Intergenerational Activities", happiness: +80, intelligence: +70, health: +75 }
      ]
    },
    {
      age: 77,
      activities: [
        { option: "Exploring New Cuisines and Cooking Classes", happiness: +85, intelligence: +75 },
        { option: "Joining a Yoga or Meditation Group", happiness: +80, health: +85, strength: +70 },
        { option: "Attending Lectures or Seminars on Health and Wellness", happiness: +75, intelligence: +80, health: +80 },
        { option: "Participating in Local Community Events", happiness: +85, intelligence: +70 },
        { option: "Taking Up Gardening or Landscaping", happiness: +80, health: +75, strength: +80 }
      ]
    },
    {
      age: 78,
      activities: [
        { option: "Traveling to Visit Family and Friends", happiness: +90, intelligence: +65 },
        { option: "Joining a Book Club or Writing Group", happiness: +80, intelligence: +85 },
        { option: "Participating in Low-Impact Sports or Fitness Activities", happiness: +85, health: +80, strength: +75 },
        { option: "Attending Cultural Festivals or Celebrations", happiness: +90, intelligence: +75 },
        { option: "Volunteering at Local Animal Shelters or Organizations", happiness: +80, intelligence: +70, health: +75 }
      ]
    },
    {
      age: 79,
      activities: [
        { option: "Exploring Local Parks and Nature Preserves", happiness: +85, health: +90, strength: +80 },
        { option: "Joining a Bridge or Chess Club", happiness: +80, intelligence: +85 },
        { option: "Attending Workshops or Classes on Personal Growth", happiness: +75, intelligence: +80, health: +75 },
        { option: "Participating in Intergenerational Mentoring Programs", happiness: +85, intelligence: +75 },
        { option: "Taking Up a New Creative Hobby (e.g., Woodworking, Pottery)", happiness: +80, intelligence: +70, strength: +75 }
      ]
    },
    {
      age: 80,
      activities: [
        { option: "Spending Time with Grandchildren and Great-Grandchildren", happiness: +95, intelligence: +70 },
        { option: "Joining a Recreational Sports League", happiness: +85, health: +80, strength: +85 },
        { option: "Attending Lectures or Seminars on History or Culture", happiness: +80, intelligence: +90 },
        { option: "Participating in Local Community Service Projects", happiness: +90, intelligence: +75, health: +70 },
        { option: "Exploring New Hobbies or Crafts (e.g., Knitting, Woodcarving)", happiness: +85, intelligence: +80, strength: +75 }
      ]
    },
    {
      age: 81,
      activities: [
        { option: "Joining a Senior Social Club or Community Group", happiness: +80, intelligence: +70, health: +65 },
        { option: "Attending Fitness Classes or Exercise Programs for Seniors", happiness: +75, health: +85, strength: +80 },
        { option: "Participating in Reminiscence Activities or Life Story Writing", happiness: +85, intelligence: +80 },
        { option: "Volunteering at Local Schools or Libraries", happiness: +80, intelligence: +75 },
        { option: "Exploring New Hobbies or Crafts (e.g., Quilting, Model Building)", happiness: +90, intelligence: +70, strength: +65 }
      ]
    },
    {
      age: 82,
      activities: [
        { option: "Joining a Book Club or Literary Discussion Group", happiness: +85, intelligence: +85 },
        { option: "Participating in Low-Impact Water Activities or Swimming", happiness: +80, health: +90, strength: +75 },
        { option: "Attending Lectures or Seminars on Personal Growth and Well-being", happiness: +75, intelligence: +80, health: +70 },
        { option: "Volunteering at Local Community Centers or Senior Centers", happiness: +85, intelligence: +70 },
        { option: "Taking Up Gardening or Indoor Plant Care", happiness: +90, health: +75, strength: +80 }
      ]
    },
    {
      age: 83,
      activities: [
        { option: "Joining a Walking or Nature Appreciation Group", happiness: +80, health: +85, strength: +90 },
        { option: "Attending Art Classes or Creative Workshops", happiness: +85, intelligence: +80 },
        { option: "Participating in Intergenerational Activities or Mentoring Programs", happiness: +90, intelligence: +75, health: +70 },
        { option: "Volunteering at Local Museums or Historical Societies", happiness: +80, intelligence: +85 },
        { option: "Exploring New Cuisines or Taking Cooking Classes", happiness: +85, intelligence: +70, strength: +75 }
      ]
    },
    {
      age: 84,
      activities: [
        { option: "Joining a Senior Travel Club or Group", happiness: +90, intelligence: +70, health: +65 },
        { option: "Attending Chair Yoga or Gentle Stretching Classes", happiness: +80, health: +90, strength: +80 },
        { option: "Participating in Reminiscence Therapy or Life Review Activities", happiness: +85, intelligence: +85 },
        { option: "Volunteering at Local Animal Shelters or Wildlife Sanctuaries", happiness: +75, intelligence: +80, health: +70 },
        { option: "Taking Up a New Hobby or Craft (e.g., Jewelry Making, Calligraphy)", happiness: +90, intelligence: +75, strength: +65 }
      ]
    },
    {
      age: 85,
      activities: [
        { option: "Joining a Senior Dance or Social Club", happiness: +85, health: +80, strength: +85 },
        { option: "Attending Educational Seminars or Lectures on Various Topics", happiness: +80, intelligence: +90 },
        { option: "Participating in Guided Meditation or Mindfulness Practices", happiness: +90, intelligence: +75, health: +85 },
        { option: "Volunteering at Local Hospitals or Healthcare Facilities", happiness: +80, intelligence: +70 },
        { option: "Exploring New Hobbies or Crafts (e.g., Painting, Woodworking)", happiness: +85, intelligence: +80, strength: +75 }
      ]
    },
    {
      age: 86,
      activities: [
        { option: "Joining a Senior Book Club or Literary Group", happiness: +90, intelligence: +85 },
        { option: "Participating in Low-Impact Fitness Classes or Tai Chi", happiness: +85, health: +90, strength: +80 },
        { option: "Attending Lectures or Seminars on Personal Growth and Spirituality", happiness: +80, intelligence: +85, health: +75 },
        { option: "Volunteering at Local Community Gardens or Urban Farms", happiness: +85, intelligence: +80 },
        { option: "Taking Up a New Hobby or Craft (e.g., Knitting, Pottery)", happiness: +90, intelligence: +75, strength: +70 }
      ]
    },
    {
      age: 87,
      activities: [
        { option: "Joining a Senior Walking or Hiking Group", happiness: +85, health: +95, strength: +90 },
        { option: "Attending Art Appreciation Classes or Museum Tours", happiness: +90, intelligence: +85 },
        { option: "Participating in Intergenerational Storytelling or Reading Activities", happiness: +85, intelligence: +80, health: +75 },
        { option: "Volunteering at Local Schools or Tutoring Programs", happiness: +80, intelligence: +90 },
        { option: "Exploring New Hobbies or Crafts (e.g., Scrapbooking, Woodcarving)", happiness: +85, intelligence: +75, strength: +80 }
      ]
    },
    {
      age: 88,
      activities: [
        { option: "Joining a Senior Travel Club or Group", happiness: +90, intelligence: +70, health: +65 },
        { option: "Attending Chair Yoga or Gentle Stretching Classes", happiness: +80, health: +90, strength: +85 },
        { option: "Participating in Reminiscence Therapy or Life Review Activities", happiness: +85, intelligence: +85 },
        { option: "Volunteering at Local Animal Shelters or Wildlife Sanctuaries", happiness: +75, intelligence: +80, health: +70 },
        { option: "Taking Up a New Hobby or Craft (e.g., Jewelry Making, Calligraphy)", happiness: +90, intelligence: +75, strength: +65 }
      ]
    },
    {
      age: 89,
      activities: [
        { option: "Joining a Senior Dance or Social Club", happiness: +85, health: +80, strength: +90 },
        { option: "Attending Educational Seminars or Lectures on Various Topics", happiness: +80, intelligence: +90 },
        { option: "Participating in Guided Meditation or Mindfulness Practices", happiness: +90, intelligence: +75, health: +85 },
        { option: "Volunteering at Local Hospitals or Healthcare Facilities", happiness: +80, intelligence: +70 },
        { option: "Exploring New Hobbies or Crafts (e.g., Painting, Woodworking)", happiness: +85, intelligence: +80, strength: +75 }
      ]
    },
    {
      age: 90,
      activities: [
        { option: "Joining a Senior Book Club or Literary Group", happiness: +90, intelligence: +85 },
        { option: "Participating in Low-Impact Fitness Classes or Tai Chi", happiness: +85, health: +90, strength: +85 },
        { option: "Attending Lectures or Seminars on Personal Growth and Spirituality", happiness: +80, intelligence: +85, health: +75 },
        { option: "Volunteering at Local Community Gardens or Urban Farms", happiness: +85, intelligence: +80 },
        { option: "Taking Up a New Hobby or Craft (e.g., Knitting, Pottery)", happiness: +90, intelligence: +75, strength: +70 }
      ]
    },
    { 
      age: 90, 
      activities: [
        { option: "Establishing a Foundation for Senior Empowerment", happiness: +435, intelligence: +430 },
        { option: "Investing in Sustainable Energy Solutions for Seniors", happiness: +440, intelligence: +435 },
        { option: "Take a rest", happiness: +360, health: +600 },
        { option: "Endowing Research Institutes for Aging and Longevity", happiness: +440, intelligence: +435 },
        { option: "Exploring Sculpture and Woodworking Classes", happiness: +435, intelligence: +430 }
      ]
    },
    { 
      age: 91, 
      activities: [
        { option: "Taking a Leisurely Stroll in the Park", happiness: +30, intelligence: +15 },
        { option: "Enjoying a Relaxing Afternoon Tea", happiness: +35, intelligence: +20 },
        { option: "Listening to Classical Music in a Quiet Room", happiness: +40, intelligence: +25 },
        { option: "Reading a Favorite Book by the Fireplace", happiness: +35, intelligence: +20 },
        { option: "Meditating in a Peaceful Garden Setting", happiness: +45, intelligence: +30 }
      ]
    },
    { 
      age: 92, 
      activities: [
        { option: "Taking a Warm Bath with Aromatherapy Oils", happiness: +35, intelligence: +20 },
        { option: "Watching a Calming Nature Documentary", happiness: +40, intelligence: +25 },
        { option: "Having a Quiet Picnic in the Countryside", happiness: +45, intelligence: +30 },
        { option: "Writing in a Personal Journal or Diary", happiness: +40, intelligence: +25 },
        { option: "Practicing Gentle Yoga or Stretching Exercises", happiness: +50, intelligence: +35 }
      ]
    },
    { 
      age: 93, 
      activities: [
        { option: "Listening to Soothing Sounds of Nature", happiness: +40, intelligence: +25 },
        { option: "Enjoying a Tranquil Sunset by the Beach", happiness: +45, intelligence: +30 },
        { option: "Sipping Herbal Tea in a Cozy Corner", happiness: +50, intelligence: +35 },
        { option: "Doing a Relaxing Puzzle or Sudoku", happiness: +45, intelligence: +30 },
        { option: "Gazing at the Stars on a Clear Night", happiness: +55, intelligence: +40 }
      ]
    },
    { 
      age: 94, 
      activities: [
        { option: "Taking a Leisurely Drive in the Countryside", happiness: +45, intelligence: +30 },
        { option: "Attending a Gentle Tai Chi or Qi Gong Class", happiness: +50, intelligence: +35 },
        { option: "Painting or Sketching in a Peaceful Studio", happiness: +55, intelligence: +40 },
        { option: "Enjoying a Relaxing Massage Session", happiness: +50, intelligence: +35 },
        { option: "Watching a Classic Movie Marathon at Home", happiness: +60, intelligence: +45 }
      ]
    },
    { 
      age: 95, 
      activities: [
        { option: "Taking a Day Trip to a Scenic Countryside", happiness: +50, intelligence: +35 },
        { option: "Listening to Guided Meditation or Relaxation Tapes", happiness: +55, intelligence: +40 },
        { option: "Enjoying a Slow-paced Nature Photography Walk", happiness: +60, intelligence: +45 },
        { option: "Having a Spa Day with Facials and Manicures", happiness: +55, intelligence: +40 },
        { option: "Having a Leisurely Picnic in a Botanical Garden", happiness: +65, intelligence: +50 }
      ]
    },
    { 
      age: 96, 
      activities: [
        { option: "Taking a Relaxing Boat Ride on a Lake", happiness: +55, intelligence: +40 },
        { option: "Attending a Gentle Chair Yoga Session", happiness: +60, intelligence: +45 },
        { option: "Indulging in a Gourmet Cooking Class", happiness: +60, intelligence: +45 },
        { option: "Having a Cozy Indoor Movie Night with Friends", happiness: +70, intelligence: +55 }
      ]
    },
    { 
      age: 97, 
      activities: [
        { option: "Taking a Scenic Train Journey Through the Countryside", happiness: +60, intelligence: +45 },
        { option: "Listening to Relaxing Spa Music at Home", happiness: +65, intelligence: +50 },
        { option: "Attending a Guided Relaxation and Breathing Workshop", happiness: +70, intelligence: +55 },
        { option: "Enjoying a Day of Pampering at a Luxury Spa", happiness: +65, intelligence: +50 },
        { option: "Having a Peaceful Picnic by a Serene Lake", happiness: +75, intelligence: +60 }
      ]
    },
    { 
      age: 98, 
      activities: [
        { option: "Taking a Slow Cruise Along a Scenic River", happiness: +65, intelligence: +50 },
        { option: "Participating in a Restorative Yoga Retreat", happiness: +70, intelligence: +55 },
        { option: "Engaging in Guided Visualization Meditation", happiness: +75, intelligence: +60 },
        { option: "Indulging in a Fine Dining Experience with Loved Ones", happiness: +70, intelligence: +55 },
        { option: "Having a Relaxing Day at a Hot Springs Resort", happiness: +80, intelligence: +65 }
      ]
    },
    { 
      age: 99, 
      activities: [
        { option: "Taking a Relaxing Hot Air Balloon Ride", happiness: +70, intelligence: +55 },
        { option: "Practicing Mindfulness Meditation in Nature", happiness: +75, intelligence: +60 },
        { option: "Enjoying a Quiet Day of Fishing by the River", happiness: +80, intelligence: +65 },
        { option: "Indulging in a Leisurely Wine Tasting Tour", happiness: +75, intelligence: +60 },
        { option: "Having a Tranquil Picnic in a Secluded Forest", happiness: +85, intelligence: +70 }
      ]
    },
    { 
      age: 100, 
      activities: [
        { option: "Taking a Relaxing Helicopter Tour of Scenic Landscapes", happiness: +75, intelligence: +60 },
        { option: "Practicing Gratitude Meditation in a Peaceful Garden", happiness: +80, intelligence: +65 },
        { option: "Enjoying a Gentle Horseback Riding Adventure", happiness: +85, intelligence: +70 },
        { option: "Indulging in a Relaxing Spa Retreat Weekend", happiness: +80, intelligence: +65 },
        { option: "Having a Tranquil Picnic in a Picturesque Meadow", happiness: +90, intelligence: +75 }
      ]
    },
  ]
};
