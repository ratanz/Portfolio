"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AudioContextType {
  playClickSound: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only on client side
    if (typeof window !== 'undefined') {
      const audio = new Audio('/audio/click-tap.mp3');
      audio.volume = 0.5; // Set volume to 50%
      setClickSound(audio);
    }
  }, []);

  const playClickSound = () => {
    if (clickSound) {
      // Create a clone to allow overlapping sounds
      const soundClone = clickSound.cloneNode() as HTMLAudioElement;
      soundClone.play().catch(error => {
        // Handle any autoplay restrictions
        console.log("Audio playback failed:", error);
      });
    }
  };

  return (
    <AudioContext.Provider value={{ playClickSound }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}; 