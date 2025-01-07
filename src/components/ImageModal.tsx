import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
    imageUrl: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
    hasMultipleImages?: boolean;
    currentIndex?: number;
    totalImages?: number;
}

export default function ImageModal({
   imageUrl,
   alt,
   isOpen,
   onClose,
   onNext,
   onPrev,
   hasMultipleImages,
   currentIndex,
   totalImages
}: ImageModalProps) {
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

                <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <img
                        src={imageUrl}
                        alt={alt}
                        className="w-full h-auto rounded-lg shadow-2xl"
                    />

                    {hasMultipleImages && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onPrev?.();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onNext?.();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                                {currentIndex && totalImages ? `${currentIndex} / ${totalImages}` : null}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}