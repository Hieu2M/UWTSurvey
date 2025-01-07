import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from '../components/ImageModal.tsx';

interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
    imageUrls: string[];
}

export default function TeamMember({ name, role, description, imageUrls }: TeamMemberProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <div
                    className="relative cursor-pointer h-64"
                    onClick={() => setIsModalOpen(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            setIsModalOpen(true);
                        }
                    }}
                    aria-label={`View larger image of ${name}`}
                >
                    <img
                        src={imageUrls[currentImageIndex]}
                        alt={`${name} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {imageUrls.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                {imageUrls.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 hover:opacity-100 transition-opacity">
              Click to expand
            </span>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="text-purple-600">{role}</p>
                    <p className="mt-2 text-gray-700">{description}</p>
                </div>
            </div>

            <ImageModal
                imageUrl={imageUrls[currentImageIndex]}
                alt={`${name} - Image ${currentImageIndex + 1}`}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onNext={nextImage}
                onPrev={prevImage}
                hasMultipleImages={imageUrls.length > 1}
                currentIndex={currentImageIndex + 1}
                totalImages={imageUrls.length}
            />
        </>
    );
}