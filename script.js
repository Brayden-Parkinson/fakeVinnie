// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.evidence-item, .finding-card, .analysis-point, .doubt-stage, .recommendation');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate confidence bar on conclusion page
    const confidenceFill = document.querySelector('.confidence-fill');
    if (confidenceFill) {
        setTimeout(() => {
            confidenceFill.style.width = confidenceFill.textContent.trim();
        }, 500);
    }
    
    // Add active state to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Easter egg: Konami code reveals additional "evidence"
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        flex-direction: column;
        gap: 2rem;
    `;
    
    const message = document.createElement('div');
    message.style.cssText = `
        color: #c9a961;
        font-family: 'Crimson Pro', serif;
        font-size: 3rem;
        text-align: center;
        padding: 2rem;
    `;
    message.textContent = '🍝 BREAKING: Vinnie spotted eating French cuisine 🥖';
    
    const subMessage = document.createElement('div');
    subMessage.style.cssText = `
        color: #a0a0a0;
        font-family: 'Inter', sans-serif;
        font-size: 1.2rem;
        text-align: center;
    `;
    subMessage.textContent = 'Confidence in Italian heritage drops to 12%';
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close Investigation Files';
    closeBtn.style.cssText = `
        padding: 1rem 2rem;
        background-color: #c9a961;
        color: #1a1a1a;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    `;
    closeBtn.onclick = () => body.removeChild(overlay);
    
    overlay.appendChild(message);
    overlay.appendChild(subMessage);
    overlay.appendChild(closeBtn);
    body.appendChild(overlay);
}

// Add subtle parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Typewriter effect for verdict
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typewriter effect to verdict result on conclusion page
document.addEventListener('DOMContentLoaded', () => {
    const verdictResult = document.querySelector('.verdict-result');
    if (verdictResult) {
        const originalText = verdictResult.textContent;
        verdictResult.style.minHeight = verdictResult.offsetHeight + 'px';
        setTimeout(() => {
            typeWriter(verdictResult, originalText, 100);
        }, 1000);
    }
});
