import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Photo } from '../types';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photo, onClose, onNext, onPrev }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'i':
          setShowInfo(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>
      
      {/* Info button */}
      <button 
        className="absolute top-4 left-4 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-10"
        onClick={() => setShowInfo(!showInfo)}
        aria-label="Toggle information"
      >
        <Info size={24} />
      </button>
      
      {/* Previous button */}
      <button 
        className="absolute left-4 text-white bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors z-10"
        onClick={onPrev}
        aria-label="Previous photo"
      >
        <ChevronLeft size={28} />
      </button>
      
      {/* Next button */}
      <button 
        className="absolute right-4 text-white bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors z-10"
        onClick={onNext}
        aria-label="Next photo"
      >
        <ChevronRight size={28} />
      </button>
      
      {/* Main image */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative max-w-full max-h-full">
          <img
            src={photo.src}
            alt={photo.alt}
            className={`max-w-full max-h-[calc(100vh-8rem)] object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading indicator */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Photo info */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-transform duration-300 ${
          showInfo ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-white text-2xl font-semibold mb-2">{photo.alt}</h2>
          <p className="text-white/80 mb-1">{photo.caption}</p>
          <p className="text-white/60 text-sm">
            Category: {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
          </p>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/30 px-4 py-2 rounded-full">
        Use arrow keys to navigate • Press 'i' for info • ESC to close
      </div>
    </div>
  );
};

export default Lightbox;