
const projects = [
  {
    name: "The Goodyear Tire & Rubber Company",
    role: "Software Engineer",
    url: "https://www.goodyear.com",
    description: "Designed and optimized enterprise-scale REST APIs, handling 25,000+ daily requests with average response times under 200ms. Integrated advanced ML models into the recommendation engine, improving product discovery for over 15,000 active users.",
    year: "2024 - Present",
    status: "Active",
  },
  {
    name: "Aircom Solutions",
    role: "Software Engineer",
    url: "#",
    description: "Built and maintained robust web applications that streamlined operations. Achieved a 30% boost in backend performance through meticulous SQL query tuning and database indexing.",
    year: "2020 - 2022",
    status: "Completed",
  },
  {
    name: "Fraud Detection System",
    role: "ML & Analytics",
    url: "https://www.github.com/srimaniteja19/",
    description: "Developed a real-time fraud detection pipeline using Kafka and XGBoost. The system processes over 10,000 daily transactions with 96% precision, identifying anomalies in under 100ms.",
    year: "2022 - 2023",
    status: "Project",
  },
  {
    name: "E-Commerce Microservices",
    role: "System Architecture",
    url: "https://www.github.com/srimaniteja19/",
    description: "Architected a scalable, six-service e-commerce platform. Leveraged Next.js and event-driven design to handle high traffic loads, while Redis caching reduced average latency by 70%.",
    year: "2023",
    status: "Project",
  },
];

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="blocky-text neon-text-lg text-4xl md:text-6xl mb-12">
        Work
      </h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-2 border-bright-purple p-6 hover:bg-bright-purple/10 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="blocky-text text-2xl md:text-3xl mb-1 group-hover:glow-pulse">
                  {project.name}
                </h2>
                <div className="text-sm font-bold opacity-80 mb-3">{project.role}</div>
                <p className="text-lg mb-4 opacity-90 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wider font-bold">
                  <span>{project.year}</span>
                  <span className="opacity-60">•</span>
                  <span className={project.status === "Active" ? "text-green-400" : "opacity-60"}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-button inline-flex items-center gap-2"
                  >
                    VISIT
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 border-2 border-bright-purple bg-bright-purple/10">
        <h2 className="blocky-text text-2xl md:text-3xl mb-4">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="blocky-text text-4xl mb-2">25K+</div>
            <div className="text-sm uppercase tracking-wider opacity-80 font-bold">Daily API Requests</div>
          </div>
          <div>
            <div className="blocky-text text-4xl mb-2">30%</div>
            <div className="text-sm uppercase tracking-wider opacity-80 font-bold">Latency Reduction</div>
          </div>
          <div>
            <div className="blocky-text text-4xl mb-2">99.9%</div>
            <div className="text-sm uppercase tracking-wider opacity-80 font-bold">System Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
