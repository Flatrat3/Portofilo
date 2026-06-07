import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = '', style = {}, options = {} }) => {
  const cardRef = useRef(null);
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    transform: 'translate(-50%, -50%)',
    top: '0px',
    left: '0px',
  });
  
  const defaultOptions = {
    max: 15, // Max tilt angle in degrees
    perspective: 1000, // Perspective in px (lower means more extreme 3D effect)
    scale: 1.03, // Scale on hover
    speed: 400, // Transition speed in ms
    glare: true, // Enable glare effect
    maxGlare: 0.2, // Max glare opacity (0-1)
    ...options
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the card coordinates
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates to be -0.5 to 0.5
    const tiltX = (y / height - 0.5) * -defaultOptions.max;
    const tiltY = (x / width - 0.5) * defaultOptions.max;

    card.style.transform = `perspective(${defaultOptions.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${defaultOptions.scale}, ${defaultOptions.scale}, ${defaultOptions.scale})`;
    
    if (defaultOptions.glare) {
      setGlareStyle({
        opacity: defaultOptions.maxGlare,
        top: `${y}px`,
        left: `${x}px`,
        transform: 'translate(-50%, -50%)',
      });
    }
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    // Remove transitions during mouse move for instantaneous tilt tracking
    card.style.transition = 'none';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // Restore transition for smooth reset
    card.style.transition = `transform ${defaultOptions.speed}ms cubic-bezier(.03,.98,.52,.99)`;
    card.style.transform = `perspective(${defaultOptions.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    
    if (defaultOptions.glare) {
      setGlareStyle(prev => ({
        ...prev,
        opacity: 0,
      }));
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: `transform ${defaultOptions.speed}ms cubic-bezier(.03,.98,.52,.99)`,
        ...style
      }}
    >
      {/* Container to maintain children rendering */}
      <div style={{ transform: 'translateZ(10px)', height: '100%', width: '100%' }}>
        {children}
      </div>
      
      {defaultOptions.glare && (
        <div
          className="tilt-glare"
          style={{
            position: 'absolute',
            borderRadius: 'inherit',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 99,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
              pointerEvents: 'none',
              transition: 'opacity 300ms ease',
              borderRadius: '50%',
              ...glareStyle
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TiltCard;
