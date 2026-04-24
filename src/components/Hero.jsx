import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';

function Tilt({ options, children, className }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="print-hidden min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10 w-full max-w-5xl">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-accent-blue font-medium tracking-wide mb-2 uppercase">
              Full Stack Developer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Lokeshvaran <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">G</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Crafting premium ERP systems, scalable web apps, and cross-platform mobile experiences with precision and modern aesthetics.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue rounded-full font-semibold hover:bg-accent-blue/20 hover:border-accent-blue/60 transition-all duration-300 shadow-[0_0_15px_rgba(0,209,255,0.1)] hover:shadow-[0_0_25px_rgba(0,209,255,0.3)] flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Coded Resume
            </button>
            <a 
              href="mailto:bharani060723@gmail.com"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Floating Image */}
        <motion.div
           animate={{ y: [-10, 10, -10] }}
           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
           className="relative mt-12 md:mt-0 flex-shrink-0"
        >
          <Tilt 
            options={{ max: 15, speed: 400, glare: true, "max-glare": 0.2 }}
            className="backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-white/10 bg-white/5 shadow-2xl relative"
          >
            {/* Inner Glow offset */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent-blue/20 to-transparent opacity-50 pointer-events-none" />
            <img 
              src="/profile.jpeg" 
              alt="Lokeshvaran G" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl z-10 relative pointer-events-none"
            />
          </Tilt>
        </motion.div>
        
      </div>
    </section>
  );
}
