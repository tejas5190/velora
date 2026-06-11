/**
 * Velora Immersive Engine
 * Handling Asset Injectors & Performance Observers
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icon Asset Pack (Lucide)
    // Yeh tere saare <i data-lucide="icon-name"> tags ko actual crisp SVGs mein convert kar dega
    lucide.createIcons();

    // 2. Hardware Accelerated Video Optimization (VRAM Protection)
    // Ye check karega ki agar video screen par nahi hai, toh pause kar de taaki mobile heat na mare.
    const mediaElements = document.querySelectorAll('video');
    
    const mediaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const media = entry.target;
            if (entry.isIntersecting) {
                // Play and catch exceptions to prevent browser auto-play block errors
                const playPromise = media.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => { /* handled */ });
                }
            } else {
                media.pause();
            }
        });
    }, { 
        // Trigger 10% before it enters/leaves the screen
        rootMargin: '10% 0px 10% 0px',
        threshold: 0 
    });

    mediaElements.forEach(media => mediaObserver.observe(media));
});
