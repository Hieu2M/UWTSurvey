import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
    imageUrl: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function ImageModal({ imageUrl, alt, isOpen, onClose }: ImageModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative max-w-4xl w-full mx-4">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                    aria-label="Close image"
                >
                    <X className="h-8 w-8" />
                </button>
                <img
                    src={imageUrl}
                    alt={alt}
                    className="w-full h-auto rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
}