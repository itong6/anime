import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";


export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
  
    const togglePlayback = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    return (
        <div className={styles.music}>
        <audio
        className={styles.audioControl}
          controls
          loop
          ref={audioRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="../sounds/anya.mp3" type="audio/mpeg" />
        </audio>
        {isPlaying ? (
          <img className={styles.anyaTwo} onClick={togglePlayback} src='images/anya2.png' title='heh'/>
        ) : (
          <img className={styles.anya} onClick={togglePlayback} src='images/anya.png' title='Waku Waku'/>
        )}
      </div>

    )
}