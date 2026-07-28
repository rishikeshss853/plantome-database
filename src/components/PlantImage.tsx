import { useState } from 'react';
import { Leaf } from 'lucide-react';

interface PlantImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PlantImage({ src, alt, className = "" }: PlantImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fallbackUrl = 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800';

  return (
    <div className={`relative overflow-hidden bg-stone-900 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-800 text-stone-500 animate-pulse">
          <Leaf className="h-6 w-6 text-emerald-600 animate-bounce" />
        </div>
      )}
      
      <img
        src={error ? fallbackUrl : src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}