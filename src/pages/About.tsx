import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <img
          src="/photo/Sri_Maniteja.jpeg"
          alt="Sri Maniteja"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple shadow-[8px_8px_0px_rgba(102,0,204,0.3)] mb-4 grayscale hover:grayscale-0 transition-all duration-500"
        />
        <h1 className="blocky-text text-4xl md:text-6xl mb-8 ml-2 md:ml-4">
          About
        </h1>
      </div>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          I’m <span className="font-bold">Sri Maniteja Chinnam</span>, a Software Engineer based in Pittsburgh, PA, dedicated to building systems that are as resilient as they are scalable.
        </p>

        <p>
          My expertise lies in architecting high-throughput cloud solutions and Java/Spring Boot microservices that drive real business value.
          I’ve engineered enterprise-grade REST APIs capable of handling over 25,000 daily requests with sub-200ms latency, ensuring seamless performance when it matters most.
        </p>

        <p>
          Beyond backend architecture, I focus on the end-to-end experience—innovating with ML-powered recommendation engines that have sharpened product relevance by 15% and optimizing frontend performance to significantly reduce load times.
          Security is integral to my process, protecting thousands of daily users through robust authentication standards like OAuth2 and JWT.
        </p>

        <p>
          I thrive on solving complex data challenges and translating them into reliable, high-impact insights. My goal is simple: to build technology that supports real-world outcomes and drives measurable growth.
        </p>

        <p>
          Currently, I am seeking backend and data-focused engineering roles where I can contribute to mission-driven projects and continue pushing the boundaries of what scalable systems can achieve.
        </p>

        <p>
          Let’s connect and build something meaningful. You can explore my code on{" "}
          <a
            href="https://www.github.com/srimaniteja19/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-link"
          >
            GitHub
          </a>{" "}
          or reach me directly via{" "}
          <a
            href="mailto:srimaniteja.ch@gmail.com"
            className="neon-link"
          >
            email
          </a>.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        <section>
          <h2 className="blocky-text text-3xl md:text-4xl mb-6">Education</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-bold">University at Buffalo, The State University of New York</span> - Master of Science, Data Science (Aug 2022 - Dec 2023)
              <br />Buffalo, NY
            </li>
            <li>
              <span className="font-bold">Bharath Institute of Technology and Research</span> - Bachelor of Technology, Computer Science (Jun 2018 - Jun 2022)
              <br />Chennai, India
            </li>
          </ul>
        </section>

        <section>
          <h2 className="blocky-text text-3xl md:text-4xl mb-6">Key Strengths</h2>
          <ul className="space-y-4 text-lg">
            <li>
              Problem-solving, Adaptability, Fast-learner
            </li>
          </ul>
        </section>

        <section>
          <h2 className="blocky-text text-3xl md:text-4xl mb-6">Publications & Blogs</h2>
          <ul className="space-y-3 text-lg">
            <li>
              <a
                href="https://maniteja19.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-link inline-flex items-center gap-2"
              >
                Hashnode Blog <ExternalLink size={14} />
              </a>
            </li>
            <li>
              <a
                href="https://www.boot.dev/u/student-v7ibbw"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-link inline-flex items-center gap-2"
              >
                Boot.dev Profile <ExternalLink size={14} />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
