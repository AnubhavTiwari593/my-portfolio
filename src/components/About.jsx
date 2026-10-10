
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, MapPin, GraduationCap } from 'lucide-react'

const fadeUp = {
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

const highlights = [
  { icon: MapPin, label: 'Location', value: 'India' },
  {
    icon: GraduationCap,
    label: 'Degree',
    value: 'B.Tech – Information Technology',
  },
  { icon: User, label: 'Status', value: 'Open to Opportunities' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
      <section
          id="about"
          ref={ref}
          className="py-28 px-6"
          style={{ background: '#0c2240' }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
          >
            <p
                className="font-mono text-sm tracking-widest uppercase mb-3"
                style={{ color: '#38bdf8' }}
            >
              01. About me
            </p>

            <h2 className="section-title text-white mb-12">
              Who I <span className="gradient-text">Am</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                transition={{ delay: 0.1 }}
                className="space-y-5 leading-relaxed"
                style={{ color: '#7faecf' }}
            >
              <p>
                I'm{' '}
                <span className="text-white font-semibold">
                Anubhav Tiwari
              </span>
                , an aspiring Java Backend Developer with a strong foundation
                in backend development using{' '}
                <span
                    className="font-medium"
                    style={{ color: '#38bdf8' }}
                >
                Java and Spring Boot
              </span>
                . I also have experience building RESTful APIs and working
                with SQL, MySQL, MongoDB, and{' '}
                <span
                    className="font-medium"
                    style={{ color: '#a78bfa' }}
                >
                React.js
              </span>
                .
              </p>

              <p>
                I've worked on backend applications, including a Job Portal
                with role-based authentication and job application management,
                and a Smart Email Assistant using Spring Boot and Gemini AI.
                I focus on writing clean, maintainable code and building
                reliable APIs that solve real-world problems.
              </p>

              <p>
                I recently completed my B.Tech in Information Technology
                from KIET Group of Institutions, Ghaziabad. I'm interested
                in backend engineering, database management, AWS cloud
                technologies, and AI-integrated applications. I'm continuously
                improving my Java and Spring Boot skills while exploring
                how AI can enhance backend applications.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                transition={{ delay: 0.2 }}
                className="space-y-4"
            >
              {highlights.map(({ icon: Icon, label, value }) => (
                  <div
                      key={label}
                      className="glass-card p-5 flex items-center gap-4 transition-all"
                  >
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.2)',
                          color: '#38bdf8',
                        }}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <p
                          className="text-xs uppercase tracking-wider font-mono"
                          style={{ color: '#4a7fa0' }}
                      >
                        {label}
                      </p>
                      <p className="text-white font-semibold">
                        {value}
                      </p>
                    </div>
                  </div>
              ))}

              {/* Quick Stats */}
              <div className="glass-card p-5">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { n: '4+', l: 'Projects' },
                    { n: '300+', l: 'DSA Problems' },
                    { n: '5+', l: 'Certifications' },
                  ].map(({ n, l }) => (
                      <div key={l}>
                        <p className="text-2xl font-black gradient-text">
                          {n}
                        </p>
                        <p
                            className="text-xs mt-1"
                            style={{ color: '#4a7fa0' }}
                        >
                          {l}
                        </p>
                      </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
