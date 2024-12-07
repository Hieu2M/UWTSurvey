import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Handle hash navigation
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        // Default scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Store current path including hash in sessionStorage
        try {
            const fullPath = pathname + (hash || '');
            if (pathname !== '/') {
                window.sessionStorage.setItem('lastPath', fullPath);
            }
        } catch (e) {
            console.warn('Failed to store path:', e);
        }
    }, [pathname, hash]);

    return null;
}