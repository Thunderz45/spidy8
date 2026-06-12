document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const text = "Hi i am spidy";
    const typedTextEl = document.getElementById('typed-text');
    let charIndex = 0;
    const typingSpeed = 150;

    function type() {
        if (charIndex < text.length) {
            typedTextEl.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, 800);

    // Audio/Music toggle controller
    const musicToggle = document.getElementById('music-toggle');
    const bgVideo = document.getElementById('bg-video');
    const muteIcon = document.getElementById('mute-icon');
    const unmuteIcon = document.getElementById('unmute-icon');

    musicToggle.addEventListener('click', () => {
        if (bgVideo.muted) {
            bgVideo.muted = false;
            muteIcon.classList.add('hidden');
            unmuteIcon.classList.remove('hidden');
        } else {
            bgVideo.muted = true;
            muteIcon.classList.remove('hidden');
            unmuteIcon.classList.add('hidden');
        }
    });
});
