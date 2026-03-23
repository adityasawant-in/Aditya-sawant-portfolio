import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col`}
        style={{
          transition: 'all 0.5s ease',
        }}
      >
        {/* Card hover glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px at 50% 0%, ${project.accentColor}08, transparent)`,
          }}
        />

        {/* Image / Visual */}
        <div className={`relative bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center overflow-hidden`}>
          {/* Grid pattern */}
          <div className="absolute inset-0 dot-grid opacity-30" />

          {/* Main emoji */}
          <motion.div
            className="relative z-10 text-7xl"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
          >
            {project.emoji}
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-mono px-2 py-1 rounded-full">
              <Star size={10} fill="currentColor" />
              Featured
            </div>
          )}

          {/* Glowing border bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-xl text-text-primary mb-3 group-hover:text-accent-cyan transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono rounded-md border"
                style={{
                  background: `${project.accentColor}10`,
                  borderColor: `${project.accentColor}30`,
                  color: project.accentColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm font-mono group/link"
            >
              <Github size={16} className="group-hover/link:text-accent-cyan transition-colors" />
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 ml-auto text-sm font-mono px-4 py-2 rounded-lg transition-all duration-300"
              style={{
                background: `${project.accentColor}15`,
                border: `1px solid ${project.accentColor}30`,
                color: project.accentColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${project.accentColor}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${project.accentColor}15`;
              }}
            >
              Live Demo <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="orb w-[500px] h-[500px] bg-accent-purple/8 top-0 right-0" />
        <div className="orb w-[400px] h-[400px] bg-accent-cyan/5 bottom-0 left-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-3">Things I've built</p>
          <div className="flex items-center gap-4">
            <h2 className="section-heading gradient-text">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent max-w-xs" />
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/adityasawant-in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
