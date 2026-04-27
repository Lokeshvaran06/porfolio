import React, { useState } from 'react';

export default function Projects() {
  // Array of your uploaded screenshots
  const images = [
    { src: '/billing/home.png', alt: 'Dashboard Home' },
    { src: '/billing/inventory.png', alt: 'Inventory Management' },
    { src: '/billing/income.png', alt: 'POS & Income' },
    { src: '/billing/accounting.png', alt: 'Accounting & GST' },
    { src: '/billing/expense.png', alt: 'Expense Tracking' },
    { src: '/billing/dataStore.png', alt: 'Data Store & Settings' },
  ];

  const [activeImage, setActiveImage] = useState(images[0].src);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-white text-glow">
        Featured Work
      </h2>

      <div className="bg-gray-900 rounded-2xl overflow-hidden glow-border flex flex-col lg:flex-row">
        
        {/* Left Side: Image Gallery */}
        <div className="lg:w-1/2 p-6 flex flex-col gap-4">
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-gray-700">
            <img 
              src={activeImage} 
              alt="Project Preview" 
              className="w-full h-full "
            />
          </div>
          
          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(img.src)}
                className={`flex-shrink-0 w-20 h-14 rounded border-2 transition-all ${
                  activeImage === img.src ? 'border-[#00d1ff]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-sm" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Project Details */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Dexco Billing & ERP</h3>
            <span className="px-3 py-1 bg-blue-900/50 text-[#00d1ff] text-xs font-semibold rounded-full border border-blue-500/30">
              Laravel 12
            </span>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            A comprehensive, production-ready enterprise resource planning system designed for high-efficiency retail and business management. Built to handle complex business logic, from multi-format invoicing to automated inventory tracking.
          </p>

          <h4 className="text-lg font-semibold text-white mb-3">Key Technical Features:</h4>
          <ul className="space-y-2 mb-8 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-[#00d1ff]">▹</span>
              <strong>Hardware Integration:</strong> Direct barcode scanner support for rapid POS checkout and manual entry fallbacks.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00d1ff]">▹</span>
              <strong>Dynamic Code Generation:</strong> Automated, downloadable Barcode and QR code generation during item creation.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00d1ff]">▹</span>
              <strong>Thermal & Standard Printing:</strong> Engineered custom print layouts supporting 3-inch, 4-inch thermal receipts, and A4 invoice formats.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00d1ff]">▹</span>
              <strong>Advanced Inventory:</strong> Support for "Combo Items" allowing dynamic product bundling and synchronized stock deduction.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-auto">
            {/* Tech Stack Pills */}
            {['Laravel 12', 'MySQL', 'Ajax', 'Hardware I/O', 'Print CSS', 'Role Management'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}