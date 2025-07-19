// data/projects.js
export const projectDetails = [
  {
    id: 1,
    title: "GameHubStation",
    description:
      "A powerful backend API that connects gamers with gaming cafes using real-time booking and geolocation features. Station Masters can register multiple branches, upload game inventories, and manage bookings, while Station Mates enjoy intuitive search and instant reservations.",
    image: "/templateImage.png",
    link: "/work/1",
    github: "https://github.com/KrrishJain/GameHubStation",
    overview:
      "GameHubStation connects gamers with nearby gaming cafes, allowing Station Masters to list branches and Station Mates to discover and book consoles. With geolocation-based discovery, instant bookings, and real-time availability checks, the system offers seamless interactions. Users can filter by game type, branch ratings, and booking slots. Administrators can view analytics dashboards for popular games and peak hours. Station owners benefit from revenue reports and automated reminders.",
    role: "Designed and implemented the RESTful API endpoints using Express.js, including authentication, station CRUD operations, and booking workflows. Created complex MongoDB aggregation pipelines for geospatial queries. Collaborated with frontend developers to define payloads and error handling strategies. Set up CI/CD pipelines for automated testing and deployment.",
    challenges:
      "Balancing real-time slot availability with concurrency control to prevent double bookings. Optimizing geolocation queries for performance at scale. Ensuring data consistency across distributed systems and handling edge cases like overlapping time zones, daylight saving adjustments, and partial cancellations.",
    tech: "Built on a MERN stack: Node.js and Express.js power the backend API, MongoDB Atlas stores geospatial and user data, and React.js (optional) provides the frontend. Utilizes JWT for secure authentication, bcrypt for hashing, and Cloudinary for image uploads.",
    takeaways:
      "Mastered geospatial querying in MongoDB and learned advanced concurrency control patterns. Gained deep understanding of CI/CD workflows and container orchestration. Improved skills in real-time data handling, fault tolerance, and system monitoring.",
  },
  {
  id: 2,
  title: 'AI Ticket Assistant',
  description:
    'An AI-powered assistant for automating customer support tickets, classifying issues, and suggesting resolutions.',
  image: '/templateImage.png',
  link: '/work/2',
  github: 'https://github.com/KrrishJain/AI-Ticket-Assistant',
  overview:
    'AI Ticket Assistant is designed to revolutionize traditional customer support workflows. It reads incoming support tickets, classifies them using LLMs, and provides recommended solutions with high accuracy. It reduces agent workload by automating repetitive tasks and intelligently escalating complex issues. The system integrates with customer CRMs and enables contextual support through API-connected data streams.',
  role:
    'I was responsible for integrating the AI model and designing the flow from ticket submission to resolution. This included setting up the LLM communication layer, defining fallback rules, and ensuring ticket metadata and history are preserved. I also implemented secured API routes, JWT-based role authentication, and an admin dashboard for real-time system monitoring.',
  challenges:
    'As it was my first time dealing with an AI agent project, integrating AI posed unique challenges including handling unpredictability in responses, prompt design, and fallback systems. Ensuring consistent outputs from the AI, setting confidence thresholds for auto-responses, and debugging LLM behavior was also a learning curve.',
  takeaways:
    'Through this project, I gained hands-on experience in building production-ready AI workflows. I learned how to work with event-driven systems, structure scalable APIs, and manage role-based access control effectively. Understanding the importance of user feedback loops and how to improve AI reliability through metrics was a key takeaway.',
  tech:
    'MERN Stack, Inngest AI, Inngest Event-Driven Architecture, JWT and Auth.'
}

];
