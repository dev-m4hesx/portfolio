import React, { useState } from 'react';
import { 
  Mail, 
  Globe, 
  Github, 
  MapPin, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Heart, 
  ExternalLink,
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function InstagramContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Architecture & Design',
    budget: '$5k - $15k',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[500px] bg-[#e50914]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-[#991b1b]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section Header matching image */}
        <div className="pb-12 border-b border-zinc-800/80 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#e50914] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] pulse-dot"></span>
              <span>GET IN TOUCH • INSTAGRAM & DIRECT INQUIRIES</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase leading-none">
              LET'S WORK TOGETHER <span className="text-[#e50914]">✦</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-sans leading-relaxed">
            I'm currently open for new projects, architectural consulting, and full-stack collaborations. Let's create something amazing that drives measurable results.
          </p>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 items-start">
          
          {/* ================= LEFT COLUMN: CONTACT DETAILS & INSTAGRAM SHOWCASE (6 Cols) ================= */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Status Pill matching reference image */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono-code text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e50914] pulse-dot"></span>
              <span>AVAILABLE FOR FREELANCE & FULL-TIME CONTRACTS</span>
            </div>

            {/* Direct Contact Cards matching the 4-item list in reference image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Gmail Direct Compose with 1-click copy */}
              <a 
                href={personalInfo.contact.gmailComposeUrl || `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#121212] border border-zinc-800 hover:border-[#e50914] transition-all flex items-center justify-between shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-[#e50914] group-hover:bg-[#e50914] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono-code text-zinc-400 uppercase">Gmail / Direct Message</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#e50914] transition-colors truncate max-w-[170px]">
                      {personalInfo.contact.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopyEmail();
                    }}
                    className="text-zinc-400 hover:text-white transition-colors p-1" 
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* Website */}
              <a 
                href={`https://${personalInfo.contact.website}`} 
                target="_blank" 
                rel="noreferrer"
                className="group p-4 rounded-xl bg-[#121212] border border-zinc-800 hover:border-[#e50914] transition-all flex items-center justify-between shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-[#e50914] group-hover:bg-[#e50914] group-hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono-code text-zinc-400 uppercase">Website</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#e50914] transition-colors">
                      {personalInfo.contact.website}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub Profile */}
              <a 
                href={personalInfo.contact.github?.url || "https://github.com/dev-m4hesx"} 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#121212] border border-zinc-800 hover:border-[#e50914] transition-all flex items-center justify-between shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-[#e50914] group-hover:bg-[#e50914] group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono-code text-zinc-400 uppercase">GitHub Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#e50914] transition-colors">
                      {personalInfo.contact.github?.username || "dev-m4hesx"}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#121212] border border-zinc-800 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-[#e50914]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono-code text-zinc-400 uppercase">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.contact.location}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* ================= INSTAGRAM SECTION HUB ================= */}
            <div id="instagram" className="p-6 rounded-2xl bg-gradient-to-b from-[#161616] to-[#0f0f0f] border border-zinc-800 hover:border-[#e50914]/60 transition-all shadow-2xl relative overflow-hidden group">
              
              {/* Subtle Instagram Gradient Highlight */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#e50914]/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

              {/* Instagram Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] shadow-lg">
                    <div className="w-full h-full bg-[#121212] rounded-[14px] flex items-center justify-center text-white">
                      <InstagramIcon className="w-6 h-6 text-[#e50914]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bebas text-2xl text-white tracking-wide uppercase leading-none">
                        INSTAGRAM SPOTLIGHT
                      </h4>
                      <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                    </div>
                    <p className="font-mono-code text-xs text-[#e50914] mt-0.5">
                      {personalInfo.contact.instagram.handle}
                    </p>
                  </div>
                </div>

                {/* Follow Button */}
                <a
                  href={personalInfo.contact.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#e50914] hover:bg-[#b91c1c] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all hover:scale-105"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Followers / Stats Bar */}
              <div className="py-3 flex items-center justify-between text-xs font-mono-code text-zinc-400">
                <span>{personalInfo.contact.instagram.followers} Followers</span>
                <span>•</span>
                <span>{personalInfo.contact.instagram.postsCount} Posts</span>
                <span>•</span>
                <span className="text-zinc-300">Design & Architecture Logs</span>
              </div>

              {/* 4-Grid Recent Posts Visual Preview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {personalInfo.contact.instagram.recentPosts.map((post) => (
                  <a
                    key={post.id}
                    href={personalInfo.contact.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/post relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#e50914] transition-all block shadow-md"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-110 filter brightness-90 group-hover/post:brightness-100"
                    />

                    {/* Post tag badge */}
                    <div className="absolute top-2 left-2">
                      <span className="px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono-code text-zinc-300">
                        {post.type}
                      </span>
                    </div>

                    {/* Hover Overlay with Likes */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/post:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                      <div className="flex items-center gap-1 text-[#e50914] font-bold text-xs">
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        <span>{post.likes}</span>
                      </div>
                      <p className="text-[10px] text-zinc-300 font-sans mt-1 line-clamp-2">
                        {post.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Instagram Bio snippet */}
              <p className="text-xs text-zinc-400 pt-4 font-sans leading-relaxed">
                {personalInfo.contact.instagram.bio}
              </p>

            </div>

          </div>


          {/* ================= RIGHT COLUMN: INTERACTIVE FORM & WORKSPACE MOCKUP (6 Cols) ================= */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Interactive Contact Form */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#121212] border border-zinc-800/90 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div>
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase leading-none">
                    SEND A DIRECT MESSAGE
                  </h3>
                  <p className="font-mono-code text-xs text-zinc-400 mt-1">
                    Typically replies in less than 4 hours
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 pulse-dot"></div>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bebas text-3xl text-white tracking-wide">MESSAGE DISPATCHED!</h4>
                  <p className="text-zinc-300 text-sm max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you, <span className="text-[#e50914] font-semibold">{formData.name}</span>! Your message has been received. I will reach out shortly to discuss your project.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', service: 'Full-Stack Architecture & Design', budget: '$5k - $15k', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono-code text-white mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                  
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#e50914] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-400">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#e50914] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Focus & Budget row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-400">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#e50914] transition-colors"
                      >
                        <option value="UX/UI & Design Systems">UX/UI & Design Systems</option>
                        <option value="Backend & Scalable APIs">Backend & Scalable APIs</option>
                        <option value="Full-Stack Product Architecture">Full-Stack Product Architecture</option>
                        <option value="Codebase & System Audit">Codebase & System Audit</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-400">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#e50914] transition-colors"
                      >
                        <option value="Under $5k">Under $5k</option>
                        <option value="$5k - $15k">$5k - $15k</option>
                        <option value="$15k - $30k">$15k - $30k</option>
                        <option value="$30k+">$30k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-400">
                      Project Goals & Context
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to design or build..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#e50914] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#e50914] hover:bg-[#b91c1c] text-white font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(229,9,20,0.4)] transition-all hover:scale-[1.01]"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>

            {/* Laptop Workstation Showcase matching reference image bottom right */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-[#161616] to-[#0a0a0a] border border-zinc-800/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 max-w-xs">
                <div className="flex items-center gap-2 text-[10px] font-mono-code text-[#e50914] uppercase tracking-widest">
                  <Laptop className="w-3.5 h-3.5" />
                  <span>HARDWARE & WORKSTATION</span>
                </div>
                <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight">
                  WE DESIGN DIGITAL EXPERIENCES
                </h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Dual-monitor Unix engineering environment paired with calibrated color profiles for sub-pixel visual accuracy.
                </p>
              </div>

              {/* Laptop photo from reference image */}
              <div className="relative w-48 sm:w-56 shrink-0 rounded-xl overflow-hidden border border-zinc-800/80 shadow-[0_0_30px_rgba(229,9,20,0.2)] bg-black">
                <img
                  src="/laptop-desk.png"
                  alt="Workstation and Laptop Setup"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
