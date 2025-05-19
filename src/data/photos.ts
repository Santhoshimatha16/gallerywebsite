import { Photo } from '../types';

export const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mountain landscape with lake",
    caption: "Serene mountain landscape reflected in crystal clear lake",
    category: "landscape",
    width: 1260,
    height: 750
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "City skyline at night",
    caption: "Vibrant city skyline illuminated after dark",
    category: "cityscape",
    width: 1260,
    height: 750
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Portrait of a woman",
    caption: "Expressive portrait with natural lighting",
    category: "portrait",
    width: 1260,
    height: 834
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Wildlife photography",
    caption: "Wild fox in its natural habitat",
    category: "wildlife",
    width: 1260,
    height: 750
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Abstract architecture",
    caption: "Geometric patterns in modern architecture",
    category: "architecture",
    width: 1260,
    height: 750
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1268116/pexels-photo-1268116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Beach sunset",
    caption: "Golden hour sunset over tropical beach",
    category: "landscape",
    width: 1260,
    height: 750
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Aerial view of forest",
    caption: "Drone shot of vibrant autumn forest",
    category: "landscape",
    width: 1260,
    height: 750
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Macro photography of flower",
    caption: "Detailed macro shot of flower petals",
    category: "macro",
    width: 1260,
    height: 750
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern minimalist interior",
    caption: "Clean lines of contemporary interior design",
    category: "architecture",
    width: 1260,
    height: 750
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Street photography",
    caption: "Candid moment captured on urban streets",
    category: "street",
    width: 1260,
    height: 750
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Food photography",
    caption: "Artfully arranged culinary creation",
    category: "food",
    width: 1260,
    height: 750
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Action sports",
    caption: "Thrilling moment captured in extreme sports",
    category: "sports",
    width: 1260,
    height: 750
  }
];

export const getCategories = (): string[] => {
  const categories = new Set<string>();
  
  photos.forEach(photo => {
    categories.add(photo.category);
  });
  
  return Array.from(categories).sort();
};