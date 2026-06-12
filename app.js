document.addEventListener('DOMContentLoaded', () => {
    const text = "Hi i am spidy";
    const typedTextEl = document.getElementById('typed-text');
    let charIndex = 0;
    const typingSpeed = 150; // Milliseconds per character

    function type() {
        if (charIndex < text.length) {
            typedTextEl.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }

    // Start typing after a short delay for smooth loading entrance
    setTimeout(type, 800);
});
