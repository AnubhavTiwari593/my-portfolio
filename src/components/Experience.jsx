import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react'

const experiences = [
  {
    company: 'Zidio Development',
    role: 'Java Full Stack Developer Intern',
    period: 'Jul 2026 – Oct 2026',
    location: 'Bengaluru, Karnataka (Remote)',
    type: 'Internship',
    description: [
      'Assisting in the development of scalable full-stack web applications using Java, Spring Boot, and modern JavaScript frameworks.',
      'Designing and consuming RESTful APIs, integrating front-end interfaces with back-end logic.',
      'Supporting database design and management using JPA/Hibernate and relational database systems.',
      'Participating in software testing, debugging, version control (Git), and agile sprint planning.',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'REST APIs', 'JPA / Hibernate', 'Git'],
  },
  {
    company: 'MetaUpSpace LLP',
    role: 'Java Full Stack Developer Intern',
    period: 'Mar 2026 – Jun 2026',
    location: 'Remote',
    type: 'Internship',
    description: [
      'Developing and maintaining RESTful APIs using Spring Boot with JWT-based authentication.',
      'Building dynamic, responsive frontend components with React.js and Tailwind CSS.',
      'Integrating MongoDB for flexible data storage and designing efficient schema structures.',
      'Collaborating with team to implement CI/CD pipelines and AWS deployment.',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'JWT', 'AWS'],
  },
]

const education = [
  {
    institution: 'KIET Group of Institutions',
    degree: 'B.Tech – Information Technology',
    period: '2022 – 2026',
    detail: 'Core CS fundamentals, Data Structures, Algorithms, DBMS, OS, Networks',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
      <section id="experience" ref={ref} className="py-28 px-6" style={{ background: '#071a2f' }}>
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-sm tracking-widest uppercase mb-3" style={{ color: '#a78bfa' }}>02. Experience & Education</p>
            <h2 className="section-title text-white mb-16">
              Where I've <span className="gradient-text">Worked & Studied</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div
                className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
                style={{ background: 'linear-gradient(to bottom, rgba(56,189,248,0.5), rgba(167,139,250,0.3), transparent)' }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="space-y-12"
            >
              {/* Experience Cards */}
              {experiences.map((exp, i) => (
                  <motion.div key={i} variants={itemVariants} className="relative md:pl-20">
                    <div className="hidden md:flex absolute left-4 top-6 w-8 h-8 -translate-x-1/2 items-center justify-center">
                      <div className="w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #38bdf8, #6366f1)', boxShadow: '0 0 12px rgba(56,189,248,0.5)' }} />
                      <div className="absolute w-8 h-8 rounded-full animate-ping opacity-20" style={{ background: 'linear-gradient(135deg, #38bdf8, #6366f1)' }} />
                    </div>

                    <div className="glass-card p-6 group transition-all" style={{ borderColor: 'rgba(56,189,248,0.12)' }}>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase size={14} style={{ color: '#38bdf8' }} />
                            <span className="font-semibold" style={{ color: '#38bdf8' }}>{exp.company}</span>
                            <span style={{ color: '#1e4060' }}>•</span>
                            <span
                                className="text-xs font-medium px-2 py-0.5 rounded-full"
                                style={{ background: 'rgba(56,189,248,0.1)', color: '#93d5f0', border: '1px solid rgba(56,189,248,0.2)' }}
                            >
                          {exp.type}
                        </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1.5 text-sm" style={{ color: '#7faecf' }}>
                            <Calendar size={13} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs mt-1" style={{ color: '#4a7fa0' }}>
                            <MapPin size={12} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-5">
                        {exp.description.map((point, j) => (
                            <li key={j} className="flex gap-3 text-sm" style={{ color: '#7faecf' }}>
                              <span style={{ color: '#38bdf8', marginTop: '2px', flexShrink: 0 }}>▹</span>
                              <span>{point}</span>
                            </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-mono rounded-md"
                                style={{ background: 'rgba(56,189,248,0.06)', color: '#93d5f0', border: '1px solid rgba(56,189,248,0.12)' }}
                            >
                        {tag}
                      </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}

              {/* Education Cards */}
              {education.map((edu, i) => (
                  <motion.div key={i} variants={itemVariants} className="relative md:pl-20 pt-4">
                    <div className="hidden md:flex absolute left-4 top-10 w-8 h-8 -translate-x-1/2 items-center justify-center">
                      <div className="w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #a78bfa, #ec4899)', boxShadow: '0 0 12px rgba(167,139,250,0.5)' }} />
                    </div>

                    <div className="glass-card p-6" style={{ borderColor: 'rgba(167,139,250,0.2)' }}>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <GraduationCap size={16} style={{ color: '#a78bfa' }} />
                            <span className="font-semibold text-sm" style={{ color: '#a78bfa' }}>{edu.institution}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-sm mt-2" style={{ color: '#7faecf' }}>{edu.detail}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm" style={{ color: '#7faecf' }}>
                          <Calendar size={13} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  )
}
