import React from 'react';
import { useGallery } from '../hooks/useGallery';
import PhotoItem from './PhotoItem';
import CategoryFilter from './CategoryFilter';
import Lightbox from './Lightbox';

const Gallery: React.FC = () => {
  const {
    photos,
    categories,
    activeCategory,
    setActiveCategory,
    selectedPhotoId,
    openPhoto,
    closePhoto,
    getSelectedPhoto,
    navigateToNext,
    navigateToPrev
  } = useGallery();

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoItem 
            key={photo.id} 
            photo={photo} 
            onClick={openPhoto} 
          />
        ))}
      </div>

      {selectedPhotoId && (
        <Lightbox
          photo={getSelectedPhoto()!}
          onClose={closePhoto}
          onNext={navigateToNext}
          onPrev={navigateToPrev}
        />
      )}
    </div>
  );
};

export default Gallery;