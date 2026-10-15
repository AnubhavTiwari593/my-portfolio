import { Activity } from 'lucide-react';
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Briefcase,
  Mail,
  Hotel,
  GitBranch,
  ExternalLink,
} from 'lucide-react'

const projects = [
{
  title: 'CNC Machine Monitoring System',
  icon: Activity,
  description:
    'A machine monitoring system with simulated CNC telemetry, real-time machine status tracking, production monitoring, alarm history, downtime reports, and a React dashboard.',
  highlights: [
    'Background telemetry collection using .NET Worker Service',
    'Machine status and production monitoring',
    'REST APIs for production summaries and downtime reports',
    'MySQL data storage with EF Core',
    'Exception handling, structured logging, and xUnit testing',
  ],
  tags: [
    'C#',
    '.NET 9',
    'ASP.NET Core Web API',
    'Worker Service',
    'EF Core',
    'MySQL',
    'React',
    'xUnit',
  ],
  github:
    'https://github.com/AnubhavTiwari593/CNC-Machine-Monitoring-System',
  demo: '#',
  accentColor: '#38bdf8',
},
  {
    title: 'Job Portal',
    icon: Briefcase,
    description:
        'A full-featured role-based job portal with authentication, recruiter KYC verification, job posting, application management, and candidate tracking pipeline.',
    highlights: [
      'JWT-based authentication & role management',
      'Recruiter KYC verification flow',
      'Job posting & candidate tracking',
      'Application status pipeline',
    ],
    tags: ['Spring Boot', 'MongoDB', 'JWT', 'React', 'Tailwind'],
    github: 'https://github.com/anubhavtiwari',
    demo: '#',
    accentColor: '#38bdf8',
  },
  {
    title: 'Smart Email Assistant',
    icon: Mail,
    description:
        'An AI-powered email response generation tool that uses Google Gemini AI to draft context-aware, professional email replies in seconds.',
    highlights: [
      'Gemini AI integration for response generation',
      'Context-aware email drafting',
      'Spring Boot backend with React frontend',
      'Real-time processing & formatting',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'Gemini AI', 'REST API'],
    github:
        'https://github.com/AnubhavTiwari593/smart-email-assistant',
    demo: null,
    accentColor: '#a78bfa',
  },
  {
    title: 'Hotel Management System',
    icon: Hotel,
    description:
        'A comprehensive hotel management system featuring room booking, dynamic filtering, billing automation, and real-time room availability management.',
    highlights: [
      'Room booking with real-time availability',
      'Dynamic filtering by type, price & floor',
      'Automated billing & invoice generation',
      'JDBC-powered data persistence',
    ],
    tags: ['JavaScript', 'JDBC', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/anubhavtiwari',
    demo: null,
    accentColor: '#34d399',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  return (
      <section
          id="projects"
          ref={ref}
          className="px-6 py-28"
          style={{ background: '#071a2f' }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
          >
            <p
                className="mb-3 font-mono text-sm uppercase tracking-widest"
                style={{ color: '#fb923c' }}
            >
              04. Projects
            </p>

            <h2 className="section-title mb-4 text-white">
              What I've <span className="gradient-text">Built</span>
            </h2>

            <p
                className="mb-14 max-w-xl"
                style={{ color: '#7faecf' }}
            >
              Real-world projects showcasing my full-stack capabilities.
            </p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => {
              const ProjectIcon = project.icon

              return (
                  <motion.article
                      key={project.title}
                      variants={cardVariants}
                      className="glass-card group flex flex-col transition-all duration-300 hover:-translate-y-1"
                      style={{
                        borderColor: `${project.accentColor}30`,
                      }}
                  >
                    {/* Project header */}
                    <div className="flex-1 p-6">
                      <div className="mb-5 flex items-start justify-between">
                        <div
                            className="flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                            style={{
                              color: project.accentColor,
                              background: `${project.accentColor}12`,
                              border: `1px solid ${project.accentColor}35`,
                            }}
                        >
                          <ProjectIcon size={27} strokeWidth={1.7} />
                        </div>

                        <div className="flex gap-2">
                          <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} on GitHub`}
                              title="View on GitHub"
                              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                              style={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#7faecf',
                              }}
                          >
                            <GitBranch size={16} />
                          </a>

                          {project.demo && (
                              <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`View ${project.title} live demo`}
                                  title="Live Demo"
                                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                                  style={{
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#7faecf',
                                  }}
                              >
                                <ExternalLink size={16} />
                              </a>
                          )}
                        </div>
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-white">
                        {project.title}
                      </h3>

                      <p
                          className="mb-5 text-sm leading-relaxed"
                          style={{ color: '#7faecf' }}
                      >
                        {project.description}
                      </p>

                      <ul className="mb-5 space-y-2">
                        {project.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex items-start gap-2 text-xs leading-relaxed"
                                style={{ color: '#9bb8d0' }}
                            >
                        <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{
                              background: project.accentColor,
                            }}
                        />
                              {highlight}
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology tags */}
                    <div className="px-6 pb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md px-2 py-1 font-mono text-xs"
                                style={{
                                  background: `${project.accentColor}10`,
                                  color: project.accentColor,
                                  border: `1px solid ${project.accentColor}25`,
                                }}
                            >
                        {tag}
                      </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div
                        className="flex items-center gap-4 border-t px-6 py-4"
                        style={{
                          borderColor: 'rgba(127,174,207,0.12)',
                        }}
                    >
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs transition-colors hover:text-white"
                          style={{ color: '#7faecf' }}
                      >
                        <GitBranch size={15} />
                        GitHub Repository
                      </a>
                    </div>
                  </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>
  )
}
