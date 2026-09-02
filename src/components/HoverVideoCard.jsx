import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HoverVideoCard({ image, video, alt, children }) {
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);

  function startVideo() {
    if (!videoRef.current || failed) return;
    setActive(true);
        videoRef.current.play().catch(() => {
          setFailed(true);
          setActive(false);
        });
  }

  function stopVideo() {
    const videoElement = videoRef.current;
    setActive(false);
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }

  return (
    <motion.div className={`hover-video-card ${active ? 'is-playing' : ''}`} onMouseEnter={startVideo} onMouseLeave={stopVideo} onFocus={startVideo} onBlur={stopVideo} whileHover={{ y: -8 }}>
      <img src={image} alt={alt} loading="lazy" />
      {!failed && <video ref={videoRef} src={video} poster={image} muted loop playsInline preload="none" onError={() => { setFailed(true); setActive(false); }} aria-hidden="true" />}
      <div className="hover-video-shade" />
      <div className="hover-video-status"><span className="hover-video-dot" />{active ? 'Playing preview' : 'Hover to play'}<b>{active ? 'LIVE' : 'VIDEO'}</b></div>
      <div className="hover-video-content">{children}</div>
    </motion.div>
  );
}
