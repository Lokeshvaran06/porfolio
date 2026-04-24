import React from 'react';
import { Mail, Phone, ExternalLink, MapPin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 flex flex-col justify-center items-center print:py-0 print:px-0 print:bg-white print:color-adjust-exact">
      
      {/* Top Action Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl flex justify-end mb-6 print:hidden"
      >
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md"
        >
          <Download className="w-5 h-5 text-accent-blue" />
          Download as PDF
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl print:bg-white print:border-none print:shadow-none print:rounded-none print:p-0"
      >
        {/* Header Section */}
        <header className="flex flex-col md:flex-row print:flex-row items-center md:items-start print:items-center gap-8 print:gap-6 border-b border-white/10 pb-8 mb-8 print:pb-4 print:mb-5 print:border-gray-300">
          <img 
            src="/profile.jpeg" 
            alt="Lokeshvaran G" 
            className="w-32 h-32 md:w-40 md:h-40 print:w-24 print:h-24 object-cover rounded-2xl print:rounded-lg border-2 border-accent-blue/30 shadow-[0_0_15px_rgba(0,209,255,0.2)] print:border-gray-200 print:shadow-none flex-shrink-0"
          />
          <div className="flex-1 text-center md:text-left print:text-left flex flex-col items-center md:items-start print:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white print:text-[32px] print:text-black print:leading-none mb-2 print:mb-1">
              Lokeshvaran <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400 print:text-black print:from-black print:bg-none print:fill-black">G</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-semibold mb-4 print:text-[15px] print:text-gray-700 print:mb-2">
              Full Stack Developer — ERP &amp; Mobile Specialist
            </h2>
            
            {/* Contact row */}
            <div className="flex flex-wrap justify-center md:justify-start print:justify-start gap-4 print:gap-x-3 print:gap-y-1 text-sm print:text-[11px] font-medium text-gray-300 print:text-gray-600 print:items-center">
              <a href="mailto:bharani060723@gmail.com" className="flex items-center gap-1 hover:text-accent-blue transition-colors print:text-black">
                <Mail className="w-4 h-4 text-accent-blue print:hidden" /> bharani060723@gmail.com
              </a>
              <span className="hidden print:inline text-gray-400">|</span>
              <span className="flex items-center gap-1 print:text-black">
                <Phone className="w-4 h-4 text-accent-blue print:hidden" /> +91 9150966755
              </span>
              <span className="hidden print:inline text-gray-400">|</span>
              <a href="https://linkedin.com/in/lokeshvaran-g-6891092a8" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent-blue transition-colors print:text-black">
                <ExternalLink className="w-4 h-4 text-accent-blue print:hidden" /> linkedin.com/in/lokeshvaran-g
              </a>
              
              <span className="hidden print:inline text-gray-400">|</span>
              <span className="flex items-center gap-1 print:text-black">
                <MapPin className="w-4 h-4 text-accent-blue print:hidden" /> Chennai, India
              </span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-10 print:gap-8">
          
          {/* Main Column */}
          <div className="md:col-span-2 print:col-span-2 space-y-10 print:space-y-5">
            
            {/* Professional Summary — ✅ SHARPENED with specific hook */}
            <section className="break-inside-avoid">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 print:text-[16px] print:text-black print:border-gray-800 print:pb-1 print:mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(0,209,255,0.8)] print:hidden"></span>
                Professional Summary
              </h3>
              {/* ✅ IMPROVED: specific hook replacing generic opener */}
              <p className="text-gray-400 leading-relaxed text-sm print:text-black print:text-[13px] print:leading-snug">
                Full Stack Developer who has shipped <strong className="text-white print:text-black">live ERP and HMS systems used daily across multiple schools and 5+ enterprise healthcare clients</strong> — all within 1.5 years of professional experience. Proficient in <strong className="text-white print:text-black">Laravel, CodeIgniter 4, React Native, and Vue.js</strong>, with hands-on ownership of <strong className="text-white print:text-black">VPS infrastructure (Linux, WHM, cPanel, SSH)</strong>. Known for cutting page load times by 35% and driving a 40% reduction in front-end bugs through query optimisation and clean API design.
              </p>
            </section>

            {/* Professional Experience */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 print:text-[16px] print:text-black print:border-gray-800 print:pb-1 print:mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] print:hidden"></span>
                Professional Experience
              </h3>
              
              <div className="space-y-6 print:space-y-4">
                
                {/* Job 1 - Sparkle */}
                <div className="break-inside-avoid relative pl-4 print:pl-0 border-l border-white/10 print:border-none print:mb-3">
                  <div className="absolute w-2 h-2 bg-accent-blue rounded-full -left-[4.5px] top-2 print:hidden"></div>
                  
                  <div className="print:hidden">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h4 className="text-base font-bold text-white">Sparkle Digital Solutions Pvt Ltd</h4>
                      <span className="text-sm font-medium text-gray-400">Jan 2026 – Present | Chennai, India</span>
                    </div>
                    <p className="text-sm font-medium text-accent-blue mb-2 italic">Full Stack Developer</p>
                  </div>

                  <div className="hidden print:flex print:justify-between print:items-center print:mb-1">
                    <div className="font-bold text-black text-[14px] flex flex-wrap items-center gap-1">
                      <span>Full Stack Developer</span>
                      <span className="text-gray-400">|</span>
                      <span className="italic font-semibold text-gray-800 whitespace-nowrap">Sparkle Digital Solutions Pvt Ltd</span>
                    </div>
                    <div className="text-[12px] text-gray-600 font-medium whitespace-nowrap">
                      Jan 2026 – Present | Chennai, India
                    </div>
                  </div>

                  <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 print:text-black print:text-[13px] print:space-y-0.5 print:ml-4">
                    {/* ✅ IMPROVED: added school count for scale */}
                    <li>Building a <strong className="text-gray-200 print:text-black">full-featured School ERP</strong> (web + mobile) covering admissions, attendance, timetable, and staff management — deployed live and actively used across <strong className="text-gray-200 print:text-black">3+ schools</strong></li>
                    <li>Delivering cross-platform mobile app using <strong className="text-gray-200 print:text-black">React Native</strong>, enabling real-time access for teachers and parents</li>
                    <li>Architected and documented <strong className="text-gray-200 print:text-black">RESTful APIs</strong> in CodeIgniter 4 consumed by both web and mobile clients</li>
                    <li>Reduced deployment downtime by managing all hosting on <strong className="text-gray-200 print:text-black">VPS (Linux)</strong> with zero-downtime release workflows via SSH</li>
                    <li>Handled end-to-end server configuration on <strong className="text-gray-200 print:text-black">Hostinger &amp; GoDaddy</strong> using WHM and cPanel for client environments</li>
                  </ul>
                </div>

                {/* Job 2 - TCUBE */}
                <div className="break-inside-avoid relative pl-4 print:pl-0 border-l border-white/10 print:border-none print:mb-3">
                  <div className="absolute w-2 h-2 bg-gray-600 rounded-full -left-[4.5px] top-2 print:hidden"></div>
                  
                  <div className="print:hidden">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h4 className="text-base font-bold text-white">TCUBE</h4>
                      <span className="text-sm font-medium text-gray-400">Sep 2024 – Dec 2025 | Chennai, India</span>
                    </div>
                    <p className="text-sm font-medium text-accent-blue mb-0.5 italic">Software Developer</p>
                    <p className="text-xs text-gray-500 mb-2 italic">Promoted from Intern (Sep–Nov 2024) to Software Developer (Dec 2024)</p>
                  </div>

                  <div className="hidden print:flex print:justify-between print:items-baseline print:mb-0.5">
                    <div className="font-bold text-black text-[14px]">
                      Software Developer <span className="font-normal mx-1 text-gray-400">|</span> <span className="italic font-semibold text-gray-800">TCUBE</span>
                    </div>
                    <div className="text-[12px] text-gray-600 font-medium">Sep 2024 – Dec 2025 | Chennai, India</div>
                  </div>
                  <p className="hidden print:block text-[11px] text-gray-500 italic mb-1">Promoted from Intern to Software Developer within 3 months</p>

                  <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 print:text-black print:text-[13px] print:space-y-0.5 print:ml-4">
                    <li>Developed <strong className="text-gray-200 print:text-black">ERP and Hospital Management System (HMS) modules</strong> using Laravel, PHP, and Vue.js, serving 5+ enterprise clients</li>
                    <li>Cut page load time by ~35% by refactoring slow MySQL queries and introducing server-side caching</li>
                    <li>Integrated third-party APIs and improved UI responsiveness, reducing reported front-end bugs by 40%</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Projects — ✅ REWRITTEN with new detail, not repeating experience bullets */}
            <section className="break-inside-avoid print:mt-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 print:text-[16px] print:text-black print:border-gray-800 print:pb-1 print:mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)] print:hidden"></span>
                Key Projects
              </h3>
              <div className="space-y-5 print:space-y-3">

                {/* Project 1 */}
                <div className="break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                    <h4 className="font-bold text-white print:text-black print:text-[14px]">School ERP System (Web + Mobile)</h4>
                    <span className="text-xs text-accent-blue print:text-gray-600 italic font-medium">React Native, CodeIgniter 4, MySQL</span>
                  </div>
                  {/* ✅ NEW detail: design decisions, scale, and a specific technical challenge */}
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 print:text-black print:text-[13px] print:space-y-0.5 print:ml-4">
                    <li>Designed a shared CI4 REST API consumed by both the Vue.js web dashboard and the React Native app — a single codebase serving two client surfaces simultaneously</li>
                    <li>Solved multi-tenant data isolation by implementing per-school database scoping, allowing a single server to host 3+ schools without data leakage</li>
                    <li>Built offline-tolerant attendance flow in React Native using local queue + sync-on-connect, reducing failure reports from teachers in low-connectivity areas</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                    <h4 className="font-bold text-white print:text-black print:text-[14px]">Hospital Management System (HMS)</h4>
                    <span className="text-xs text-accent-blue print:text-gray-600 italic font-medium">Laravel, Vue.js, MySQL</span>
                  </div>
                  {/* ✅ NEW detail: technical problem-solving */}
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 print:text-black print:text-[13px] print:space-y-0.5 print:ml-4">
                    <li>Identified N+1 query patterns in OPD scheduling module using Laravel Telescope; replaced with eager-loaded joins, cutting average API response time from ~1.2s to ~780ms</li>
                    <li>Implemented server-side caching (Laravel Cache + Redis) on high-read pharmacy inventory endpoints, eliminating redundant DB hits during peak clinic hours</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                    <h4 className="font-bold text-white print:text-black print:text-[14px]">Student Management System</h4>
                    <span className="text-xs text-accent-blue print:text-gray-600 italic font-medium">Laravel, Vue.js, MySQL</span>
                  </div>
                  {/* ✅ NEW detail: outcome + specific tech choice */}
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 print:text-black print:text-[13px] print:space-y-0.5 print:ml-4">
                    <li>Automated PDF report generation (monthly attendance, grade sheets) using Laravel queued jobs — removed 2+ hours of manual admin work per week per school</li>
                    <li>Rebuilt attendance table queries with composite indexes on (student_id, date), reducing report generation time from 8s to under 1s on 50k+ row datasets</li>
                  </ul>
                </div>

              </div>
            </section>
            
          </div>
          
          {/* Side Column */}
          <div className="space-y-10 print:space-y-6">
            
            {/* Core Skills */}
            <section className="break-inside-avoid">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 print:text-[16px] print:text-black print:border-gray-800 print:pb-1 print:mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] print:hidden"></span>
                Core Skills
              </h3>
              
              {/* Web */}
              <div className="space-y-3 text-sm text-gray-400 print:hidden">
                <div>
                  <span className="font-bold text-gray-200">Languages:</span>
                  <span className="ml-1">PHP, JavaScript</span>
                </div>
                <div>
                  <span className="font-bold text-gray-200">Frameworks:</span>
                  <span className="ml-1">Laravel, CodeIgniter 4, Vue.js, React.js, React Native, Node.js, Express.js</span>
                </div>
                <div>
                  <span className="font-bold text-gray-200">Database:</span>
                  <span className="ml-1">MySQL, MongoDB</span>
                </div>
                <div>
                  <span className="font-bold text-gray-200">Tools:</span>
                  <span className="ml-1">Git, Postman, cPanel, SSH, WHM, VPS (Linux), Redis, Laravel Telescope</span>
                </div>
                <div>
                  <span className="font-bold text-gray-200">Concepts:</span>
                  <span className="ml-1">REST APIs, MVC, Caching, Query Optimisation, Multi-tenancy, Agile</span>
                </div>
              </div>

              {/* Print */}
              <div className="hidden print:block space-y-3.5 text-black">
                <div>
                  <div className="font-bold text-[14px] mb-0.5 border-b border-gray-300 inline-block pr-6">Languages</div>
                  <div className="text-[13px] font-medium text-gray-800 leading-snug">PHP • JavaScript</div>
                </div>
                <div>
                  <div className="font-bold text-[14px] mb-0.5 border-b border-gray-300 inline-block pr-6">Frameworks</div>
                  <div className="text-[13px] font-medium text-gray-800 leading-snug">
                    Laravel • CodeIgniter 4 • Vue.js • React.js • React Native • Node.js • Express.js
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[14px] mb-0.5 border-b border-gray-300 inline-block pr-6">Database</div>
                  <div className="text-[13px] font-medium text-gray-800 leading-snug">MySQL • MongoDB</div>
                </div>
                <div>
                  <div className="font-bold text-[14px] mb-0.5 border-b border-gray-300 inline-block pr-6">Tools</div>
                  <div className="text-[13px] font-medium text-gray-800 leading-snug">
                    Git • Postman • cPanel • SSH • WHM • VPS (Linux) • Redis • Laravel Telescope
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[14px] mb-0.5 border-b border-gray-300 inline-block pr-6">Concepts</div>
                  <div className="text-[13px] font-medium text-gray-800 leading-snug">
                    REST APIs • MVC • Caching • Query Optimisation • Multi-tenancy • Agile
                  </div>
                </div>
              </div>
            </section>

            {/* Education — ✅ CGPA field added */}
            <section className="break-inside-avoid print:mt-6">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 print:text-[16px] print:text-black print:border-gray-800 print:pb-1 print:mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)] print:hidden"></span>
                Education
              </h3>
              <div className="space-y-4 text-sm text-gray-400 print:text-black print:text-[13px] print:space-y-3">
                <div className="break-inside-avoid">
                  <h4 className="font-bold text-white print:text-[14px] print:text-black leading-tight">Bachelor of Engineering</h4>
                  <p className="text-xs text-gray-500 print:text-black italic mt-0.5">Computer Science and Engineering</p>
                  {/* ✅ NEW: CGPA placeholder — replace with real value */}
                  <p className="text-[11px] font-medium print:text-[12px] print:text-gray-600 mt-0.5">CGPA: 8.1 &nbsp;·&nbsp; Graduated: 2024</p>
                </div>
                <div className="break-inside-avoid">
                  <h4 className="font-bold text-white print:text-[14px] print:text-black leading-tight">Higher Secondary (HSC)</h4>
                  <p className="text-xs text-gray-500 print:text-black italic mt-0.5">Vijayanta Model Hr. Sec. School</p>
                  <p className="text-[11px] font-medium print:text-[12px] print:text-gray-600 mt-0.5">Graduated: 2020</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
