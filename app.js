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

            // Append Spidy response
            const botMsgDiv = document.createElement('div');
            botMsgDiv.className = 'msg bot-msg';
            botMsgDiv.innerText = 'hey i am spidy';
            chatMessages.appendChild(botMsgDiv);
            scrollToBottom();
        }, 800);
    });
});
