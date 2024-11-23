import React, { useState, useEffect, useRef } from 'react';
import { VolumeUp, VolumeOff } from '@mui/icons-material';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Start with muted to support autoplay
  const [volume] = useState(0.1); // Set initial volume to 10%
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track video load status

  // UseEffect to trigger when video is ready to play
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);  // Set video loaded state when video data is available
      };

      // Listen for video data loading event
      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  // Update video volume and mute status when the component mounts
  useEffect(() => {
    if (videoRef.current && isVideoLoaded) {
      videoRef.current.volume = volume;  // Set initial volume
      videoRef.current.muted = isMuted;  // Ensure muted status is applied
    }
  }, [volume, isMuted, isVideoLoaded]);

  const toggleMute = () => {
    setIsMuted(!isMuted);  // Toggle mute state on click
  };

  return (
    <div>
      <div>
        {/* Video */}
        <video 
          ref={videoRef}
          autoPlay
          muted={isMuted} // Ensure the video starts muted for autoplay
          loop
          className="cover-hero"
          playsInline
        >
          <source 
            src="https://cloud.appwrite.io/v1/storage/buckets/6742027c0006ed609c42/files/674203eb001654d937ab/view?project=673b8f07002dfa118b38&project=673b8f07002dfa118b38&mode=admin"
            type="video/mp4" 
          />
          {/* Fallback content */}
          Your browser does not support the video tag.
        </video>

        {/* Volume control - Show only when video is loaded */}
        {isVideoLoaded && (
          <div className="sound-icon" onClick={toggleMute}>
            {isMuted ? <VolumeOff /> : <VolumeUp />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
