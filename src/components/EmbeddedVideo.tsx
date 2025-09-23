import { useState } from "react";
import { Play } from "lucide-react";

interface EmbeddedVideoProps {
  title: string;
  src: string;
  thumbnail: string;
}

export function EmbeddedVideo({ title, src, thumbnail }: EmbeddedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="mb-12 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>

      <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
        {isPlaying ? (
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full group"
            aria-label={`Play ${title}`}
          >
            <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 rounded-lg transition">
              <Play size={64} className="text-white drop-shadow-lg" />
            </div>
          </button>
        )}
      </div>
    </article>
  );
}
