document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const typedTextEl = document.getElementById('typed-text');
    const typingSpeed = 150;
    let typingTimeout;

    function startTyping(targetText) {
        clearTimeout(typingTimeout);
        typedTextEl.textContent = '';
        let charIndex = 0;
        function type() {
            if (charIndex < targetText.length) {
                typedTextEl.textContent += targetText.charAt(charIndex);
                charIndex++;
                typingTimeout = setTimeout(type, typingSpeed);
            }
        }
        type();
    }

    setTimeout(() => startTyping("Hi i am spidy"), 800);

    const bgVideo = document.getElementById('bg-video');

    // Messi Mode Toggle controller
    const messiToggle = document.getElementById('messi-toggle');
    if (messiToggle) {
        const videoSource = bgVideo.querySelector('source');
        messiToggle.addEventListener('click', () => {
            const isMessi = document.body.classList.toggle('messi-mode');
            
            // Update typing text and video source
            if (isMessi) {
                startTyping("Messi is the Goat");
                videoSource.src = 'messi.mp4';
            } else {
                startTyping("Hi i am spidy");
                videoSource.src = 'Untitled.mp4';
            }
            
            // Reload and play video
            bgVideo.load();
            bgVideo.play().catch(err => console.log("Video play interrupted:", err));
        });
    }

    // Audio/Music toggle controller
    const musicToggle = document.getElementById('music-toggle');
    const muteIcon = document.getElementById('mute-icon');
    const unmuteIcon = document.getElementById('unmute-icon');

    if (musicToggle) {
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
    }

    // Chatbot functionality
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeChatBtn = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-input-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chat window
    chatToggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            chatInput.focus();
            scrollToBottom();
        }
    });

    closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.innerText = text;
        return div.innerHTML;
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = chatInput.value.trim();
        if (!messageText) return;

        // Append User Message
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'msg user-msg';
        userMsgDiv.innerHTML = escapeHtml(messageText);
        chatMessages.appendChild(userMsgDiv);
        chatInput.value = '';
        scrollToBottom();

        // Show Typing Indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'msg typing-indicator';
        typingIndicator.id = 'typing-indicator';
        typingIndicator.innerText = 'Spidy is typing...';
        chatMessages.appendChild(typingIndicator);
        scrollToBottom();

        // Respond after a delay
        setTimeout(() => {
            // Remove typing indicator
            const indicator = document.getElementById('typing-indicator');
            if (indicator) indicator.remove();

            // Append Spidy response with interactive links
            const botMsgDiv = document.createElement('div');
            botMsgDiv.className = 'msg bot-msg';
            
            const replyText = document.createElement('div');
            replyText.innerText = 'hey i am spidy';
            replyText.style.marginBottom = '8px';
            botMsgDiv.appendChild(replyText);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'chat-options';
            optionsDiv.style.display = 'flex';
            optionsDiv.style.gap = '8px';
            optionsDiv.style.marginTop = '6px';
            
            const instagramUrl = 'https://www.instagram.com/https.spidy_8?igsh=MWc0amFjbzN5NWtlbQ%3D%3D&utm_source=qr';
            
            const followLink = document.createElement('a');
            followLink.href = instagramUrl;
            followLink.target = '_blank';
            followLink.className = 'chat-option-btn';
            followLink.innerText = 'Follow';
            
            const dmLink = document.createElement('a');
            dmLink.href = instagramUrl;
            dmLink.target = '_blank';
            dmLink.className = 'chat-option-btn';
            dmLink.innerText = 'DM Me';

            optionsDiv.appendChild(followLink);
            optionsDiv.appendChild(dmLink);
            botMsgDiv.appendChild(optionsDiv);

            chatMessages.appendChild(botMsgDiv);
            scrollToBottom();
        }, 800);
    });
});
