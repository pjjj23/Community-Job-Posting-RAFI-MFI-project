"use client";
 
import React from "react";
 
export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation Bar */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 transition-all duration-300 ease-in-out transform translate-y-0">
<div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div className="flex items-center cursor-pointer group">
<h1 className="text-2xl font-bold transition-transform duration-300 ease-in-out transform group-hover:scale-105">
              Alay<span className="text-blue-600">TRABAHO</span>
</h1>
</div>
<div className="flex items-center gap-6">
<button className="px-6 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 relative group">
              Login
<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
</button>
<button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300/50 transform hover:scale-105">
              Sign Up
</button>
</div>
</div>
</nav>
 
      {/* Main Content */}
<div className="grid grid-rows-[1fr] items-center min-h-[calc(100vh-76px)]">
<main className="relative max-w-7xl mx-auto px-8 py-12 text-center">
          {/* Left Decorative Element */}
<div className="absolute left-0 -translate-x-1/4 top-1/4 opacity-0 animate-fade-in-left">
<div className="relative w-72 h-72">
<div className="absolute inset-0 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform -rotate-12 hover:-rotate-6">
<div className="p-6 space-y-4">
<div className="w-16 h-16 bg-blue-100 rounded-lg"></div>
<div className="h-3 bg-gray-200 rounded w-3/4"></div>
<div className="h-3 bg-gray-200 rounded w-1/2"></div>
</div>
</div>
</div>
</div>
 
          {/* Right Decorative Element */}
<div className="absolute right-0 translate-x-1/4 top-1/4 opacity-0 animate-fade-in-right">
<div className="w-72 h-72 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform rotate-12 hover:rotate-6">
<div className="p-6">
<div className="flex gap-4 mb-4">
<div className="w-12 h-12 bg-blue-100 rounded-full"></div>
<div className="flex-1 space-y-2">
<div className="h-3 bg-gray-200 rounded w-3/4"></div>
<div className="h-3 bg-gray-200 rounded w-1/2"></div>
</div>
</div>
</div>
</div>
</div>
 
          {/* Main Content */}
<div className="max-w-3xl mx-auto opacity-0 animate-fade-in-up">
<div className="inline-block border border-blue-300 rounded-lg px-6 py-2 mb-6 bg-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
<p className="text-emerald-600 font-medium flex items-center gap-2">
                Connecting people to their dream jobs
<span className="inline-block transform transition-transform group-hover:translate-y-1">▼</span>
</p>
</div>
 
            <h2 className="relative z-10 text-6xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Connect, Hire,
<br />
              and Succeed.
</h2>
 
            <p className="relative text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Barangay Job Portal: Post jobs, connect talent with employers, and streamline hiring. With
              intuitive tools, finding the right job or candidate in your community has never been easier!
</p>
 
            <div className="flex justify-center gap-4 mb-16">
<button className="group px-8 py-3 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2">
                Login
<span className="transform transition-transform group-hover:translate-x-1">→</span>
</button>
<button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300/50 transform hover:scale-105 active:scale-95">
                Sign Up
</button>
</div>
</div>
 
          {/* Bottom Decorative Elements */}
<div className="absolute bottom-12 left-12 opacity-0 animate-fade-in-up-delayed">
<div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
<div className="flex gap-3 mb-2">
<span className="w-6 h-6 text-blue-600">✉</span>
<span className="w-6 h-6 text-blue-600">f</span>
</div>
<div className="h-2 bg-blue-100 rounded w-24"></div>
</div>
</div>
 
          <div className="absolute bottom-12 right-12 opacity-0 animate-fade-in-up-delayed">
<div className="bg-blue-600 text-white px-6 py-3 rounded-lg transform rotate-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-6">
<p className="font-bold text-xl tracking-wide">JOIN OUR TEAM!</p>
</div>
</div>
</main>
</div>
 
      <style jsx>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fade-in-up-delayed {
          animation: fadeInUp 0.8s 0.2s forwards;
        }
      `}</style>
</div>
  );
}