import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string | null;
  altText?: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, altText, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (imageUrl) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-stone-900/80 border border-stone-700 text-stone-300 hover:text-white hover:bg-stone-800 rounded-full transition-colors z-50"
      >
        <X className="w-6 h-6" />
      </button>
      <div 
        className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt={altText || "확대된 이미지"} 
          className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-stone-800"
        />
      </div>
    </div>
  );
}
