export default function Skills() {
  const skillCategories = [
    {
      category: "Languages & Core",
      items: ["Java", "Python", "JavaScript", "TypeScript", "C#", "Golang", "C++", "Kotlin"],
      // Removed generic 'level' as it's subjective; focusing on the list
    },
    {
      category: "Cloud & DevOps Infrastructure",
      items: ["AWS (EC2, S3, RDS, Lambda)", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Kafka"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Spring Boot", "Hibernate", ".NET", "Next.js", "Node.js", "React", "Vue.js", "Angular", "GraphQL"],
    },
    {
      category: "Data & Storage",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Tools & Best Practices",
      items: ["Git", "Agile & Scrum", "JUnit & Mockito", "Selenium", "Datadog", "SonarQube", "OAuth2 & JWT"],
    }
  ];

  const concepts = [
    "Microservices Architecture", "RESTful API Design", "Distributed Systems",
    "Database Schema Design", "Performance Tuning", "Machine Learning Integration",
    "Feature Engineering", "High-Availability Systems", "Query Optimization"
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="blocky-text text-4xl md:text-6xl mb-12">
        Technical Expertise
      </h1>

      <div className="grid gap-8 md:grid-cols-1">
        {skillCategories.map((skill, index) => (
          <div key={index} className="border-2 border-bright-purple p-6 hover:bg-bright-purple/5 transition-colors">
            <h2 className="blocky-text text-2xl md:text-3xl mb-6 text-bright-purple">
              {skill.category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-bright-purple/10 border border-bright-purple text-sm font-bold uppercase tracking-wider hover:bg-bright-purple hover:text-black transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border-2 border-bright-purple bg-bright-purple/10">
        <h2 className="blocky-text text-2xl md:text-3xl mb-8 text-center">
          Architectural Competencies
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {concepts.map((concept) => (
            <div
              key={concept}
              className="px-4 py-3 border-2 border-bright-purple font-bold uppercase text-sm tracking-wider hover:bg-bright-purple hover:text-black transition-colors cursor-default"
            >
              {concept}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
