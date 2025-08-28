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
                viaCompany: null,
                description: 'Architected unified data platform integrating 1,500+ dental clinics across Canada.',
                details: [
                    'Designed HIPAA-compliant data platform integrating 9 Practice Management Systems',
                    'Built real-time ETL pipelines with Apache NiFi processing 5M+ patient records daily',
                    'Implemented Master Data Management (MDM) using Informatica for patient deduplication',
                    'Created HL7 FHIR compliant APIs for healthcare data exchange with insurance providers',
                    'Designed multi-tenant architecture supporting 1,500+ clinics with data isolation',
                    'Built analytics platform using Snowflake, dbt for centralized reporting',
                    'Developed predictive models reducing appointment no-shows by 25%',
                    'Created automated billing reconciliation system saving $2M+ annually'
                ],
                tech: ['Snowflake', 'Apache NiFi', 'Kafka', '.NET Core', 'AWS']
            },
            {
                date: 'Jan 2020 - Jun 2022',
                company: '⚽ Sportradar',
                title: 'Senior Platform Engineer / Live Data Architect',
                viaCompany: { name: 'Softgreat', url: 'https://softgreat.com/', type: 'LLC' },
                description: 'Architected real-time sports data platform processing live feeds from 100K+ sporting events.',
                details: [
                    'Built ultra-low latency platform processing 1M+ events/second with sub-100ms latency',
                    'Designed high-frequency trading system for live betting odds calculation',
                    'Implemented Apache Pulsar for guaranteed message delivery in distributed system',
                    'Created real-time data pipelines using Apache Beam, Dataflow for stream processing',
                    'Built WebSocket infrastructure supporting 500K+ concurrent connections',
                    'Architected auto-scaling infrastructure handling 10x traffic spikes during major events',
                    'Reduced data latency from 5s to 100ms through architecture optimization',
                    'Built ML models for match-fixing detection analyzing betting patterns'
                ],
                tech: ['Apache Pulsar', 'Kafka', 'Kubernetes', '.NET Core', 'Go', 'Cassandra']
            },
            {
                date: 'Apr 2018 - Mar 2020',
                company: '🏭 Grenzebach Group',
                title: 'IIoT Platform Architect / Technical Lead',
                viaCompany: { name: 'Softgreat', url: 'https://softgreat.com/', type: 'LLC' },
                description: 'Led 50+ engineers across 3 continents building Industrial IoT platform for smart factory automation.',
                details: [
                    'Architected IIoT platform collecting telemetry from 10,000+ industrial sensors using OPC UA',
                    'Built edge computing solution using Azure IoT Edge for real-time anomaly detection',
                    'Implemented predictive maintenance ML models reducing equipment downtime by 35%',
                    'Designed time-series data architecture using InfluxDB, TimescaleDB for sensor data',
                    'Created digital twin simulations using Unity3D and Azure Digital Twins',
                    'Integrated with Siemens S7, Allen-Bradley PLCs for production line control',
                    'Built SCADA system replacement using modern web technologies',
                    'Led distributed teams across Germany, USA, China with Agile/SAFe methodology'
                ],
                tech: ['Azure IoT', 'OPC UA', 'InfluxDB', '.NET Core', 'TensorFlow']
            },
            {
                date: 'May 2017 - May 2018',
                company: '🛍️ Luxnow',
                title: 'Platform Engineer / Full-Stack Developer',
                viaCompany: { name: 'Softgreat', url: 'https://softgreat.com/', type: 'LLC' },
                description: 'Built luxury goods rental marketplace from MVP to $1M+ revenue.',
                details: [
                    'Developed multi-vendor marketplace platform using Django, PostgreSQL supporting 500+ vendors',
                    'Implemented Stripe Connect for split payments processing $100K+ monthly',
                    'Built recommendation engine using collaborative filtering increasing conversion by 30%',
                    'Created real-time inventory management system with reservation logic',
                    'Designed responsive web application using React, Redux with SSR',
                    'Implemented full-text search using Elasticsearch across 50K+ products',
                    'Built image processing pipeline using AWS Lambda for automatic resizing',
                    'Developed fraud detection system reducing chargebacks by 80%'
                ],
                tech: ['Python', 'Django', 'React', 'PostgreSQL', 'Elasticsearch', 'AWS']
            },
            {
                date: 'May 2016 - May 2017',
                company: '📚 eSyncTraining',
                title: 'Senior Software Architect',
                viaCompany: null,
                description: 'Architected enterprise learning management platform serving 500K+ students globally.',
                details: [
                    'Migrated monolithic ASP.NET application to microservices using .NET Core 1.0/1.1',
                    'Implemented SCORM 2004 and xAPI compliance for course content delivery',
                    'Built LTI 1.3 integration connecting with Canvas, Blackboard, Moodle',
                    'Designed multi-tenant architecture with database-per-tenant isolation',
                    'Created real-time collaboration features using SignalR for virtual classrooms',
                    'Implemented SAML 2.0, OAuth 2.0 for enterprise SSO with 50+ universities',
                    'Built video streaming infrastructure using AWS CloudFront, Elemental',
                    'First production deployment of .NET Core in EdTech industry'
                ],
                tech: ['.NET Core', 'IdentityServer 4', 'Angular 4', 'SQL Server', 'AWS']
            },
            {
                date: 'Aug 2014 - May 2016',
                company: '💊 SocialWellth',
                title: 'Senior Software Engineer / Technical Lead',
                viaCompany: null,
                description: 'Built digital health platform integrating wearable devices for chronic disease management.',
                details: [
                    'Developed platform integrating Garmin, Fitbit, Apple HealthKit APIs processing 10M+ data points daily',
                    'Built HIPAA-compliant architecture with end-to-end encryption and audit logging',
                    'Implemented real-time alerting system for abnormal health readings',
                    'Created predictive models for diabetes management improving outcomes by 22%',
                    'Designed RESTful APIs consumed by iOS/Android mobile applications',
                    'Built event-driven architecture using RabbitMQ for asynchronous processing',
                    'Implemented OAuth 2.0 for secure third-party device authorization',
                    'Created data pipeline using Apache Spark for health analytics'
                ],
                tech: ['.NET Framework', 'ASP.NET MVC', 'RabbitMQ', 'SQL Server', 'MongoDB', 'AWS']
            },
            {
                date: 'Mar 2013 - Jul 2014',
                company: '📊 Agiboo',
                title: 'Senior Software Engineer',
                viaCompany: { name: 'Ciklum', url: 'https://www.ciklum.com/', type: 'Inc.' },
                description: 'Developed commodity trading and risk management (CTRM) platform for agricultural commodities.',
                details: [
                    'Built high-frequency trading engine processing 100K+ transactions daily',
                    'Implemented risk calculation models for commodity derivatives (futures, options)',
                    'Created position management system with P&L calculation and VAR analysis',
                    'Developed integration with ICE, CME for real-time market data feeds',
                    'Built contract lifecycle management from negotiation to settlement',
                    'Designed OLAP cubes using SQL Server Analysis Services for trade analytics',
                    'Implemented complex pricing models for exotic derivatives',
                    'Created regulatory reporting for EMIR, MiFID compliance'
                ],
                tech: ['.NET Framework', 'WCF', 'ASP.NET MVC', 'SQL Server', 'Crystal Reports']
            },
            {
                date: 'Jun 2011 - Feb 2013',
                company: '🏗️ Richbrains',
                title: 'Head of Department / Development Manager',
                viaCompany: null,
                description: 'Led innovation department developing cutting-edge digital products, growing team from 3 to 12 developers.',
                details: [
                    'Built 30-minute grocery delivery system (pre-Instacart era) processing 5,000+ daily orders',
                    'Developed Uber-like taxi application for 15K+ drivers with real-time routing',
                    'Created London Business School student portal with course management features',
                    'Built telemedicine platform for remote consultations with video streaming',
                    'Introduced Agile/Scrum methodology improving delivery predictability by 40%',
                    'Established CI/CD pipeline using TeamCity, Octopus Deploy',
                    'Implemented code review process reducing production defects by 60%',
                    'Mentored junior developers with 80% promotion rate to senior roles'
                ],
                tech: ['.NET Framework', 'ASP.NET MVC', 'MongoDB', 'SQL Server', 'SignalR']
            },
            {
                date: 'May 2009 - Jun 2011',
                company: '📸 Intetics',
                title: 'Senior Software Engineer',
                viaCompany: null,
                description: 'Core contributor to AdoramaPix photo printing platform, driving revenue growth from $50M to $150M+.',
                details: [
                    'Built distributed photo rendering system processing 100K+ photo books monthly',
                    'Implemented personalization engine with collaborative filtering for recommendations',
                    'Developed high-performance image processing pipeline using GDI+ and ImageMagick',
                    'Created shopping cart with complex pricing rules and promotional engine',
                    'Built integration with FedEx, UPS APIs for shipping calculation',
                    'Optimized database queries reducing page load time from 5s to 500ms',
                    'Implemented distributed caching using AppFabric Cache',
                    'Designed CDN strategy using Akamai for global content delivery'
                ],
                tech: ['.NET Framework', 'ASP.NET', 'WCF', 'SQL Server', 'jQuery', 'AWS S3']
            },
            {
                date: 'Jun 2006 - May 2009',
                company: '⚙️ Itransition',
                title: 'Software Engineer → Lead Software Engineer',
                viaCompany: null,
                description: 'Rapid career progression from junior to lead engineer in 18 months, delivering enterprise solutions for Fortune 500 clients.',
                details: [
                    'Led team of 8 developers building Dynamics NAV customizations for manufacturing client',
                    'Developed comprehensive HRIS processing payroll for 10,000+ employees',
                    'Built SharePoint-based DMS with workflow automation using Windows Workflow Foundation',
                    'Created BI solution using SQL Server Reporting Services for CFO dashboards',
                    'Progressed from ASP.NET 2.0 WebForms to early adopter of ASP.NET MVC',
                    'Implemented Service-Oriented Architecture using WCF',
                    'Built integration adapters for SAP, Oracle EBS using BizTalk Server',
                    'Achieved 95% client satisfaction score across all projects'
                ],
                tech: ['.NET Framework', 'ASP.NET', 'WCF', 'SQL Server', 'SharePoint', 'BizTalk']
            }
        ];
        
        // Check if additional items already exist
        if (!timeline.querySelector('.additional-item')) {
            additionalExperience.forEach((exp, index) => {
                const item = document.createElement('div');
                item.className = 'timeline-item additional-item';
                item.setAttribute('data-aos', 'fade-up');
                item.setAttribute('data-aos-delay', (index + 3) * 100);
                
                const viaCompanyHtml = exp.viaCompany ? `
                    <div class="company-meta">
                        <a href="${exp.viaCompany.url}" target="_blank" class="via-company" title="Contracted through ${exp.viaCompany.name}">
                            <i class="fas fa-handshake"></i>
                            <span>${exp.viaCompany.name}</span>
                            <span class="company-type">${exp.viaCompany.type || ''}</span>
                        </a>
                    </div>
                ` : '';
                
                item.innerHTML = `
                    <div class="timeline-content">
                        <div class="timeline-date">${exp.date}</div>
                        <h3>${exp.company}</h3>
                        <h4>${exp.title}</h4>
                        ${viaCompanyHtml}
                        <p>${exp.description}</p>
                        <button class="expand-btn" onclick="toggleExpand(this)">Read More Details</button>
                        <div class="experience-details">
                            <h5>Key Achievements:</h5>
                            <ul>
                                ${exp.details ? exp.details.map(detail => `<li>${detail}</li>`).join('') : ''}
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
function animateCounter(element, target, isCurrency = false, suffix = '', duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = (isCurrency ? '$' : '') + target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = (isCurrency ? '$' : '') + Math.floor(current) + suffix;
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
                    // Extract number from text, handling currency symbols
                    const cleanText = text.replace(/[\$,]/g, '').replace('+', '');
                    const num = parseInt(cleanText);
                    
                    // Check if we successfully parsed a number
                    if (!isNaN(num)) {
                        // Determine if it's a currency value
                        const isCurrency = text.includes('$');
                        const suffix = text.includes('M') ? 'M' : '';
                        
                        stat.textContent = isCurrency ? '$0' : '0';
                        animateCounter(stat, num, isCurrency, suffix);
                        setTimeout(() => {
                            stat.textContent = text;
                        }, 2000);
                    }
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

// Modal and Carousel Functionality
class ImageCarousel {
    constructor(images, captions = []) {
        this.images = images;
        this.captions = captions;
        this.currentIndex = 0;
        this.modal = null;
        this.carousel = null;
    }

    create() {
        // Create modal structure
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'modal-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => this.close();
        
        // Create carousel
        this.carousel = document.createElement('div');
        this.carousel.className = 'carousel-container';
        
        const slidesContainer = document.createElement('div');
        slidesContainer.className = 'carousel-slides';
        
        // Add images
        this.images.forEach((img, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = this.captions[index] || `Image ${index + 1}`;
            slide.appendChild(imgElement);
            slidesContainer.appendChild(slide);
        });
        
        // Navigation buttons
        if (this.images.length > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'carousel-nav carousel-prev';
            prevBtn.innerHTML = '❮';
            prevBtn.onclick = () => this.navigate(-1);
            
            const nextBtn = document.createElement('button');
            nextBtn.className = 'carousel-nav carousel-next';
            nextBtn.innerHTML = '❯';
            nextBtn.onclick = () => this.navigate(1);
            
            this.carousel.appendChild(prevBtn);
            this.carousel.appendChild(nextBtn);
        }
        
        // Indicators
        if (this.images.length > 1) {
            const indicatorsContainer = document.createElement('div');
            indicatorsContainer.className = 'carousel-indicators';
            
            this.images.forEach((_, index) => {
                const indicator = document.createElement('span');
                indicator.className = 'carousel-indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.onclick = () => this.goToSlide(index);
                indicatorsContainer.appendChild(indicator);
            });
            
            this.carousel.appendChild(indicatorsContainer);
        }
        
        // Caption
        if (this.captions.length > 0) {
            const caption = document.createElement('div');
            caption.className = 'carousel-caption';
            caption.textContent = this.captions[0];
            this.carousel.appendChild(caption);
        }
        
        this.carousel.appendChild(slidesContainer);
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(this.carousel);
        this.modal.appendChild(modalContent);
        document.body.appendChild(this.modal);
        
        // Close on outside click
        this.modal.onclick = (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        };
        
        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboard = (e) => {
            if (this.modal.classList.contains('active')) {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowLeft') this.navigate(-1);
                if (e.key === 'ArrowRight') this.navigate(1);
            }
        });
    }
    
    navigate(direction) {
        const slides = this.carousel.querySelectorAll('.carousel-slide');
        const indicators = this.carousel.querySelectorAll('.carousel-indicator');
        const caption = this.carousel.querySelector('.carousel-caption');
        
        this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
        
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
        
        if (caption && this.captions[this.currentIndex]) {
            caption.textContent = this.captions[this.currentIndex];
        }
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.navigate(0);
    }
    
    open() {
        if (!this.modal) this.create();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (this.modal) {
                document.body.removeChild(this.modal);
                this.modal = null;
            }
        }, 300);
        document.removeEventListener('keydown', this.handleKeyboard);
    }
}

// Platform Value Modal
function createPlatformValueModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content platform-value-modal';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => closePlatformValueModal(modal);
    
    const content = `
        <div class="platform-value-header">
            <h2 class="platform-value-total">$100M+</h2>
            <p class="platform-value-subtitle">Platform Value Delivered Through Technology Innovation</p>
        </div>
        <div class="platform-value-breakdown">
            <div class="platform-value-item">
                <div class="platform-value-company">LuxNow</div>
                <div class="platform-value-amount">$85M+</div>
                <div class="platform-value-description">
                    Led architectural design and development of luxury marketplace platform. 
                    Raised $85M in Series C funding with $500M valuation. Implemented scalable 
                    microservices architecture supporting 1M+ users.
                </div>
            </div>
            <div class="platform-value-item">
                <div class="platform-value-company">PolyFrog Digital</div>
                <div class="platform-value-amount">$7.3M</div>
                <div class="platform-value-description">
                    As CTO, grew startup from inception to $7.3M revenue. Built complete 
                    technology stack, assembled engineering team, and established DevOps practices 
                    that reduced deployment time by 90%.
                </div>
            </div>
            <div class="platform-value-item">
                <div class="platform-value-company">EasyChamp Sports Platform</div>
                <div class="platform-value-amount">$2M+</div>
                <div class="platform-value-description">
                    Architected cloud-native sports management platform serving 100K+ athletes. 
                    Implemented real-time scoring system, payment processing, and AI-powered 
                    features that increased user engagement by 200%.
                </div>
            </div>
            <div class="platform-value-item">
                <div class="platform-value-company">DentistryAutomation</div>
                <div class="platform-value-amount">$3M+</div>
                <div class="platform-value-description">
                    Designed healthcare automation platform reducing administrative overhead by 60%. 
                    Integrated with major insurance providers and implemented HIPAA-compliant 
                    infrastructure processing millions of claims annually.
                </div>
            </div>
            <div class="platform-value-item">
                <div class="platform-value-company">Enterprise Consulting</div>
                <div class="platform-value-amount">$5M+</div>
                <div class="platform-value-description">
                    Digital transformation initiatives across Fortune 500 companies. Led cloud 
                    migrations, AI/ML implementations, and DevOps transformations resulting in 
                    average 40% cost reduction and 3x performance improvements.
                </div>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = closeBtn.outerHTML + content;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) {
            closePlatformValueModal(modal);
        }
    };
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePlatformValueModal(modal);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closePlatformValueModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        if (modal && modal.parentNode) {
            document.body.removeChild(modal);
        }
    }, 300);
}

// Soccer Gallery
function openSoccerGallery() {
    const images = [
        '/assets/images/achievements/soccer_dcfc1.jpeg',
        '/assets/images/achievements/soccer_dcfc2.jpeg',
        '/assets/images/achievements/soccer_dcfc3.jpeg',
        '/assets/images/achievements/soccer_dcfc4.jpeg'
    ];
    const captions = [
        '2024 USSL Championship - FC Miami Dade County',
        'Team Celebration After Victory',
        'Championship Trophy Presentation',
        'Team Strategy and Training'
    ];
    const carousel = new ImageCarousel(images, captions);
    carousel.open();
}

// CrossFit Gallery
function openCrossFitGallery() {
    const images = [
        '/assets/images/achievements/crossfit1.jpeg',
        '/assets/images/achievements/crossfit2.jpeg'
    ];
    const captions = [
        'CrossFit Training - 5+ Years Experience',
        'Argument Competition 2024 - Winner'
    ];
    const carousel = new ImageCarousel(images, captions);
    carousel.open();
}