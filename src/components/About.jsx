import { motion } from 'framer-motion';
import { Code2, Zap, Palette, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  '💡': <Zap size={22} />,
  '⚡': <Code2 size={22} />,
  '🎨': <Palette size={22} />,
  '🤝': <Users size={22} />,
};

const highlightColors = [
  { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-accent-cyan', glow: 'rgba(0,212,255,0.1)' },
  { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', glow: 'rgba(124,58,237,0.1)' },
  { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', glow: 'rgba(255,45,120,0.1)' },
  { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', glow: 'rgba(0,255,136,0.1)' },
];

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="orb w-[400px] h-[400px] bg-accent-purple/6 top-10 right-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <div className="flex items-center gap-4">
            <h2 className="section-heading gradient-text">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent max-w-xs" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-text-secondary text-lg leading-relaxed mb-6"
            >
              {about.paragraph1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              {about.paragraph2}
            </motion.p>

            {/* Code snippet decoration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card rounded-xl p-5 font-mono text-sm border-l-2 border-accent-cyan/50"
            >
              <div className="text-text-muted mb-2">// My approach</div>
              <div className="text-accent-green">const</div>
              <div className="ml-4">
                <span className="text-accent-cyan">developer</span>
                <span className="text-white"> = </span>
                <span className="text-yellow-400">{'{'}</span>
              </div>
              <div className="ml-8 text-text-secondary">
                <div><span className="text-purple-400">name</span>: <span className="text-accent-green">"Aditya Sawant"</span>,</div>
                <div><span className="text-purple-400">passion</span>: <span className="text-accent-green">"Developer"</span>,</div>
                <div><span className="text-purple-400">coffee</span>: <span className="text-accent-cyan">Infinity</span>,</div>
                <div><span className="text-purple-400">available</span>: <span className="text-accent-cyan">true</span></div>
              </div>
              <div className="ml-4 text-yellow-400">{'}'}</div>
            </motion.div>
          </div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass-card glass-card-hover rounded-xl p-6 border ${highlightColors[i].border}`}
                style={{ boxShadow: `0 0 30px ${highlightColors[i].glow}` }}
              >
                <div className={`w-12 h-12 rounded-lg ${highlightColors[i].bg} border ${highlightColors[i].border} flex items-center justify-center mb-4 ${highlightColors[i].text}`}>
                  {iconMap[item.icon]}
                </div>
                <h3 className={`font-display font-semibold text-lg mb-2 ${highlightColors[i].text}`}>
                  {item.label}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
