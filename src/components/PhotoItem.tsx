import React from 'react';
import { Photo } from '../types';

interface PhotoItemProps {
  photo: Photo;
  onClick: (id: number) => void;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo, onClick }) => {
  return (
    <div 
      className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(photo.id)}
      style={{
        aspectRatio: `${photo.width}/${photo.height}`
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-lg mb-1 truncate">{photo.alt}</h3>
        <p className="text-white/80 text-sm">{photo.category}</p>
      </div>
    </div>
  );
};

export default PhotoItem;