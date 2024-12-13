import React, { useState } from 'react';
import ImageModal from "./ImageModal.tsx";

interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
}

export default function TeamMember({ name, role, description, imageUrl }: TeamMemberProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <div
                    className="relative cursor-pointer"
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
                        src={imageUrl}
                        alt={name}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
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
                imageUrl={imageUrl}
                alt={name}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}