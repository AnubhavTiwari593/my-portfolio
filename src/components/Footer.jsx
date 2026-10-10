import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <Code2 size={14} className="text-white" />
          </div>
          <span className="text-slate-400 text-sm font-medium">Anubhav Tiwari</span>
        </div>

        {/* Center */}
        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          Built with
          <Heart size={12} className="text-red-400 fill-red-400" />
          using React &amp; Tailwind CSS
        </p>

        {/* Copyright */}
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Anubhav Tiwari. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
