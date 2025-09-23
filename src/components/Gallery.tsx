import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  title: string;
  images: GalleryImage[];
}

export default function Gallery({ title, images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map(({ src, alt }, index) => (
          <button
            key={src}
            onClick={() => openLightbox(index)}
            className="block overflow-hidden rounded-2xl shadow-lg hover:opacity-90 transition"
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/60 text-prove-accent p-2 rounded-full hover:bg-black/80"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Prev button (viewport left) */}
            <button
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-prove-accent p-3 rounded-full hover:bg-black/80"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image + caption */}
            <div className="flex flex-col items-center">
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-h-[80vh] max-w-[80vw] object-contain"
              />
              <p className="mt-3 text-white text-center text-lg max-w-[80vw]">
                {images[lightboxIndex].alt}
              </p>
            </div>

            {/* Next button (viewport right) */}
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-prove-accent p-3 rounded-full hover:bg-black/80"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
