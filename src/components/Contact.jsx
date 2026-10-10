import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, Link2, Mail, Download, Send } from 'lucide-react'

const socials = [
  {
    icon: GitBranch,
    label: 'GitHub',
    href: 'https://github.com/AnubhavTiwari593',
    description: '@AnubhavTiwari593',
    color: 'hover:border-slate-400/40 hover:bg-slate-800/30',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anubhav593',
    description: 'Connect with me',
    color: 'hover:border-blue-500/40 hover:bg-blue-500/5',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:anubhavtiwari593@gmail.com',
    description: 'anubhavtiwari593@gmail.com',
    color: 'hover:border-red-500/40 hover:bg-red-500/5',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-pink-400 font-mono text-sm tracking-widest uppercase mb-3">07. Contact</p>
          <h2 className="section-title text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg mb-3">
            Have an opportunity, project idea, or just want to say hi?
          </p>
          <p className="text-slate-500 mb-14">
            I'm currently open to full-time roles and interesting collaborations.
          </p>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {socials.map(({ icon: Icon, label, href, description, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              className={`glass-card p-5 flex flex-col items-center gap-3 border border-white/5 transition-all duration-300 ${color} group hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon size={22} className="text-slate-300" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:anubhavtiwari593@gmail.com"
            className="glow-btn flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-600 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
          >
            <Send size={16} /> Say Hello
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-slate-300 border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all"
          >
            <Download size={16} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
