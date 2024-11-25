import { useState, useRef, useEffect } from 'react';
import { images, music } from '../mediaData';
import { Genre } from '../types';
import '../RelaxScreen.css';

function RelaxScreen() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const getRandomMediaPair = () => {
    const genres = [...new Set(images.map(item => item.genre))];
    const randomGenre = genres[Math.floor(Math.random() * genres.length)] as Genre;
    
    const genreImages = images.filter(img => img.genre === randomGenre);
    const genreMusic = music.filter(m => m.genre === randomGenre);
    
    const randomImage = genreImages[Math.floor(Math.random() * genreImages.length)];
    const randomMusic = genreMusic[Math.floor(Math.random() * genreMusic.length)];
    
    return { image: randomImage, music: randomMusic };
  };

  const [currentMedia, setCurrentMedia] = useState(getRandomMediaPair());

  const changeMedia = () => {
    // 現在と異なるメディアペアを取得
    let newPair = getRandomMediaPair();
    while (
      newPair.image.id === currentMedia.image.id && 
      newPair.music.id === currentMedia.music.id
    ) {
      newPair = getRandomMediaPair();
    }
    setCurrentMedia(newPair);
  };

  useEffect(() => {
    const initAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Audio autoplay failed:', error);
          setIsPlaying(false);
        }
      }
    };
    initAudio();
  }, [currentMedia.music]); // 音楽が変更されたときに再生を試みる

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Toggle playback failed:', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="background-overlay">
        <img 
          src={currentMedia.image.path} 
          alt="" 
          className="background-image"
        />
      </div>
      <div className="media-container">
        <img 
          src={currentMedia.image.path} 
          alt="Scenery" 
          className="main-image" 
        />
      </div>
      <div className="controls">
        <button className="control-button" onClick={togglePlay}>
          {isPlaying ? '一時停止' : '再生'}
        </button>
        <button className="control-button change-button" onClick={changeMedia}>
          他の場所へ
        </button>
      </div>
      <audio 
        ref={audioRef} 
        src={currentMedia.music.path} 
        loop
        preload="auto"
      />
    </div>
  );
}

export default RelaxScreen;