"use client";

import { useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';

export default function GlobalClickHandler() {
  const { playClickSound } = useAudio();

  useEffect(() => {
    // Elements that should trigger the click sound
    const clickableElements = ['button', 'a', '[role="button"]', 'input[type="button"]', 'input[type="submit"]'];
    
    // Create a selector for all clickable elements
    const selector = clickableElements.join(', ');
    
    const handleGlobalClick = (e: MouseEvent) => {
      // Check if the clicked element or any of its parents match our selector
      const path = e.composedPath();
      const shouldPlaySound = path.some((element) => {
        if (element instanceof HTMLElement) {
          // Check if the element matches our selector
          return element.matches?.(selector);
        }
        return false;
      });
      
      if (shouldPlaySound) {
        playClickSound();
      }
    };

    // Add the click event listener to the document
    document.addEventListener('click', handleGlobalClick);
    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [playClickSound]);

  // This component doesn't render anything
  return null;
} 