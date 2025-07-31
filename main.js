/**
 * BMKG NewUI Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loader = document.getElementById('loader');
            if (loader) loader.classList.add('hidden');
        }, 1000);
    });
    
    // Create particles
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 100 + 50 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
            particlesContainer.appendChild(particle);
        }
    }
    
    // Real-time Clock Function
    function updateClocks() {
        const now = new Date();
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
        
        // WIB (UTC+7)
        const wibTime = new Date(utcTime + (7 * 60 * 60 * 1000));
        const wibEl = document.getElementById('header-time-wib');
        if (wibEl) wibEl.textContent = wibTime.toTimeString().split(' ')[0];
        
        // WITA (UTC+8)
        const witaTime = new Date(utcTime + (8 * 60 * 60 * 1000));
        const witaEl = document.getElementById('header-time-wita');
        if (witaEl) witaEl.textContent = witaTime.toTimeString().split(' ')[0];
        
        // WIT (UTC+9)
        const witTime = new Date(utcTime + (9 * 60 * 60 * 1000));
        const witEl = document.getElementById('header-time-wit');
        if (witEl) witEl.textContent = witTime.toTimeString().split(' ')[0];
        
        // UTC
        const utcTimeDisplay = new Date(utcTime);
        const utcEl = document.getElementById('header-time-utc');
        if (utcEl) utcEl.textContent = utcTimeDisplay.toTimeString().split(' ')[0];
    }
    
    // Update clocks every second
    setInterval(updateClocks, 1000);
    updateClocks();
    
    // Slideshow for hero header
    function initSlideshow() {
        const container = document.getElementById('slideshow-container');
        if (!container) return;
        
        const images = [
            bmkg_ajax.template_url + '/images/header-1.png',
            bmkg_ajax.template_url + '/images/header-2.jpg',
            bmkg_ajax.template_url + '/images/header-3.jpg',
            bmkg_ajax.template_url + '/images/header-4.jpg'
        ];
        
        container.innerHTML = images.map((src, i) => 
            `<div class="slide ${i === 0 ? 'active' : ''}"><img src="${src}" alt="Slide ${i+1}"></div>`
        ).join('');
        
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
    initSlideshow();
    
    // Navbar scroll effect
    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Bulletin scroll navigation
    const bulletinScroll = document.getElementById('bulletin-scroll');
    if (bulletinScroll) {
        const prevBtn = document.querySelector('.bulletin-nav-btn.prev');
        const nextBtn = document.querySelector('.bulletin-nav-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                bulletinScroll.scrollBy({ left: -300, behavior: 'smooth' });
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                bulletinScroll.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    }
    
    // Initialize Leaflet map
    if (typeof L !== 'undefined' && document.getElementById('weatherMap')) {
        const map = L.map('weatherMap').setView([1.043889, 103.422222], 10);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        L.marker([1.043889, 103.422222]).addTo(map)
            .bindPopup('Kabupaten Karimun<br>Cuaca: Berawan')
            .openPopup();
    }
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Add lightbox to enlargeable images
    document.querySelectorAll('.enlargeable').forEach(element => {
        element.addEventListener('click', function(e) {
            const img = e.currentTarget.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
            }
        });
    });
    
    // Close lightbox
    if (lightbox && lightboxClose) {
        const closeLightbox = () => lightbox.classList.remove('active');
        
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    
    // Modal functionality
    const modal = document.getElementById('article-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Intersection Observer for animations
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
    setTimeout(() => {
        const animatedElements = document.querySelectorAll(
            '.feature-card, .news-card, .org-box, .profile-card, ' +
            '.quick-link-card, .sidebar-card, .bulletin-item'
        );
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }, 500);
    
    // Parallax effect for hero header
    const heroHeader = document.querySelector('.hero-header');
    if (heroHeader) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const speed = 0.5;
            heroHeader.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
    
    // AJAX Weather Data (Example)
    function loadWeatherData() {
        if (typeof jQuery !== 'undefined') {
            jQuery.ajax({
                url: bmkg_ajax.ajax_url,
                type: 'POST',
                data: {
                    action: 'get_weather'
                },
                success: function(response) {
                    if (response.success) {
                        // Update weather display if needed
                        console.log('Weather data:', response.data);
                    }
                }
            });
        }
    }
    
    // Load weather data every 30 minutes
    loadWeatherData();
    setInterval(loadWeatherData, 30 * 60 * 1000);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize Swiper for modal if exists
    if (typeof Swiper !== 'undefined') {
        const modalSwiper = document.querySelector('.swiper-modal');
        if (modalSwiper) {
            new Swiper('.swiper-modal', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop: true
            });
        }
    }
});