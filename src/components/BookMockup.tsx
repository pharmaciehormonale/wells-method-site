export default function BookMockup() {
  return (
    <div className="book-3d animate-float" style={{ perspective: "1000px" }}>
      <div className="relative w-[280px] h-[380px]">
        {/* Book Cover */}
        <div className="book-cover absolute inset-0 rounded-r-lg rounded-l-sm flex flex-col items-center justify-center p-8">
          {/* Gold accent line top */}
          <div className="absolute top-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />
          
          {/* Main Title */}
          <div className="text-center space-y-4 mt-8">
            <div className="text-[#b8860b] text-xs tracking-[0.4em] font-light">
              LA MÉTHODE
            </div>
            <h3 className="text-white text-3xl font-bold tracking-wide">
              WELLS
            </h3>
            <h4 className="text-white text-lg font-light tracking-[0.2em]">
              METHOD
            </h4>
            
            {/* Divider */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto my-6" />
            
            {/* Subtitle */}
            <div className="space-y-1">
              <p className="text-[#b8860b] text-[10px] tracking-[0.3em] uppercase">
                Optimisation
              </p>
              <p className="text-[#b8860b] text-[10px] tracking-[0.3em] uppercase">
                Hormonale
              </p>
              <p className="text-[#b8860b] text-[10px] tracking-[0.3em] uppercase">
                Naturelle
              </p>
            </div>
          </div>
          
          {/* Author */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-gray-400 text-xs tracking-[0.2em]">
              DAVID WELLS
            </p>
          </div>
          
          {/* Gold accent line bottom */}
          <div className="absolute bottom-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mt-2" style={{ bottom: "2.5rem" }} />
          
          {/* Spine effect */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 to-transparent" />
          
          {/* Edge highlight */}
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/10 via-white/5 to-white/10 rounded-r-lg" />
        </div>
        
        {/* Book spine 3D effect */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"
          style={{
            transform: "rotateY(-90deg) translateX(-12px)",
            transformOrigin: "left",
          }}
        />
        
        {/* Shadow */}
        <div 
          className="absolute -bottom-8 left-4 right-4 h-8 bg-black/20 blur-xl rounded-full"
          style={{ transform: "rotateX(90deg)" }}
        />
      </div>
    </div>
  );
}
