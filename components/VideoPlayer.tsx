import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

type VideoPlayerProps = {
  src: string;
  title?: string;
  description?: string;
};

const formatTime = (seconds = 0) => {
  if (!isFinite(seconds) || seconds <= 0) return "00:00";
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const VideoPlayer = ({ src, title, description }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true); // overlay = titre + bouton

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => setDuration(video.duration || 0);
    const onTime = () => {
      setCurrentTime(video.currentTime);
      const dur = video.duration || 1;
      setProgress((video.currentTime / dur) * 100);
    };
    const onPlay = () => {
      setIsPlaying(true);
      setShowOverlay(false); // dès que la lecture démarre, on cache l'overlay
    };
    const onPause = () => {
      setIsPlaying(false);
      setShowOverlay(true); // en pause on ré-affiche l'overlay
    };
    const onEnd = () => {
      setIsPlaying(false);
      setShowOverlay(true);
      setProgress(100);
      setCurrentTime(video.duration || 0);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnd);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnd);
    };
  }, []);

  const play = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
      // play event listener gère setIsPlaying & setShowOverlay
    } catch (err) {
      console.warn("Impossible de lancer la lecture:", err);
    }
  };

  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    // pause event listener gère setIsPlaying & setShowOverlay
  };

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) await play();
    else pause();
  };

  // Click sur la zone vidéo :
  // - si en pause => on lance la lecture
  // - si en lecture => on affiche/masque l'overlay (bouton + titre)
  const handleVideoClick = () => {
    if (!isPlaying) {
      togglePlay();
    } else {
      setShowOverlay((s) => !s);
    }
  };

  return (
    <div className="bg-black rounded-2xl shadow-xl overflow-hidden relative">
      {/* video : object-contain + max height pour selfie-friendly */}
      <video
        ref={videoRef}
        src={src}
        onClick={handleVideoClick}
        className="w-full max-h-[70vh] object-contain bg-black"
        playsInline
      />

      {/* overlay gradient (non-interactive pour laisser passer les clics) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* CONTROLS (pointer-events-none pour que le clic atteigne la video)
          les éléments interactifs (bouton) auront pointer-events-auto */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
        {/* titre + description : visibles seulement si overlay visible (avant lecture ou en pause) */}
        {showOverlay && !isPlaying && (
          <div className="mb-3 text-center">
            {title && <h3 className="text-white font-bold text-lg">{title}</h3>}
            {description && (
              <p className="text-gray-300 text-sm">{description}</p>
            )}
          </div>
        )}

        {/* barre de progression (readonly) */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${isFinite(progress) ? progress : 0}%` }}
          />
        </div>

        {/* temps */}
        <div className="flex justify-end text-white text-xs mb-2">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* bouton Play/Pause : uniquement interactif si overlay visible */}
        {showOverlay && (
          <div className="w-full flex justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation(); // éviter que le click sur le bouton retriggere le click de la vidéo
                togglePlay();
              }}
              className="pointer-events-auto bg-white/20 hover:bg-white/30 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
