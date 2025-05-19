import React from 'react';
import Gallery from './components/Gallery';
import { Image } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center">
          <div className="flex items-center gap-2">
            <Image size={28} className="text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Pixel Gallery</h1>
          </div>
        </div>
      </header>
      
      <main>
        <Gallery />
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pixel Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;