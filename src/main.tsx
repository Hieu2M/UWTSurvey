import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle route restoration
try {
    const lastPath = window.sessionStorage.getItem('lastPath');
    if (lastPath && !window.location.pathname.includes('.')) {
        window.history.replaceState(null, '', lastPath);
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