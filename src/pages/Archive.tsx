const archiveItems = [
  {
    title: "Software Engineer at The Goodyear Tire & Rubber Company",
    type: "Experience",
    year: "2024 - Present",
    description: "Driving the architecture of scalable Java/Spring Boot microservices, supporting mission-critical enterprise operations and high-volume data processing.",
  },
  {
    title: "Master of Science in Data Science",
    type: "Education",
    year: "2022 - 2023",
    description: "University at Buffalo, The State University of New York. Specialized in data-driven systems, machine learning pipelines, and advanced analytics.",
  },
  {
    title: "Real-Time Fraud Detection System",
    type: "Project",
    year: "2023",
    description: "Engineered a high-speed fraud detection platform using Kafka and XGBoost, capable of identifying anomalies in milliseconds across 10,000+ daily transactions.",
  },
  {
    title: "High-Performance E-Commerce Platform",
    type: "Project",
    year: "2023",
    description: "Designed a microservices-based e-commerce ecosystem. Implemented event-driven architecture and caching strategies to ensure sub-second response times under load.",
  },
  {
    title: "Software Engineer at Aircom Solutions",
    type: "Experience",
    year: "2020 - 2022",
    description: "Began professional career optimizing backend performance by 30% and developing robust enterprise web applications for a global user base.",
  },
  {
    title: "Bachelor of Technology in Computer Science",
    type: "Education",
    year: "2018 - 2022",
    description: "Bharath Institute of Technology and Research. Built a strong foundation in algorithms, distributed systems, and software engineering principles.",
  },
];

export default function Archive() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="blocky-text text-4xl md:text-6xl mb-12">
        Archive: The Journey
      </h1>

      <div className="space-y-8">
        {archiveItems.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-bright-purple pl-6 py-4 hover:bg-bright-purple/5 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <h2 className="blocky-text text-xl md:text-2xl group-hover:text-bright-purple transition-colors">
                {item.title}
              </h2>
              <div className="flex gap-4 text-sm uppercase tracking-wider font-bold whitespace-nowrap">
                <span className="opacity-60">{item.type}</span>
                <span className="text-bright-purple">{item.year}</span>
              </div>
            </div>
            <p className="text-base opacity-90 leading-relaxed max-w-2xl">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border-2 border-bright-purple bg-bright-purple/5">
        <h2 className="blocky-text text-2xl md:text-3xl mb-6">
          Timeline of Milestones
        </h2>
        <div className="space-y-6 text-lg">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple">2024 - Present</span>
            <span>Architecting Scalable Microservices at <span className="font-bold">Goodyear</span></span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple">2023</span>
            <span>Graduated with M.S. in Data Science from <span className="font-bold">UB SUNY</span></span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple">2020 - 2022</span>
            <span>Software Engineer at <span className="font-bold">Aircom Solutions</span></span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple">2018 - 2022</span>
            <span>B.Tech in Computer Science at <span className="font-bold">Bharath Institute</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
