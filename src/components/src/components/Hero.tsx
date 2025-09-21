import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight tracking-wide">
          Effortlessly Blend Comfort
          <br />
          <span className="italic font-normal">& Style!</span>
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed opacity-90 tracking-wide">
          Effortlessly blend comfort and sophistication with Aurora's exclusive collection, featuring 
          naturally soft materials, exquisite designs, and timeless styles for your everyday elegance.
        </p>

        <button className="bg-transparent border-2 border-white text-white px-10 py-4 text-sm font-light tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
          VIEW COLLECTION
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
