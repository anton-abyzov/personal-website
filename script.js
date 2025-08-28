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

// Toggle expand/collapse for experience details
function toggleExpand(button) {
    const details = button.nextElementSibling;
    details.classList.toggle('expanded');
    button.textContent = details.classList.contains('expanded') ? 'Show Less' : 'Read More Details';
}

// Make toggleExpand globally available
window.toggleExpand = toggleExpand;

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
                details: [
                    'Designed and implemented unified data lake using Snowflake for 1,500+ clinics',
                    'Built real-time ETL pipelines with Apache NiFi processing 5M+ patient records',
                    'Implemented FHIR-compliant healthcare data standards for interoperability',
                    'Created comprehensive data governance framework ensuring PIPEDA compliance',
                    'Reduced data processing time by 70% through optimization and parallelization',
                    'Built predictive analytics models for patient retention and treatment outcomes',
                    'Established API gateway handling 10M+ requests daily with sub-100ms latency',
                    'Led team of 12 engineers through Agile transformation and DevOps adoption'
                ],
                tech: ['Snowflake', 'Apache NiFi', 'Kafka', '.NET Core', 'AWS']
            },
            {
                date: 'Jan 2020 - Jun 2022',
                company: '⚽ Sportradar',
                title: 'Senior Platform Engineer (via Softgreat)',
                description: 'Built real-time sports data platform processing 1M+ events/second.',
                details: [
                    'Architected high-throughput sports data platform processing 1M+ events/second',
                    'Implemented Apache Pulsar message streaming handling 50TB daily data volume',
                    'Designed microservices architecture with 200+ services on Kubernetes',
                    'Built real-time odds calculation engine with 99.999% accuracy',
                    'Developed WebSocket infrastructure serving 100K+ concurrent connections',
                    'Created distributed caching layer reducing database load by 85%',
                    'Implemented chaos engineering practices achieving 99.99% availability',
                    'Optimized Cassandra clusters for time-series data with sub-millisecond queries'
                ],
                tech: ['Apache Pulsar', 'Kubernetes', '.NET Core', 'Go', 'Cassandra']
            },
            {
                date: 'Apr 2018 - Mar 2020',
                company: '🏭 Grenzebach Group',
                title: 'IIoT Platform Architect (via Softgreat)',
                description: 'Led 50+ engineers building Industrial IoT platform for smart factories.',
                details: [
                    'Architected Industrial IoT platform connecting 10,000+ factory devices',
                    'Implemented OPC UA protocol integration for real-time machine data collection',
                    'Built predictive maintenance ML models reducing downtime by 40%',
                    'Designed time-series database solution using InfluxDB for sensor data',
                    'Created digital twin framework for factory floor simulation and optimization',
                    'Established edge computing infrastructure processing data at 200+ locations',
                    'Implemented TensorFlow-based computer vision for quality control inspection',
                    'Led 50+ engineers across 5 countries in platform development and deployment'
                ],
                tech: ['Azure IoT', 'OPC UA', 'InfluxDB', '.NET Core', 'TensorFlow']
            },
            {
                date: 'Jan 2016 - Mar 2018',
                company: '🚀 Softgreat (Founder)',
                title: 'Founder & CEO',
                description: 'Built software consultancy from $0 to $7.3M revenue with 66 employees.',
                details: [
                    'Founded and scaled software development company from 0 to 66 employees',
                    'Generated $7.3M in revenue over 6 years with 40% YoY growth',
                    'Secured contracts with Fortune 500 companies including Swiss Re, T-Systems',
                    'Established offices in 3 countries with distributed teams',
                    'Achieved Top 10 Most Efficient Belarusian Companies ranking',
                    'Built flagship products serving 100K+ users globally',
                    'Implemented ISO 9001 quality management system',
                    'Achieved 95% client retention rate with NPS score of 72'
                ],
                tech: ['Business Strategy', 'Team Building', '.NET', 'React', 'AWS']
            },
            {
                date: 'Sep 2015 - Dec 2019',
                company: '🏢 Swiss Re',
                title: 'Lead Platform Architect (via Softgreat)',
                description: 'Modernized insurance platform processing $2B+ annual premiums.',
                details: [
                    'Led digital transformation of legacy insurance systems',
                    'Architected microservices platform processing $2B+ annual premiums',
                    'Implemented event-sourcing architecture for audit compliance',
                    'Built ML models for risk assessment and fraud detection',
                    'Reduced claim processing time from days to hours through automation',
                    'Designed disaster recovery system with 99.99% availability',
                    'Migrated 30+ legacy applications to cloud-native architecture',
                    'Achieved 60% reduction in infrastructure costs through optimization'
                ],
                tech: ['Azure', 'Service Fabric', 'Event Sourcing', 'ML.NET', 'CosmosDB']
            },
            {
                date: 'Jan 2014 - Aug 2015',
                company: '📡 T-Systems',
                title: 'Senior Software Engineer (via Softgreat)',
                description: 'Developed telecommunications platform serving 5M+ customers.',
                details: [
                    'Built high-performance billing system processing 100M+ transactions daily',
                    'Implemented real-time fraud detection saving $10M+ annually',
                    'Developed customer portal serving 5M+ users with 99.9% uptime',
                    'Created distributed caching layer improving response times by 80%',
                    'Built API gateway handling 50K requests/second',
                    'Implemented comprehensive monitoring and alerting system',
                    'Led migration from monolith to microservices architecture',
                    'Mentored team of 8 junior developers'
                ],
                tech: ['Java', 'Spring Boot', 'Oracle', 'Redis', 'RabbitMQ']
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
                        <button class="expand-btn" onclick="toggleExpand(this)">Read More Details</button>
                        <div class="experience-details">
                            <h5>Key Achievements:</h5>
                            <ul>
                                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
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