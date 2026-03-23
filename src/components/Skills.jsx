import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const techIcons = {
  'HTML5': (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
    </svg>
  ),
  'CSS3': (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
      <path fill="#33A9DC" d="M64.001 117.352l36.559-10.142 8.601-96.32H64.001v106.462z"/>
      <path fill="#fff" d="M64 42.991H44.881L43.645 29.529H64V16.306H29.807l.636 7.188 6.537 73.378H64V83.159H49.434l-1.258-14.128H64zm0 43.026l-.056.014L49.216 82.27l-.924-10.384H35.112l1.826 20.493 27.875 7.728.187-.052z"/>
      <path fill="#EBEBEB" d="M63.952 42.991v13.223H81.39l-1.501 16.784-15.937 4.302v13.398l27.947-7.728.205-2.301 3.234-36.053.339-3.625H63.952zm0-26.685v13.222h35.6l.293-3.256.633-7.195.308-2.771H63.952z"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
      <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
    </svg>
  ),
  'React': (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4"/>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13-1.2-21.8-9.6-26.9-7.9-4.7-19.2-3.2-31.2 4.4C49.3 5.7 38.1 4.2 30.1 9c-8.4 5.1-11.7 13.8-9.6 26.9.5 2.3 1 4.7 1.6 7.1-2.4.7-4.7 1.4-6.9 2.3C2.2 50.7 0 56.6 0 64.1c0 7.3 2.2 13.1 6.5 17.8 1.8 1.9 3.8 3.5 6 4.9-.6 2.6-1.1 5-1.6 7.4-2.1 13 1.2 21.8 9.6 26.9 8 4.7 19.2 3.3 31.2-4.2C63 126.1 74.2 127.5 82 122.8c8.4-5.1 11.7-13.8 9.6-26.9-.5-2.4-1-4.9-1.6-7.4 2.2-1.4 4.2-3 6-4.9 4.5-4.7 6.7-10.6 6.7-17.9-.1-7.4-2.4-13.3-5.4-20.5zM52 108.2c-6.1 3.4-12.2 4.7-16.7 2.1-4.4-2.5-6-8.3-4.4-17.4.3-1.8.7-3.6 1.2-5.5 3.3 1 6.8 1.8 10.5 2.4 2.2 3.2 4.7 6.2 7.3 9.1l2.2 2.4c-1.5 2.3-2.9 4.4-4.3 6.3-.5.8-1 1.6-1.5 2.4 1.9 0 3.9-.3 6-.9zM90.4 85.7c1.5 8.8-.1 14.7-4.4 17.3-4.4 2.6-10.5 1.3-16.7-2.1-1.4-1.9-2.8-4-4.2-6.2l2.2-2.4c2.6-2.9 5.1-5.9 7.3-9.1 3.7-.6 7.2-1.4 10.5-2.4.4 1.9.8 3.7 1.2 5.5l.1.4zM64 75.6c-2.1-2.1-4.2-4.4-6.1-6.8 2-.1 4-.2 6.1-.2s4.1.1 6.2.2c-2 2.4-4.1 4.7-6.2 6.8zm-16.3-19.7c1-1.7 2-3.4 3-5 .4-.5.8-1.1 1.2-1.6.5 3.4.9 6.9 1.1 10.6-1.8-.6-3.6-1.3-5.3-2zm14.4 20.1l-.7-.7c-1.3-1.3-2.6-2.8-3.9-4.3 1.3.1 2.6.2 3.9.2 1.4 0 2.7-.1 4.1-.2-1.3 1.5-2.5 3-3.4 4.3l.7.7-.7-.7zm14.4-24.7l1.2 1.6c1 1.7 2 3.4 3 5-1.7.7-3.5 1.4-5.3 2 .2-3.7.6-7.2 1.1-10.6zm-14.4 25.5c-1.5 0-2.9-.1-4.3-.2 1.3-1.5 2.6-3.1 3.9-4.5l.4-.4c.9 1.1 1.7 2.1 2.7 3.1l.7.8c-1 .1-2.1.2-3.1.2h-.3zm14.4-25.5c-2.1.1-4.1.1-6.1.1-2.1 0-4.1 0-6.1-.1.4-3.2.9-6.4 1.6-9.4 1.4.4 2.8.7 4.4.9 1.6-.2 3.1-.5 4.5-.9.7 3 1.2 6.2 1.7 9.4zm-5.3-12c-.6 0-1.2 0-1.7.1-1.7-.4-3.3-.9-4.9-1.5 1.5-1.7 3-3.4 4.6-4.9 1.7 1.5 3.2 3.2 4.7 4.9-1.6.6-3.2 1.1-4.9 1.4 1.5.1 1.5.1 2.2 0z"/>
      </g>
    </svg>
  ),
};

export default function Skills() {
  const { skills } = portfolioData;

  const getSkillIcon = (name) => {
    if (techIcons[name]) return techIcons[name];
    // Fallback emoji icons
    const skill = skills.find(s => s.name === name);
    return <span className="text-4xl">{skill?.icon || '💻'}</span>;
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="orb w-[600px] h-[600px] bg-accent-pink/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
          <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-3">What I work with</p>
          <div className="flex items-center gap-4">
            <h2 className="section-heading gradient-text">Technologies</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent max-w-xs" />
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                scale: 1.12,
                y: -8,
                boxShadow: `0 20px 40px ${skill.color}22`,
              }}
              className="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 cursor-pointer group border border-white/5 hover:border-white/15 transition-all duration-300"
              style={{ '--skill-color': skill.color }}
            >
              {/* Icon */}
              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center">
                  {getSkillIcon(skill.name)}
                </div>
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle, ${skill.color}30, transparent)`, filter: 'blur(8px)' }}
                />
              </div>

              <span className="font-mono text-xs text-text-muted group-hover:text-text-primary transition-colors duration-300 text-center">
                {skill.name}
              </span>

              {/* Level bar */}
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency key */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-2 text-text-muted text-xs font-mono"
        >
          <div className="h-px w-12 bg-white/10" />
          Hover to explore · Bar shows proficiency level
          <div className="h-px w-12 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
