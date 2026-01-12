// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact button interaction
document.getElementById("contactBtn").addEventListener("click", function () {
    const email = "internetgem@gmail.com";

    // Create a more elegant notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #111111;
        color: #ffffff;
        padding: 40px 50px;
        border-radius: 8px;
        border: 1px solid #ff6b35;
        box-shadow: 0 20px 60px rgba(255, 107, 53, 0.3);
        z-index: 1000;
        text-align: center;
        animation: fadeIn 0.3s ease;
    `;

    notification.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #ff6b35; font-weight: 400;">Get in Touch</h3>
        <p style="margin: 0 0 20px 0; color: #9ca3af;">Feel free to reach out at:</p>
        <p style="margin: 0; color: #ffffff; font-size: 1.1rem;">${email}</p>
        <button id="closeNotification" style="margin-top: 25px; padding: 10px 30px; background: #ff6b35; border: none; color: #000000; cursor: pointer; border-radius: 4px; font-weight: 500;">Close</button>
    `;

    document.body.appendChild(notification);

    // Close button functionality
    document.getElementById('closeNotification').addEventListener('click', function() {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and projects
document.querySelectorAll('section, .project').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Code block typing effect
document.addEventListener('DOMContentLoaded', () => {
    const codeBlock = document.querySelector('.code-block');
    if (codeBlock) {
        const originalContent = codeBlock.innerHTML;
        codeBlock.innerHTML = '';
        let i = 0;

        const typeWriter = () => {
            if (i < originalContent.length) {
                codeBlock.innerHTML += originalContent.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        };

        // Start typing when code block is visible
        const codeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && codeBlock.innerHTML === '') {
                    typeWriter();
                    codeObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });

        codeObserver.observe(codeBlock);
    }
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});
