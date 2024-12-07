import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enhanced route restoration
const restoreRoute = () => {
    const path = window.localStorage.getItem('path');
    const lastVisit = window.localStorage.getItem('lastVisit');

    if (path) {
        // Clear stored path
        window.localStorage.removeItem('path');
        window.localStorage.removeItem('lastVisit');

        // Only restore if the last visit was within the last hour
        const oneHour = 60 * 60 * 1000;
        if (lastVisit && Date.now() - parseInt(lastVisit) < oneHour) {
            window.history.replaceState(null, '', path);
        }
    }
};

// Restore route on initial load
restoreRoute();

// Handle mobile visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        restoreRoute();
    }
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);