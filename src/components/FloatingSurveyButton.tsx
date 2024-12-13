import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingSurveyButton() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center">
            {/* Expanded Message */}
            <div
                className={`
          mr-4 bg-white shadow-lg rounded-lg px-4 py-2 transform transition-all duration-300
          ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}
        `}
            >
                <p className="text-gray-700 whitespace-nowrap">Please, share your feedback!</p>
            </div>

            {/* Button */}
            <button
                onClick={() => window.open('https://survey123.arcgis.com/share/53ea8282b80d41faaa2b3eaeed822fd9', '_blank')}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                className="group relative bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Take our survey"
            >
                <MessageCircle className="h-6 w-6 transform transition-transform group-hover:rotate-12" />
            </button>
        </div>
    );
}