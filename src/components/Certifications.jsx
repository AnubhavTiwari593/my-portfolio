
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Award,
  Calendar,
  ExternalLink,
  BrainCircuit,
  Cloud,
  Rocket,
  ShieldCheck,
  Code2,
} from 'lucide-react'

const certifications = [
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'Oct 2026',
    icon: BrainCircuit,
    accentColor: '#fb923c',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=1515FE44FAB4983BD4D38714BF837FF1AA4C6EAAFA9ED189BA45699371086114',
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Mar 2026',
    icon: BrainCircuit,
    accentColor: '#fbbf24',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/c22224118521407d9ffb46d5fc97e23a',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 2026',
    icon: Cloud,
    accentColor: '#fb923c',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/ad4e990f2c9341a0aa0e7d7b562de50a',
  },
  {
    title: 'ServiceNow Virtual Internship Program',
    issuer: 'ServiceNow University',
    date: 'Apr 2026',
    icon: Rocket,
    accentColor: '#34d399',
    link: '#',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Aug 2025',
    icon: BrainCircuit,
    accentColor: '#a78bfa',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A292197A54C0B2574D7FDCAB310D2E4FCE43E3052797870E65AC74BCC511467E',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2025',
    icon: ShieldCheck,
    accentColor: '#38bdf8',
    link: 'https://www.credly.com/badges/914f5a11-9ce0-4fb7-a5bf-8d9a6de29bf0',
  },
  {
    title: 'Data Structures and Algorithms in Java',
    issuer: 'Infosys Springboard',
    date: 'Apr 2025',
    icon: Code2,
    accentColor: '#f472b6',
    link: '#',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'Oct 2024',
    icon: Cloud,
    accentColor: '#60a5fa',
    link: '#',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Certifications() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  return (
      <section
          id="certifications"
          ref={ref}
          className="px-6 py-28"
          style={{ background: '#0c2240' }}
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
          >
            <p
                className="mb-3 font-mono text-sm uppercase tracking-widest"
                style={{ color: '#fbbf24' }}
            >
              05. Certifications
            </p>

            <h2 className="section-title mb-4 text-white">
              My <span className="gradient-text">Credentials</span>
            </h2>

            <p
                className="mb-14 max-w-xl"
                style={{ color: '#7faecf' }}
            >
              Professional certifications and learning achievements
              across Agentic AI, cloud computing, cybersecurity,
              and Java development.
            </p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid gap-5 md:grid-cols-2"
          >
            {certifications.map((cert) => {
              const Icon = cert.icon

              return (
                  <motion.article
                      key={cert.title}
                      variants={itemVariants}
                      className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1"
                      style={{
                        borderColor: `${cert.accentColor}25`,
                      }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Lucide icon */}
                      <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `${cert.accentColor}12`,
                            border: `1px solid ${cert.accentColor}35`,
                            color: cert.accentColor,
                          }}
                      >
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-semibold leading-snug text-white">
                            {cert.title}
                          </h3>

                          {cert.link !== '#' && (
                              <a
                                  href={cert.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Verify ${cert.title}`}
                                  title="View credential"
                                  className="flex-shrink-0 transition-transform hover:scale-110"
                                  style={{ color: cert.accentColor }}
                              >
                                <ExternalLink size={16} />
                              </a>
                          )}
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span
                          className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium"
                          style={{
                            background: `${cert.accentColor}12`,
                            color: cert.accentColor,
                            border: `1px solid ${cert.accentColor}25`,
                          }}
                      >
                        <Award size={12} />
                        {cert.issuer}
                      </span>

                          <span
                              className="flex items-center gap-1 text-xs"
                              style={{ color: '#7faecf' }}
                          >
                        <Calendar size={12} />
                            {cert.date}
                      </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>
  )
}
