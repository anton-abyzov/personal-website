// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Typewriter effect
const phrases = [
    'Platform Technology Lead',
    'AI/ML Pioneer',
    'Cloud Native Architect',
    'DevOps Champion',
    'Digital Transformation Expert',
    'Full-Stack Developer',
    'Technical Leader'
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function typewrite() {
    isEnd = false;
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;

    if (phraseIndex < phrases.length) {
        if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
            currentPhrase.push(phrases[phraseIndex][letterIndex]);
            letterIndex++;
            typewriter.textContent = currentPhrase.join('');
        }

        if (isDeleting && letterIndex <= phrases[phraseIndex].length) {
            currentPhrase.pop();
            letterIndex--;
            typewriter.textContent = currentPhrase.join('');
        }

        if (letterIndex === phrases[phraseIndex].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && letterIndex === 0) {
            currentPhrase = [];
            isDeleting = false;
            phraseIndex++;
            if (phraseIndex === phrases.length) {
                phraseIndex = 0;
            }
        }
    }

    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(typewrite, time);
}

// Start typewriter effect when page loads
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typewrite, 1000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Toggle full experience
function toggleFullExperience(e) {
    e.preventDefault();
    const button = e.target;
    const timeline = document.querySelector('.timeline');
    
    if (timeline.classList.contains('expanded')) {
        timeline.classList.remove('expanded');
        button.textContent = 'View Full Experience';
        // Show only first 3 items
        const items = timeline.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
            if (index >= 3) {
                item.style.display = 'none';
            }
        });
    } else {
        // Add more experience items dynamically
        const additionalExperience = [
            {
                date: 'May 2022 - Apr 2023',
                company: '🦷 DentalCorp',
                title: 'Solutions Architect / Data Platform Lead',
                description: 'Architected unified data platform integrating 1,500+ dental clinics across Canada.',
                tech: ['Snowflake', 'Apache NiFi', 'Kafka', '.NET Core', 'AWS']
            },
            {
                date: 'Jan 2020 - Jun 2022',
                company: '⚽ Sportradar',
                title: 'Senior Platform Engineer (via Softgreat)',
                description: 'Built real-time sports data platform processing 1M+ events/second.',
                tech: ['Apache Pulsar', 'Kubernetes', '.NET Core', 'Go', 'Cassandra']
            },
            {
                date: 'Apr 2018 - Mar 2020',
                company: '🏭 Grenzebach Group',
                title: 'IIoT Platform Architect (via Softgreat)',
                description: 'Led 50+ engineers building Industrial IoT platform for smart factories.',
                tech: ['Azure IoT', 'OPC UA', 'InfluxDB', '.NET Core', 'TensorFlow']
            }
        ];
        
        // Check if additional items already exist
        if (!timeline.querySelector('.additional-item')) {
            additionalExperience.forEach((exp, index) => {
                const item = document.createElement('div');
                item.className = 'timeline-item additional-item';
                item.setAttribute('data-aos', 'fade-up');
                item.setAttribute('data-aos-delay', (index + 3) * 100);
                
                item.innerHTML = `
                    <div class="timeline-date">${exp.date}</div>
                    <div class="timeline-content">
                        <h3>${exp.company}</h3>
                        <h4>${exp.title}</h4>
                        <p>${exp.description}</p>
                        <div class="tech-tags">
                            ${exp.tech.map(t => `<span>${t}</span>`).join('')}
                        </div>
                    </div>
                `;
                timeline.appendChild(item);
            });
        }
        
        // Show all items
        const items = timeline.querySelectorAll('.timeline-item');
        items.forEach(item => {
            item.style.display = 'flex';
        });
        
        timeline.classList.add('expanded');
        button.textContent = 'Show Less';
        
        // Reinitialize AOS for new elements
        AOS.refresh();
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles && scrolled < window.innerHeight) {
        heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add counter animation for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('+')) {
                    const num = parseInt(text.replace('+', ''));
                    stat.textContent = '0';
                    animateCounter(stat, num);
                    setTimeout(() => {
                        stat.textContent = text;
                    }, 2000);
                }
            });
        }
    });
}, observerOptions);

// Observe hero stats
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console Easter Egg
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cLooking for something interesting? Check out my GitHub!', 'font-size: 14px; color: #0066ff;');
console.log('%c🚀 https://github.com/anton-abyzov', 'font-size: 14px; color: #ff00ff;');