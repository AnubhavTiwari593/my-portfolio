import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Award,
  BookOpen,
  BrainCircuit,
  Cloud,
  Code2,
  ExternalLink,
  FileText,
  ShieldCheck,
} from 'lucide-react'

// Add your real profile URLs here. Leave a value empty to hide that link.
const leetCodeProfileUrl = ''
const hackerRankProfileUrl = ''
const researchPaperUrl = '' // Optional: add the paper/publication URL if available.

const credentials = [
  {
    issuer: 'AWS',
    icon: Cloud,
    color: '#fbbf24',
    items: [
      'AWS Certified AI Practitioner',
      'AWS Certified Cloud Practitioner',
      'AWS Academy Cloud Foundations',
    ],
  },
  {
    issuer: 'ORACLE',
    icon: BrainCircuit,
    color: '#fb7185',
    items: [
      'OCI AI Foundations Associate',
      'Agentic AI Certified Foundations Associate',
    ],
  },
  {
    issuer: 'CISCO',
    icon: ShieldCheck,
    color: '#38bdf8',
    items: ['Introduction to Cybersecurity'],
  },
  {
    issuer: 'INFOSYS SPRINGBOARD',
    icon: BookOpen,
    color: '#a78bfa',
    items: ['Data Structures and Algorithms in Java'],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
}

function ActionLink({ href, children }) {
  if (!href) return null

  return (
      <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition hover:-translate-y-0.5"
          style={{
            color: '#eaf6ff',
            background: 'rgba(56, 189, 248, 0.10)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
          }}
      >
        {children}
        <ExternalLink size={14} />
      </a>
  )
}

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
      <section
          id="research"
          ref={ref}
          className="relative overflow-hidden px-6 py-24 md:py-28"
          style={{ background: '#071a2f' }}
      >
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full blur-3xl"
            style={{ background: '#38bdf8', opacity: 0.07 }}
        />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl"
            style={{ background: '#a78bfa', opacity: 0.06 }}
        />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="mb-12"
          >
            <p
                className="mb-3 font-mono text-sm uppercase tracking-[0.22em]"
                style={{ color: '#fbbf24' }}
            >
              06. Achievements
            </p>
            <h2 className="section-title mb-4 text-white">
              Beyond <span className="gradient-text">Code</span>
            </h2>
            <p className="max-w-2xl leading-relaxed" style={{ color: '#7faecf' }}>
              Research, problem solving, and technical credentials that reflect my
              continued learning and development.
            </p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {/* 01 — Research paper and certificate image */}
            <motion.article
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, #0c2240, #091b31)',
                  border: '1px solid rgba(167, 139, 250, 0.30)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
                }}
            >
              <a
                  href="/images/etmis-2025-certificate.jpg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View ETMIS 2025 research paper certificate"
                  className="relative block overflow-hidden"
              >
                <img
                    src="/images/etmis-2025-certificate.jpg"
                    alt="ETMIS 2025 certificate for Cross-Lingual Sentiment Detection on Social Media Using Transformer-Based Architectures"
                    loading="lazy"
                    className="h-44 w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    style={{ background: '#ffffff' }}
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold text-white" style={{ background: 'rgba(7, 26, 47, 0.90)' }}>
                <FileText size={14} /> Certificate preview
              </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full px-3 py-1 font-mono text-[10px] tracking-widest" style={{ color: '#c4b5fd', background: '#a78bfa18' }}>
                  RESEARCH PAPER
                </span>
                  <span className="text-xs" style={{ color: '#7faecf' }}>ETMIS 2025</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                  Cross-Lingual Sentiment Detection on Social Media Using Transformer-Based Architectures
                </h3>
                <p className="mb-6 text-sm leading-6" style={{ color: '#9bb8d0' }}>
                  Research on multilingual social media sentiment detection using transformer-based architectures.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <ActionLink href="/images/etmis-2025-certificate.jpg">
                    View Certificate
                  </ActionLink>
                  <ActionLink href={researchPaperUrl}>View Paper</ActionLink>
                </div>
              </div>
            </motion.article>

            {/* 02 — Problem solving */}
            <motion.article
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-2xl p-6 transition-colors"
                style={{
                  background: 'linear-gradient(145deg, #0c2240, #091b31)',
                  border: '1px solid rgba(56, 189, 248, 0.30)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
                }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ color: '#38bdf8', background: '#38bdf818', border: '1px solid #38bdf840' }}>
                  <Code2 size={26} />
                </div>
                <span className="font-mono text-3xl font-bold" style={{ color: '#38bdf835' }}>02</span>
              </div>
              <p className="mb-3 font-mono text-[10px] tracking-[0.2em]" style={{ color: '#38bdf8' }}>
                PROBLEM SOLVING
              </p>
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-5xl font-bold tracking-tight text-white">330+</span>
                <span className="text-sm" style={{ color: '#7faecf' }}>DSA problems</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">Java & Algorithms</h3>
              <p className="mb-6 text-sm leading-6" style={{ color: '#9bb8d0' }}>
                Consistent coding practice focused on Java, Data Structures, Algorithms, and problem-solving fundamentals.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {['Java', 'Data Structures', 'Algorithms'].map((tag) => (
                    <span key={tag} className="rounded-full px-3 py-1 text-xs" style={{ color: '#7dd3fc', background: '#38bdf812' }}>
                  {tag}
                </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <ActionLink href={'https://leetcode.com/u/MadhavThe/'}>LeetCode Profile</ActionLink>
              </div>
            </motion.article>

            {/* 03 — Credentials */}
            <motion.article
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(145deg, #0c2240, #091b31)',
                  border: '1px solid rgba(251, 191, 36, 0.30)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
                }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ color: '#fbbf24', background: '#fbbf2418', border: '1px solid #fbbf2440' }}>
                  <Award size={26} />
                </div>
                <span className="font-mono text-3xl font-bold" style={{ color: '#fbbf2435' }}>03</span>
              </div>
              <p className="mb-3 font-mono text-[10px] tracking-[0.2em]" style={{ color: '#fbbf24' }}>
                TECHNICAL LEARNING
              </p>
              <h3 className="mb-3 text-lg font-semibold text-white">Credentials & Certifications</h3>
              <p className="mb-5 text-sm leading-6" style={{ color: '#9bb8d0' }}>
                Learning and credentials across cloud computing, AI, cybersecurity, and Java programming.
              </p>

              <div className="space-y-4">
                {credentials.map((group) => {
                  const Icon = group.icon
                  return (
                      <div key={group.issuer} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg" style={{ color: group.color, background: `${group.color}15`, border: `1px solid ${group.color}35` }}>
                          <Icon size={17} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="mb-1 text-xs font-bold tracking-wide" style={{ color: group.color }}>{group.issuer}</p>
                          {group.items.map((credential) => (
                              <p key={credential} className="mb-1 text-xs leading-5 text-slate-300">
                                {credential}
                              </p>
                          ))}
                        </div>
                      </div>
                  )
                })}
              </div>
              <p className="mt-5 border-t pt-4 text-xs" style={{ color: '#7faecf', borderColor: 'rgba(127,174,207,0.14)' }}>
                Detailed credentials are listed in the Certifications section.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>
  )
}
