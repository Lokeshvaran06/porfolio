import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  return (
    // Added print:bg-white and print:overflow-visible to ensure the page prints cleanly
    <div className="min-h-screen bg-dark w-full overflow-x-hidden print:bg-white print:overflow-visible">
      
      {/* Wrap everything you DON'T want to print in this div. 
        'print:hidden' makes it completely disappear on the PDF! 
      */}
      <div className="print:hidden">
        <Hero />
        <Projects />
      </div>

      {/* The Resume component sits outside the hidden div, 
        so it will be the ONLY thing that prints. 
      */}
      <Resume />
      
    </div>
  )
}

export default App