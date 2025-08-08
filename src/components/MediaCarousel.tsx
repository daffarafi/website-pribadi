'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string; // For images: URL, for videos: YouTube video ID
}

interface MediaCarouselProps {
  images?: string[];
  videos?: string[];
  alt: string;
}

export default function MediaCarousel({
  images = [],
  videos = [],
  alt,
}: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine videos and images into media items (videos first)
  const mediaItems: MediaItem[] = [
    ...videos.map((videoId) => ({ type: 'video' as const, src: videoId })),
    ...images.map((img) => ({ type: 'image' as const, src: img })),
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (mediaItems.length === 0) return null;

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
      {/* Main Media */}
      <div className="relative w-full h-full">
        {currentItem.type === 'image' ? (
          <img
            src={currentItem.src}
            alt={`${alt} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${currentItem.src}?rel=0&modestbranding=1`}
              title={`${alt} - Video ${currentIndex + 1}`}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}

        {/* Navigation Arrows */}
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
              aria-label="Previous media"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
              aria-label="Next media"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {mediaItems.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-[#2EE0D0]'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
