import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_7unld7u",      // replace with your service ID
        "template_xbgzu1f",     // replace with your template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "cgIPwGuMcOHLp1zsI"        // replace with your public key
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="orb w-[500px] h-[500px] bg-accent-cyan/8 bottom-0 right-1/4" />
        <div className="orb w-[400px] h-[400px] bg-accent-purple/8 top-10 left-0" />
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
          <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-3">Let's talk</p>
          <div className="flex items-center gap-4">
            <h2 className="section-heading gradient-text">Get In Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent max-w-xs" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              I'm currently open to new opportunities. Whether you have a project in mind,
              want to collaborate, or just want to say hello — my inbox is always open!
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: <Mail size={20} />,
                  label: 'Email',
                  value: personal.email,
                  href: `mailto:${personal.email}`,
                  color: 'text-accent-cyan',
                },
                {
                  icon: <MapPin size={20} />,
                  label: 'Location',
                  value: personal.location,
                  href: null,
                  color: 'text-accent-purple',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-12 h-12 glass-card rounded-xl flex items-center justify-center ${item.color} border border-white/5`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-text-muted text-xs font-mono mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className={`${item.color} hover:underline font-medium`}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text-primary font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-text-muted text-xs font-mono tracking-wider uppercase mb-4">Social</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={22} />, href: personal.github, label: 'GitHub', color: '#ffffff' },
                  { icon: <Linkedin size={22} />, href: personal.linkedin, label: 'LinkedIn', color: '#0077b5' },
                  { icon: <Mail size={22} />, href: `mailto:${personal.email}`, label: 'Email', color: '#00d4ff' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-text-secondary border border-white/5 hover:border-white/15 transition-all duration-300"
                    style={{ color: 'inherit' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = social.color; e.currentTarget.style.borderColor = `${social.color}40`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <CheckCircle className="text-accent-green mb-4" size={56} />
                  <h3 className="font-display font-bold text-2xl text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 btn-outline text-sm py-2 px-6"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-text-muted text-xs font-mono mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-black placeholder-gray-500 font-sans focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs font-mono mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-black placeholder-gray-500 font-sans focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs font-mono mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-black placeholder-gray-500 font-sans focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
