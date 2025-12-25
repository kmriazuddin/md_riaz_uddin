"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type SingleProjectProps = {
  images: string[];
};

const SingleProjectSlide = ({ images }: SingleProjectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Valid images filter
  const validImages = images.filter(
    (img): img is string =>
      typeof img === "string" && img.trim() !== "" && img.startsWith("http")
  );

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide
  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [validImages.length]);

  // No images
  if (validImages.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 dark:bg-slate-950 rounded-xl flex items-center justify-center">
        <p className="text-slate-500 dark:text-gray-500 text-lg">No images available.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Main Image - Left Side */}
          <div className="lg:col-span-9 relative aspect-video overflow-hidden rounded-xl shadow-2xl bg-gray-100">
            <Image
              src={validImages[currentIndex]}
              alt={`Main image ${currentIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />

            {/* Prev / Next Buttons */}
            {validImages.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-3 h-3 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-3 h-3 md:w-6 md:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails - Right Side (Vertical) */}
          {validImages.length > 1 && (
            <div className="lg:col-span-3 flex lg:flex-col gap-4 justify-start">
              {validImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-20 lg:w-32 h-14 lg:h-20 rounded-lg overflow-hidden transition-all shadow-lg ${
                    currentIndex === index
                      ? "ring-2 ring-pink-500 ring-offset-1 scale-105 z-10"
                      : "ring-1 ring-gray-300 hover:ring-pink-300 hover:scale-105"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectSlide;
