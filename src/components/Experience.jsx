import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function TimelineCard({ item, index, side }) {
  const isEdu = item.type === 'education';
  const Icon = isEdu ? GraduationCap : Briefcase;
  const accentColor = isEdu ? 'accent-cyan' : 'accent-purple';
  const borderColor = isEdu ? 'border-cyan-500/30' : 'border-purple-500/30';
  const bgColor = isEdu ? 'bg-cyan-500/10' : 'bg-purple-500/10';
  const tagColor = isEdu ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' : 'bg-purple-500/10 text-purple-300 border-purple-500/20';

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${side === 'left' ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'} mb-12`}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className={`glass-card glass-card-hover rounded-2xl p-6 border ${borderColor}`}
      >
        {/* Year badge */}
        <div className={`inline-flex items-center gap-2 ${bgColor} border ${borderColor} rounded-full px-3 py-1 text-xs font-mono mb-4 ${isEdu ? 'text-cyan-300' : 'text-purple-300'}`}>
          <Calendar size={12} />
          {item.year}
        </div>

        {/* Icon + Title */}
        <div className={`flex items-start gap-3 mb-3 ${side === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`w-10 h-10 rounded-lg ${bgColor} border ${borderColor} flex items-center justify-center flex-shrink-0 ${isEdu ? 'text-accent-cyan' : 'text-purple-400'}`}>
            <Icon size={18} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-text-primary text-lg leading-tight">{item.title}</h3>
            <div className="flex items-center gap-1 text-text-muted text-sm mt-1">
              <MapPin size={12} />
              {item.institution} · {item.location}
            </div>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${side === 'left' ? 'lg:justify-end' : ''}`}>
          {item.tags.map((tag) => (
            <span key={tag} className={`px-2 py-1 rounded-md text-xs font-mono border ${tagColor}`}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const { education, experience } = portfolioData;

  // Merge and sort chronologically
  const allItems = [...education, ...experience];

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="orb w-[500px] h-[500px] bg-accent-cyan/5 -bottom-20 -left-20" />
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
          <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-3">My journey</p>
          <div className="flex items-center gap-4">
            <h2 className="section-heading gradient-text">Education & Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent max-w-xs" />
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <div className="w-3 h-3 rounded-full bg-accent-cyan" />
            <span>Education</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <div className="w-3 h-3 rounded-full bg-accent-purple" />
            <span>Experience</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-purple/40 to-transparent transform -translate-x-1/2" />

          {/* Education column - left */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-accent-cyan text-sm tracking-wider uppercase mb-6 flex items-center gap-2"
              >
                <GraduationCap size={16} />
                Education
              </motion.h3>
              {education.map((item, i) => (
                <TimelineCard key={i} item={item} index={i} side="left" />
              ))}
            </div>

            {/* Experience column - right */}
            <div className="lg:mt-20">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-accent-purple text-sm tracking-wider uppercase mb-6 flex items-center gap-2"
              >
                <Briefcase size={16} />
                Experience
              </motion.h3>
              {experience.map((item, i) => (
                <TimelineCard key={i} item={item} index={i} side="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
