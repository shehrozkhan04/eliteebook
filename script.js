// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Preloader Animation
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const book = document.querySelector('.book');
    const bookCover = document.querySelector('.book-cover');
    
    // Book shaking animation
    const shakeTimeline = gsap.timeline({ repeat: -1 });
    shakeTimeline
        .to(book, {
            rotationY: -15,
            duration: 0.3,
            ease: "power2.inOut"
        })
        .to(book, {
            rotationY: 15,
            duration: 0.3,
            ease: "power2.inOut"
        })
        .to(book, {
            rotationY: -10,
            duration: 0.2,
            ease: "power2.inOut"
        })
        .to(book, {
            rotationY: 0,
            duration: 0.3,
            ease: "power2.inOut"
        });
    
    // Book cover opening animation
    gsap.to(bookCover, {
        rotationY: -45,
        duration: 0.6,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "left center"
    });
    
    // Hide preloader after animation
    setTimeout(() => {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                preloader.classList.add('hidden');
                document.body.style.overflow = '';
                // Initialize page animations after preloader hides
                initPageAnimations();
            }
        });
    }, 2000);
});

// Initialize page animations
function initPageAnimations() {
    // Hero section animations
    gsap.from('.hero .brand', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out"
    });
    
    gsap.from('.nav-actions', {
        opacity: 0,
        x: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
    });
    
    gsap.from('.hero-copy .eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out"
    });
    
    gsap.from('.hero-copy h1', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out"
    });
    
    gsap.from('.hero-copy .lede', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.out"
    });
    
    gsap.from('.hero-ctas .btn', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1,
        stagger: 0.1,
        ease: "power2.out"
    });
    
    gsap.from('.hero-badge', {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: 1.2,
        ease: "back.out(1.7)"
    });
    
    // Marquee animations
    gsap.from('.custom-marquee', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.custom-marquee',
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
    
    // Section headers animation
    gsap.utils.toArray('.section-header').forEach((header, i) => {
        gsap.from(header.querySelector('.eyebrow'), {
            opacity: 0,
            x: -30,
            duration: 0.6,
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        
        gsap.from(header.querySelector('h2'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Cards animation (staggered)
    gsap.utils.toArray('.card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            ease: "back.out(1.2)"
        });
    });
    
    // Design cards animation
    gsap.from('.design-card', {
        opacity: 0,
        x: 50,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.carousel-track',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        ease: "power2.out"
    });
    
    // Carousel buttons animation
    gsap.from('.carousel-btn', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.carousel',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        ease: "back.out(1.7)"
    });
    
    // Discount notice animation
    gsap.from('.discount-notice', {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.discount-notice',
            start: "top 85%",
            toggleActions: "play none none none"
        },
        ease: "back.out(1.5)"
    });
    
    // Review card animation
    gsap.from('.review-card', {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.review-wrap',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        ease: "power2.out"
    });
    
    gsap.utils.toArray('.review-nav').forEach((nav, index) => {
        gsap.from(nav, {
            opacity: 0,
            x: index === 0 ? -30 : 30,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: '.review-wrap',
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    gsap.from('.review-dots .dot', {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: {
            trigger: '.review-dots',
            start: "top 90%",
            toggleActions: "play none none none"
        },
        ease: "back.out(1.7)"
    });
    
    // Footer animation
    gsap.from('.footer', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.footer',
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.from('.paypal-btn', {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.footer',
            start: "top 90%",
            toggleActions: "play none none none"
        },
        ease: "back.out(1.5)"
    });
    
    // Two column text animation
    gsap.from('.two-col p', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.two-col',
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Prevent body scroll during preloader
    document.body.style.overflow = 'hidden';
    
    /* --- Smooth Animated Scroll for Anchor Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Skip if it's just "#"
            if (href === '#' || href === '') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                
                // Get the target position with offset
                const offset = 80; // Offset for header/nav
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                // Animate scroll with GSAP ScrollToPlugin
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: {
                        y: targetPosition,
                        autoKill: false
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
    
    /* --- Reviews slider (one at a time, arrows + dots) --- */
    const reviews = [
        { stars: '⭐⭐⭐⭐⭐', text: 'Outstanding design quality and fast delivery.', name: '— Ava, Fantasy Author' },
        { stars: '⭐⭐⭐⭐⭐', text: 'My ebook looks professional and market-ready.', name: '— Liam, Kindle Publisher' },
        { stars: '⭐⭐⭐⭐⭐', text: 'Highly recommended for authors and writers.', name: '— Noor, Romance Writer' },
        { stars: '⭐⭐⭐⭐⭐', text: 'Clean formatting that passed Kindle checks instantly.', name: '— Omar, Non-Fiction' },
        { stars: '⭐⭐⭐⭐',  text: 'Great collaboration and thoughtful cover options.', name: '— Sara, YA Author' },
        { stars: '⭐⭐⭐⭐⭐', text: 'Full package delivered on time with perfect files.', name: '— Ethan, Indie Press' }
    ];

    const reviewStars = document.getElementById('reviewStars');
    const reviewText = document.getElementById('reviewText');
    const reviewer = document.getElementById('reviewer');
    const reviewDots = document.getElementById('reviewDots');
    const reviewPrev = document.querySelector('.review-nav.prev');
    const reviewNext = document.querySelector('.review-nav.next');

    let currentReview = 0;

    const renderReview = (index) => {
        const r = reviews[index];
        reviewStars.textContent = r.stars;
        reviewText.textContent = `“${r.text}”`;
        reviewer.textContent = r.name;
        [...reviewDots.children].forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    reviews.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => {
            currentReview = i;
            renderReview(currentReview);
        });
        reviewDots.appendChild(dot);
    });

    reviewPrev?.addEventListener('click', () => {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        renderReview(currentReview);
    });

    reviewNext?.addEventListener('click', () => {
        currentReview = (currentReview + 1) % reviews.length;
        renderReview(currentReview);
    });

    renderReview(currentReview);

    /* --- Designs carousel (shows 3 then next 3 via arrows) --- */
    const initCarousel = (trackId) => {
        const track = document.getElementById(trackId);
        if (!track) return;

        const buttons = document.querySelectorAll(`[data-target="${trackId}"]`);
        let step = 0;

        const setStep = () => {
            const first = track.querySelector('.design-card');
            if (first) {
                const styles = getComputedStyle(track);
                const gap = parseFloat(styles.columnGap || styles.gap || '0');
                step = first.getBoundingClientRect().width + gap;
            }
        };

        setStep();
        window.addEventListener('resize', setStep);

        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (!step) return;
                const direction = btn.classList.contains('next') ? 1 : -1;
                track.scrollBy({ left: step * direction, behavior: 'smooth' });
            });
        });
    };

    initCarousel('designsTrack');

    /* --- Image lightbox for design images --- */
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.image-lightbox-close');
    const lightboxBackdrop = document.querySelector('.image-lightbox-backdrop');

    const openLightbox = (src, alt, caption) => {
        if (!lightbox || !lightboxImg || !lightboxCaption) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightboxCaption.textContent = caption || alt || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // GSAP animation for opening
        gsap.fromTo(lightbox, 
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo('.image-lightbox-content',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
        );
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        
        // GSAP animation for closing
        gsap.to('.image-lightbox-content', {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                lightbox.classList.remove('is-open');
                lightbox.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxBackdrop) {
        lightboxBackdrop.addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    // Attach click handlers to all design images
    const designImages = document.querySelectorAll('.design-card img');
    designImages.forEach((img) => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const card = img.closest('.design-card');
            const captionEl = card ? card.querySelector('p') : null;
            openLightbox(img.src, img.alt, captionEl ? captionEl.textContent : '');
        });
    });
    
    // Hover animations for buttons
    document.querySelectorAll('.btn, .pill, .carousel-btn, .review-nav').forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
    
    // Hover animations for cards
    document.querySelectorAll('.card, .design-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -5,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
});
