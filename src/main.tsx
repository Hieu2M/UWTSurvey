import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

<<<<<<< HEAD
<<<<<<< HEAD
// Handle route and hash restoration
try {
    const lastPath = window.sessionStorage.getItem('lastPath');
    const currentHash = window.location.hash;

    if (lastPath) {
        // Preserve hash if present in current URL
        const restoredPath = currentHash ? lastPath.split('#')[0] + currentHash : lastPath;
        window.history.replaceState(null, '', restoredPath);
        window.sessionStorage.removeItem('lastPath');
=======
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
>>>>>>> parent of 9a337b3 (update refresh function 3)
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

=======
>>>>>>> parent of 4b31a6f (update refresh function)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
