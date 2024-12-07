import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Smooth scroll to top on route change
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Store current path in sessionStorage
        if (pathname !== '/') {
            try {
                window.sessionStorage.setItem('lastPath', pathname);
            } catch (e) {
                console.warn('Failed to store path:', e);
            }
        }
    }, [pathname]);

    return null;
}