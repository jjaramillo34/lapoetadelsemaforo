'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {};

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: '#ef4444', // red-500 - brighter
        },
        links: {
          enable: true,
          color: '#ef4444', // red-500 - brighter
          distance: 180,
          opacity: 0.7,
          width: 2,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none' as const,
          random: true,
          straight: false,
          outModes: {
            default: 'out' as const,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: { min: 0.7, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: ['circle', 'triangle'],
        },
        size: {
          value: { min: 3, max: 8 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
      },
      interactivity: {
        detectsOn: 'window' as const,
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.9,
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated gradient overlay - lighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-black/95 to-black z-0" />
      
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute inset-0"
          options={options}
        />
      </div>
      
      {/* Additional floating orbs for depth - more visible */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-glow shadow-[0_0_150px_rgba(239,68,68,0.4)]" />
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-red-500/25 rounded-full blur-3xl animate-pulse-glow shadow-[0_0_120px_rgba(239,68,68,0.5)]" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse-glow shadow-[0_0_150px_rgba(239,68,68,0.4)]" style={{ animationDelay: '2s' }} />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
