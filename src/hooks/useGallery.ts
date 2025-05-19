import { useState, useCallback } from 'react';
import { Photo, FilterCategory } from '../types';
import { photos, getCategories } from '../data/photos';

export function useGallery() {
  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>(null);
  const categories = getCategories();

  const filteredPhotos = activeCategory 
    ? photos.filter(photo => photo.category === activeCategory)
    : photos;

  const openPhoto = useCallback((id: number) => {
    setSelectedPhotoId(id);
  }, []);

  const closePhoto = useCallback(() => {
    setSelectedPhotoId(null);
  }, []);

  const getSelectedPhoto = useCallback(() => {
    return photos.find(photo => photo.id === selectedPhotoId) || null;
  }, [selectedPhotoId]);

  const getNextPhotoId = useCallback(() => {
    if (!selectedPhotoId) return null;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhotoId);
    if (currentIndex === -1 || currentIndex === filteredPhotos.length - 1) return filteredPhotos[0].id;
    return filteredPhotos[currentIndex + 1].id;
  }, [selectedPhotoId, filteredPhotos]);

  const getPrevPhotoId = useCallback(() => {
    if (!selectedPhotoId) return null;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhotoId);
    if (currentIndex === -1 || currentIndex === 0) return filteredPhotos[filteredPhotos.length - 1].id;
    return filteredPhotos[currentIndex - 1].id;
  }, [selectedPhotoId, filteredPhotos]);

  const navigateToNext = useCallback(() => {
    const nextId = getNextPhotoId();
    if (nextId) setSelectedPhotoId(nextId);
  }, [getNextPhotoId]);

  const navigateToPrev = useCallback(() => {
    const prevId = getPrevPhotoId();
    if (prevId) setSelectedPhotoId(prevId);
  }, [getPrevPhotoId]);

  return {
    photos: filteredPhotos,
    categories,
    activeCategory,
    setActiveCategory,
    selectedPhotoId,
    openPhoto,
    closePhoto,
    getSelectedPhoto,
    navigateToNext,
    navigateToPrev
  };
}