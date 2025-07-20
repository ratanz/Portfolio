"use client";

import { useAudio } from "../contexts/AudioContext";

/**
 * A custom hook that returns event handlers for playing click sounds
 */
export const useClickSound = () => {
  const { playClickSound } = useAudio();

  // For regular click events
  const handleClick = (callback?: () => void) => {
    return (e: React.MouseEvent) => {
      playClickSound();
      if (callback) callback();
    };
  };

  // For buttons that might have their own onClick handlers
  const withClickSound = <T extends (...args: any[]) => any>(fn: T) => {
    return ((...args: Parameters<T>) => {
      playClickSound();
      return fn(...args);
    }) as T;
  };

  return {
    handleClick,
    withClickSound,
    playClickSound
  };
}; 