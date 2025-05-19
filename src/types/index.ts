export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
  width: number;
  height: number;
}

export type FilterCategory = string | null;