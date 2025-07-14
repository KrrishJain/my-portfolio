'use client'
// pages/index.js or app/page.js (depending on your Next.js version)
import { useState, useEffect } from 'react';

export default function PortfolioConstruction() {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center px-4 pt-10">
      <div className="max-w-4xl w-full text-center">
        
        {/* No Entry Construction Board */}
        <div className="mb-12">
          <div className="relative inline-block">
            {/* Construction Board Background */}
            <div className="bg-gradient-to-r from-orange-400 to-red-500 px-8 py-6 rounded-lg shadow-2xl border-4 border-red-600 transform -rotate-2">
              <div className="bg-white rounded-lg px-6 py-4 border-2 border-red-500">
                <div className="flex items-center justify-center mb-2">
                  {/* No Entry Symbol */}
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-1 bg-red-500 transform rotate-45 absolute"></div>
                      <div className="w-6 h-1 bg-red-500 transform -rotate-45 absolute"></div>
                    </div>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-red-600">
                    PORTFOLIO UNDER CONSTRUCTION
                  </h1>
                </div>
                <p className="text-red-500 font-medium text-sm">
                  Please excuse our digital dust!
                </p>
              </div>
            </div>
            
            {/* Caution tape */}
            <div className="absolute -top-2 -left-2 w-20 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 transform -rotate-12">
              <div className="h-full bg-repeating-linear-gradient bg-yellow-400 flex items-center justify-center">
                <span className="text-black font-bold text-xs">CAUTION</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 transform rotate-12">
              <div className="h-full bg-repeating-linear-gradient bg-yellow-400 flex items-center justify-center">
                <span className="text-black font-bold text-xs">CAUTION</span>
              </div>
            </div>
          </div>
        </div>

        {/* Builder SVG Illustration */}
        <div className='w-full flex justify-center'>
          <img src='builder.webp' className='h-96' />
        </div>

        {/* Status message */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🔨 Hard at work building something awesome{dots}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              I'm currently putting the finishing touches on my digital showcase. 
              Thanks for your patience while I hammer out the details!
            </p>
            

            
            <p className="text-sm text-gray-500">
              Expected completion: Soon™
            </p>
          </div>
        </div>


        {/* Footer */}
        <footer className="text-gray-500 text-sm">
          <p>© 2025 Krish Jain - Building dreams, one commit at a time 🚀</p>
        </footer>
      </div>
    </div>
  );
}