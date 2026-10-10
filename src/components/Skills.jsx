import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Server, Globe, Database, Cloud } from 'lucide-react'

const skillGroups = [
  {
    category: 'Backend',
    icon: Server,
    accentColor: '#38bdf8',
    skills: [
      { name: 'Java',            level: 90 },
      { name: 'Spring Boot',     level: 85 },
      { name: 'Spring Security', level: 78 },
      { name: 'REST APIs',       level: 88 },
      { name: 'JWT Auth',        level: 82 },
      { name: 'Microservices',   level: 70 },
    ],
  },
  {
    category: 'Frontend',
    icon: Globe,
    accentColor: '#a78bfa',
    skills: [
      { name: 'React.js',    level: 82 },
      { name: 'JavaScript',  level: 80 },
      { name: 'HTML / CSS',  level: 85 },
      { name: 'Tailwind CSS',level: 78 },
      { name: 'Vite',        level: 75 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    accentColor: '#34d399',
    skills: [
      { name: 'MySQL',      level: 82 },
      { name: 'MongoDB',    level: 78 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Redis',      level: 60 },
      { name: 'JDBC',       level: 75 },
    ],
  },
  {
    category: 'DevOps / Cloud',
    icon: Cloud,
    accentColor: '#fb923c',
    skills: [
      { name: 'AWS',         level: 75 },
      { name: 'Docker',      level: 68 },
      { name: 'Git / GitHub',level: 88 },
      { name: 'CI / CD',     level: 65 },
      { name: 'Linux',       level: 70 },
    ],
  },
]

function SkillBar({ name, level, accentColor, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: '#c7dff0' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: '#4a7fa0' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(56, 189, 248, 0.08)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accentColor}cc, ${accentColor})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-28 px-6" style={{ background: '#0c2240' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase mb-3" style={{ color: '#34d399' }}>03. Skills</p>
          <h2 className="section-title text-white mb-4">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="max-w-xl mb-14" style={{ color: '#7faecf' }}>
            Technologies I work with to build full-stack, cloud-ready applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div key={group.category} variants={cardVariants} className="glass-card p-6 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${group.accentColor}15`,
                      border: `1px solid ${group.accentColor}25`,
                      color: group.accentColor,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      accentColor={group.accentColor}
                      delay={si * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
