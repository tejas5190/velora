/**
 * Velora Core Engine Framework v2.0.0
 * Engineered for Ultra-Low Latency & High Dynamic Render Passes
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Core Modules
    VeloraOS.initClock();
    VeloraOS.initTelemetry();
    VeloraOS.optimizeVideoPlayback();
    VeloraOS.setupWindowInteractions();
});

const VeloraOS = {
    // 1. Live OS Clock Synchronization Engine
    initClock: () => {
        const clockElement = document.getElementById('os-clock');
        if (!clockElement) return;

        const syncTime = () => {
            const now = new Date();
            clockElement.innerText = now.toLocaleTimeString('en-US', {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        };
        setInterval(syncTime, 1000);
        syncTime(); // Immediate trigger to avoid initial delay flash
    },

    // 2. Mock Telemetry Real-time Log Streamer (Terminal Simulator)
    initTelemetry: () => {
        const terminalLog = document.getElementById('terminal-stream');
        if (!terminalLog) return;

        const logFeeds = [
            { text: "◇ Parsing incoming Googlebot vector pathways...", color: "text-gray-400" },
            { text: "> Syncing index maps with Cloudflare Edge Workers...", color: "text-amber-400" },
            { text: "✓ Routing 4K ProRes pipelines directly to VRAM arrays.", color: "text-green-400" },
            { text: "[INFO] Edge Delivery network status: 100% Optimal.", color: "text-blue-400" },
            { text: "> Crawl requests synchronized with dynamic JSON-LD models.", color: "text-purple-400" }
        ];

        let index = 0;
        setInterval(() => {
            const line = document.createElement('p');
            line.className = `${logFeeds[index].color} font-mono mt-1 transition-all opacity-0 transform translate-x-[-4px] duration-300`;
            line.innerText = logFeeds[index].text;
            
            terminalLog.appendChild(line);
            
            // Fade-in animation effect trigger via layout repaint
            setTimeout(() => line.classList.remove('opacity-0', 'translate-x-[-4px]'), 50);

            // Maintain autoscroll matrix behavior inside the box window
            terminalLog.scrollTop = terminalLog.scrollHeight;

            index = (index + 1) % logFeeds.length;

            // Garbage collection: Keep DOM light, clear lines above 30 logs
            if (terminalLog.children.length > 30) {
                terminalLog.removeChild(terminalLog.firstChild);
            }
        }, 3500);
    },

    // 3. Hardware Acceleration & Memory Management for Multi-Video Windows
    optimizeVideoPlayback: () => {
        const backgroundVideos = document.querySelectorAll('video');
        
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (!entry.isIntersecting) {
                    // Pause playback if the user scrolls past the window to avoid VRAM choke points
                    video.pause();
                } else {
                    // Trigger async promise-based playback execution models
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Suppress auto-play interruption exceptions on active browsers
                        });
                    }
                }
            });
        }, { threshold: 0.1 });

        backgroundVideos.forEach(video => {
            video.setAttribute('playsinline', '');
            video.setAttribute('muted', '');
            video.preload = "auto"; // Stream preloading initialization
            videoObserver.observe(video);
        });
    },

    // 4. Clean Focus Event Triggers for Windows
    setupWindowInteractions: () => {
        const windows = document.querySelectorAll('.glass-window');
        windows.forEach(win => {
            win.addEventListener('mouseenter', () => {
                // Dim down non-focused clusters slightly if desired, or highlight borders
                win.style.borderColor = 'rgba(255, 107, 53, 0.4)'; // Orange harvest accent feedback
            });
            win.addEventListener('mouseleave', () => {
                win.style.borderColor = 'rgba(255, 255, 255, 0.6)';
            });
        });
    }
};
