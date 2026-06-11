/**
 * Velora Core Engine Framework v2.0.0[cite: 3]
 * Engineered for Ultra-Low Latency & High Dynamic Render Passes[cite: 3]
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Core Modules[cite: 3]
    VeloraOS.initClock(); //[cite: 3]
    VeloraOS.initTelemetry(); //[cite: 3]
    VeloraOS.optimizeVideoPlayback(); //[cite: 3]
    VeloraOS.setupWindowInteractions(); //[cite: 3]
});

const VeloraOS = {
    // 1. Live OS Clock Synchronization Engine[cite: 3]
    initClock: () => {
        const clockElement = document.getElementById('os-clock'); //[cite: 3]
        if (!clockElement) return; //[cite: 3]

        const syncTime = () => {
            const now = new Date(); //[cite: 3]
            clockElement.innerText = now.toLocaleTimeString('en-US', {
                hour12: true, //[cite: 3]
                hour: '2-digit', //[cite: 3]
                minute: '2-digit', //[cite: 3]
                second: '2-digit' //[cite: 3]
            });
        };
        setInterval(syncTime, 1000); //[cite: 3]
        syncTime(); // Immediate trigger to avoid initial delay flash[cite: 3]
    },

    // 2. Mock Telemetry Real-time Log Streamer (Terminal Simulator)[cite: 3]
    initTelemetry: () => {
        const terminalLog = document.getElementById('terminal-stream'); //[cite: 3]
        if (!terminalLog) return; //[cite: 3]

        const logFeeds = [
            { text: "◇ Parsing incoming Googlebot vector pathways...", color: "text-gray-400" }, //[cite: 3]
            { text: "> Syncing index maps with Cloudflare Edge Workers...", color: "text-amber-400" }, //[cite: 3]
            { text: "✓ Routing 4K ProRes pipelines directly to VRAM arrays.", color: "text-green-400" }, //[cite: 3]
            { text: "[INFO] Edge Delivery network status: 100% Optimal.", color: "text-blue-400" }, //[cite: 3]
            { text: "> Crawl requests synchronized with dynamic JSON-LD models.", color: "text-purple-400" } //[cite: 3]
        ];

        let index = 0; //[cite: 3]
        setInterval(() => {
            const line = document.createElement('p'); //[cite: 3]
            line.className = `${logFeeds[index].color} font-mono mt-1 transition-all opacity-0 transform translate-x-[-4px] duration-300`; //[cite: 3]
            line.innerText = logFeeds[index].text; //[cite: 3]
            
            terminalLog.appendChild(line); //[cite: 3]
            
            // Fade-in animation effect trigger via layout repaint[cite: 3]
            setTimeout(() => line.classList.remove('opacity-0', 'translate-x-[-4px]'), 50); //[cite: 3]

            // Maintain autoscroll matrix behavior inside the box window[cite: 3]
            terminalLog.scrollTop = terminalLog.scrollHeight; //[cite: 3]

            index = (index + 1) % logFeeds.length; //[cite: 3]

            // Garbage collection: Keep DOM light, clear lines above 30 logs[cite: 3]
            if (terminalLog.children.length > 30) {
                terminalLog.removeChild(terminalLog.firstChild); //[cite: 3]
            }
        }, 3500); //[cite: 3]
    },

    // 3. Hardware Acceleration & Memory Management for Multi-Video Windows[cite: 3]
    optimizeVideoPlayback: () => {
        const backgroundVideos = document.querySelectorAll('video'); //[cite: 3]
        
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target; //[cite: 3]
                if (!entry.isIntersecting) {
                    // Pause playback if the user scrolls past the window to avoid VRAM choke points[cite: 3]
                    video.pause(); //[cite: 3]
                } else {
                    // Trigger async promise-based playback execution models[cite: 3]
                    const playPromise = video.play(); //[cite: 3]
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Suppress auto-play interruption exceptions on active browsers[cite: 3]
                        });
                    }
                }
            });
        }, { threshold: 0.1 }); //[cite: 3]

        backgroundVideos.forEach(video => {
            video.setAttribute('playsinline', ''); //[cite: 3]
            video.setAttribute('muted', ''); //[cite: 3]
            video.preload = "auto"; // Stream preloading initialization[cite: 3]
            videoObserver.observe(video); //[cite: 3]
        });
    },

    // 4. Clean Focus Event Triggers for Windows[cite: 3]
    setupWindowInteractions: () => {
        const windows = document.querySelectorAll('.glass-window'); //[cite: 3]
        windows.forEach(win => {
            win.addEventListener('mouseenter', () => {
                // Dim down non-focused clusters slightly if desired, or highlight borders[cite: 3]
                win.style.borderColor = 'rgba(255, 107, 53, 0.4)'; // Orange harvest accent feedback[cite: 3]
            });
            win.addEventListener('mouseleave', () => {
                win.style.borderColor = 'rgba(255, 255, 255, 0.6)'; //[cite: 3]
            });
        });
    }
};
