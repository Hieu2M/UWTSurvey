import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export default function TeamMember({ name, role, description, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-purple-600">{role}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
}