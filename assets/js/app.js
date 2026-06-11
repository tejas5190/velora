document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Premium Icons
    lucide.createIcons();

    // 2. Sticky Glass Navigation Physics
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-md', 'bg-white/95');
            nav.classList.remove('bg-white/80');
        } else {
            nav.classList.remove('shadow-md', 'bg-white/95');
            nav.classList.add('bg-white/80');
        }
    });

    // 3. Reveal Elements on Scroll (Editorial feel)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in to articles
    document.querySelectorAll('article, #founder .lg\\:w-7\\/12').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
});
