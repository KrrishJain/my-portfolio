// data/projects.js
export const projectDetails = [
  {
    id: 1,
    title: 'GameHubStation',
    description:
      'A platform where users can discover and book gaming cafes nearby, view available games, and connect with fellow gamers.',
    image: '/templateImage.png',
    link: '/work/1',
    github: 'https://github.com/krisshJain/gamehubstation',
    overview:
      'GameHubStation makes offline gaming more accessible by letting users find and book gaming cafes easily. It includes a user-friendly interface, booking logic based on hours, and cafe management for owners. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    role: 'Led the backend development including booking logic, user auth, and integrating MongoDB with proper schema design. Also managed route protection and handled user sessions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    challenges:
      'Designing an intuitive slot booking logic considering hourly constraints and preventing overlaps. Implementing secure and scalable API endpoints. Lorem ipsum dolor sit amet, consectetur.',
    takeaways:
      'Understood the complexities of real-time booking systems and refined MongoDB schema design and backend error handling. Lorem ipsum dolor sit amet.'
  },
  {
    id: 2,
    title: 'SkillHub',
    description:
      'A portal for students to practice aptitude, solve coding questions, and track performance for placement readiness.',
    image: '/templateImage.png',
    link: '/work/2',
    github: 'https://github.com/krisshJain/skillhub',
    overview:
      'SkillHub is a preparation platform that helps students get ready for placements with aptitude tests, coding questions, and performance analytics. It features test history, progress tracking, and personalized suggestions. Lorem ipsum dolor sit amet, consectetur.',
    role: 'Managed backend logic for tests, submissions, and analytics dashboard. Integrated secure user flows and session tracking. Lorem ipsum.',
    challenges:
      'Structuring real-time evaluation of answers and tracking growth trends. Creating scalable schema design for performance. Lorem ipsum dolor sit amet.',
    takeaways:
      'Gained experience in analytics generation and optimizing query-heavy endpoints. Improved efficiency in server responses.'
  },
  {
    id: 3,
    title: 'Internship Marksheet Generator',
    description:
      'Generates internship reports with mentor verification and admin control, streamlining internship record-keeping.',
    image: '/templateImage.png',
    link: '/work/3',
    github: 'https://github.com/krisshJain/internship-marksheet',
    overview:
      'Designed for academic use, this tool collects internship details from students, verifies them via mentors, and generates consolidated reports. Includes export to PDF and role-based dashboards. Lorem ipsum dolor sit.',
    role: 'Built the full frontend interface with data submission and admin control logic. Managed data consistency and Firebase auth.',
    challenges:
      'Ensuring multi-role flow and accurate conditional rendering across mentor/admin/student views. Managing verification status and conflict resolution. Lorem ipsum dolor.',
    takeaways:
      'Improved role-based access handling and deepened knowledge of Firebase auth and Firestore rules. Developed cleaner data handling flows.'
  },
  {
    id: 4,
    title: 'AI Ticket Assistant',
    description:
      'An AI-powered assistant for automating customer support tickets, classifying issues, and suggesting resolutions.',
    image: '/templateImage.png',
    link: '/work/4',
    github: 'https://github.com/krisshJain/ai-ticket-assistant',
    overview:
      'AI Ticket Assistant leverages LLMs to read, categorize, and resolve support tickets. It reduces manual overhead and enhances support accuracy. Built using prompt engineering and fallback systems to handle uncertainty. Lorem ipsum dolor sit amet.',
    role: 'Integrated LLM API, structured ticket pipelines, and handled error fallback for unresolvable issues. Designed a feedback loop for continuous improvement. Lorem ipsum dolor.',
    challenges:
      'Handling unexpected ticket formats and training prompts for reliable classification. Dealing with LLM hallucinations and incomplete responses. Lorem ipsum dolor sit amet.',
    takeaways:
      'Learned how to fine-tune prompts and build fallback systems around AI APIs for reliability. Improved skills in async flows and API error management. Lorem ipsum.'
  }
];
