import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Engineering Insights on Hashnode",
    date: "Technical Writing",
    excerpt: "I write about the intersection of Java, Spring Boot, and Cloud Architecture. My articles explore practical solutions to complex backend challenges, focusing on clarity and best practices.",
    link: "https://maniteja19.hashnode.dev/",
  },
  {
    title: "The Journey of Continuous Learning",
    date: "Professional Growth",
    excerpt: "On Boot.dev, I document my deep dive into backend engineering and distributed systems. It's a space where I refine my understanding of computer science fundamentals and stay ahead of industry trends.",
    link: "https://www.boot.dev/u/student-v7ibbw",
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="blocky-text text-4xl md:text-6xl mb-4">
        Projects & Insights
      </h1>
      <p className="text-lg uppercase tracking-wider opacity-60 mb-12">
        PERSPECTIVES ON ENGINEERING, DATA, AND GROWTH
      </p>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="border-2 border-bright-purple p-6 hover:bg-bright-purple/10 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h2 className="blocky-text text-xl md:text-2xl group-hover:glow-pulse">
                {project.title}
              </h2>
              <span className="text-sm uppercase tracking-wider font-bold whitespace-nowrap opacity-80">
                {project.date}
              </span>
            </div>
            <p className="text-base leading-relaxed mb-6 opacity-90 max-w-3xl">
              {project.excerpt}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-link inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold"
            >
              View Project <ExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>
       <div className="mt-16 p-8 border-2 border-bright-purple bg-bright-purple/5">
        <h2 className="blocky-text text-2xl md:text-3xl mb-6">
          Philosophy: Engineering for Impact
        </h2>
        <div className="space-y-4 text-lg leading-relaxed max-w-3xl">
          <p>
           Core Values </p>
          <p>
           I believe that great engineering isn't just about code—it's about designing systems that turn complex data into reliable, actionable insights. Scalability, performance, and reliability are the pillars of my approach. </p>
        </div>
        </div>
      <div className="mt-16 p-8 border-2 border-bright-purple bg-bright-purple/5">
        <h2 className="blocky-text text-2xl md:text-3xl mb-6">
          Career Focus
        </h2>
        <div className="space-y-4 text-lg leading-relaxed max-w-3xl">
          <p>
            I am seeking Backend and Data-Focused Engineering roles where I can leverage my expertise to build scalable, high-performance systems.
          </p>
          <p>
            My ideal environment is mission-driven, where technology is used to solve real-world problems and drive tangible outcomes. I am eager to contribute to teams that value technical excellence, innovation, and impact.
          </p>
        </div>
      </div>
    </div>
  );
}
