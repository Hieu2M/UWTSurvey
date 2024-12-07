import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle route and hash restoration
try {
    const lastPath = window.sessionStorage.getItem('lastPath');
    const currentHash = window.location.hash;

    if (lastPath) {
        // Preserve hash if present in current URL
        const restoredPath = currentHash ? lastPath.split('#')[0] + currentHash : lastPath;
        window.history.replaceState(null, '', restoredPath);
        window.sessionStorage.removeItem('lastPath');
    }
} catch (e) {
    console.warn('Failed to restore path:', e);
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);