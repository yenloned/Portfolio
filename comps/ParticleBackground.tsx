import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    const createParticles = () => {
      // Adjust particle count based on screen size
      const isMobile = windowSize.width < 768;
      const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
      
      let particleCount = 50; // Default for desktop
      if (isMobile) {
        particleCount = 20; // Fewer particles for mobile
      } else if (isTablet) {
        particleCount = 35; // Medium particles for tablet
      }

      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * windowSize.width,
          y: Math.random() * windowSize.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Wrap particles around screen edges
          if (newX < 0) newX = windowSize.width;
          if (newX > windowSize.width) newX = 0;
          if (newY < 0) newY = windowSize.height;
          if (newY > windowSize.height) newY = 0;

          return {
            ...particle,
            x: newX,
            y: newY,
            opacity: particle.opacity + (Math.random() - 0.5) * 0.1,
          };
        })
      );
    };

    if (windowSize.width > 0 && windowSize.height > 0) {
      createParticles();
      const interval = setInterval(animateParticles, 50);

      return () => clearInterval(interval);
    }
  }, [windowSize]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: Math.max(0, Math.min(1, particle.opacity)),
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 