import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, Link2, Mail, ChevronDown, Download } from 'lucide-react'

const CODE_SYMBOLS = [
  { text: '</>',   top: '15%', left: '5%',   size: '2.5rem' },
  { text: '{ }',   top: '25%', right: '6%',  size: '2rem'   },
  { text: 'Java',  top: '60%', left: '3%',   size: '1.5rem' },
  { text: 'Spring',top: '70%', right: '4%',  size: '1.5rem' },
  { text: 'SQL',   top: '40%', left: '7%',   size: '1.2rem' },
  { text: 'API',   top: '80%', right: '8%',  size: '1.2rem' },
  { text: '=>',    top: '50%', right: '12%', size: '2rem'   },
  { text: '[]',    top: '35%', left: '10%',  size: '1.8rem' },
]

const TECH_PILLS = ['Java', 'Spring Boot', 'React', 'AWS', 'MongoDB', 'Docker']

// Ultra-Realistic Organic Sakura Falling Effect with Physics Flutter & Wind Gusts
function FullFlowerBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let windTimer = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Realistic physics flower objects
    const flowers = Array.from({ length: 38 }, () => {
      const isLeftSide = Math.random() < 0.4
      let startX = isLeftSide
          ? Math.random() * (canvas.width * 0.17)
          : canvas.width * 0.83 + Math.random() * (canvas.width * 0.17)

      return {
        x: startX,
        y: Math.random() * (canvas.height + 200) - 100,
        radius: Math.random() * 5 + 4,
        speedY: Math.random() * 0.18 + 0.08, // Natural slow gravity fall
        speedX: (Math.random() - 0.5) * 0.1,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.02,
        flutterSpeed: Math.random() * 0.03 + 0.01, // 3D tumbling/flipping speed
        flutterOffset: Math.random() * Math.PI,
        alpha: Math.random() * 0.35 + 0.25,
        isLeft: isLeftSide
      }
    })

    const drawRealisticFlower = (x, y, radius, angle, flutter, alpha) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      // Simulating 3D physical tumbling by scaling width using cosine wave
      ctx.scale(Math.cos(flutter), 1)

      const numPetals = 5
      // Soft organic multi-shade pink color
      ctx.fillStyle = `rgba(252, 195, 245, ${alpha})`
      ctx.shadowColor = 'rgba(230, 130, 210, 0.3)'
      ctx.shadowBlur = 10

      for (let i = 0; i < numPetals; i++) {
        ctx.save()
        ctx.rotate((i * Math.PI * 2) / numPetals)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.bezierCurveTo(-radius * 0.5, -radius * 0.7, -radius * 0.8, -radius * 1.4, 0, -radius * 1.7)
        ctx.bezierCurveTo(radius * 0.8, -radius * 1.4, radius * 0.5, -radius * 0.7, 0, 0)
        ctx.fill()
        ctx.restore()
      }

      // Natural yellow-pink core center
      ctx.beginPath()
      ctx.arc(0, 0, radius * 0.28, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 120, 150, ${alpha + 0.2})`
      ctx.fill()

      ctx.restore()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Periodic natural wind gust effect changing direction softly
      windTimer += 0.008
      const currentWind = Math.sin(windTimer) * 0.25

      flowers.forEach(f => {
        // Organic Physics calculations
        f.y += f.speedY
        f.flutterOffset += f.flutterSpeed

        // Horizontal swaying combined with wind and tumbling drift
        f.x += Math.sin(f.flutterOffset) * 0.35 + currentWind + f.speedX
        f.angle += f.spinSpeed

        // Reset seamlessly when crossing bottom
        if (f.y > canvas.height + 30) {
          f.y = -30
          f.x = f.isLeft
              ? Math.random() * (canvas.width * 0.17)
              : canvas.width * 0.83 + Math.random() * (canvas.width * 0.17)
        }

        drawRealisticFlower(f.x, f.y, f.radius, f.angle, f.flutterOffset, f.alpha)
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
      <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(13, 11, 26, 0.45), rgba(10, 8, 20, 0.8)), url('/hero-bg.jpg')`,
          }}
      >
        {/* Soft Flowers Motion Background */}
        <FullFlowerBackground />

        {/* Floating symbols */}
        {CODE_SYMBOLS.map((s, i) => (
            <motion.span
                key={i}
                className="code-float text-pink-300 pointer-events-none drop-shadow-[0_0_12px_rgba(244,114,182,0.4)]"
                style={{ top: s.top, left: s.left, right: s.right, fontSize: s.size }}
                animate={{ y: [0, -10, 0], opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              {s.text}
            </motion.span>
        ))}

        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
        >
          {/* Avatar */}
          <motion.div variants={fadeIn} className="mb-3 relative">
            <div
                className="w-30 h-30 md:w-40 md:h-40 rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #ec4899, #a855f7)',
                  boxShadow: '0 0 45px rgba(236, 72, 153, 0.5)',
                }}
            >
              <div
                  className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                  style={{ background: '#18122B' }}
              >
                <img
                    src="/profile.jpg"
                    alt="Anubhav Tiwari"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                />
                <div
                    className="hidden w-full h-full rounded-full items-center justify-center text-4xl font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #f472b6, #9333ea)' }}
                >
                </div>
              </div>
            </div>
            <span
                className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2"
                style={{ background: '#4ade80', borderColor: '#18122B', boxShadow: '0 0 10px rgba(74,222,128,0.6)' }}
            />
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm font-mono tracking-widest uppercase mb-3" style={{ color: '#f472b6' }}>
            Hello, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight mb-3">
          <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-purple-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            Anubhav Tiwari
          </span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-semibold mb-5" style={{ color: '#fbcfe8' }}>
            Java Full Stack Developer
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base md:text-lg max-w-xl mb-8 leading-relaxed" style={{ color: '#e9d5ff' }}>
            Building{' '}
            <span className="font-medium" style={{ color: '#f472b6' }}>secure</span> and{' '}
            <span className="font-medium" style={{ color: '#c084fc' }}>scalable</span> web applications with
            Java, Spring Boot &amp; React.
          </motion.p>

          {/* Tech pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-10">
            {TECH_PILLS.map((tech) => (
                <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-full transition-all"
                    style={{
                      border: '1px solid rgba(244, 114, 182, 0.35)',
                      color: '#fbcfe8',
                      background: 'rgba(244, 114, 182, 0.12)',
                      boxShadow: '0 0 12px rgba(244, 114, 182, 0.15)',
                    }}
                >
              {tech}
            </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10">
            <a
                href="#projects"
                className="glow-btn px-6 py-3 rounded-xl font-semibold text-white transition-all text-sm"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  boxShadow: '0 4px 24px rgba(236, 72, 153, 0.45)',
                }}
            >
              View Projects →
            </a>
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all text-sm"
                style={{
                  color: '#fbcfe8',
                  border: '1px solid rgba(244, 114, 182, 0.3)',
                  background: 'rgba(244, 114, 182, 0.08)',
                }}
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex gap-4 justify-center">
            {[
              { icon: GitBranch, href: 'https://github.com/AnubhavTiwari593', label: 'GitHub' },
              { icon: Link2,     href: 'https://linkedin.com/in/anubhav593', label: 'LinkedIn' },
              { icon: Mail,      href: 'mailto:anubhavtiwari593@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      color: '#fbcfe8',
                      border: '1px solid rgba(244, 114, 182, 0.25)',
                      background: 'rgba(244, 114, 182, 0.06)',
                    }}
                >
                  <Icon size={18} />
                </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ color: '#f472b6' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Explore My Work</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={30} />
          </motion.div>
        </motion.div>
      </section>
  )
}