// Enhanced hover effects and interactions
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-links a');
            const logo = document.querySelector('.logo');
            const navbar = document.querySelector('.navbar-content');
            
            // Active link management
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Close mobile menu if open
                    const navToggle = document.getElementById('nav-toggle');
                    navToggle.checked = false;
                    
                    // Simulate navigation (you can replace with actual navigation)
                    console.log('Navigating to:', this.getAttribute('href'));
                });
            });
            
            // Logo special effects
            logo.addEventListener('mouseenter', function() {
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = '';
                }, 10);
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                const navToggle = document.getElementById('nav-toggle');
                const navBurger = document.querySelector('.nav-burger');
                const navLinks = document.querySelector('.nav-links');
                
                if (!navBurger.contains(e.target) && !navLinks.contains(e.target)) {
                    navToggle.checked = false;
                }
            });
            
            // Smooth scroll effect for navbar
            let lastScrollTop = 0;
            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up
                    navbar.style.transform = 'translateY(0)';
                }
                
                lastScrollTop = scrollTop;
            });
            
            // Add transition for navbar scroll effect
            navbar.style.transition = 'transform 0.3s ease-in-out';
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    const navToggle = document.getElementById('nav-toggle');
                    navToggle.checked = false;
                }
            });
            
            // Random sparkle effect
            function createSparkle() {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.width = '4px';
                sparkle.style.height = '4px';
                sparkle.style.background = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
                sparkle.style.borderRadius = '50%';
                sparkle.style.boxShadow = `0 0 10px ${sparkle.style.background}`;
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = '100%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.animation = 'sparkle 2s linear forwards';
                
                navbar.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }
            
            // Create sparkles periodically
            setInterval(createSparkle, 1000);
            
            // Burger menu open/close for mobile
            const navToggle = document.getElementById('nav-toggle');
            const navLinksMenu = document.querySelector('.nav-links');
            const navBurger = document.querySelector('.nav-burger');
            
            if (navBurger && navToggle && navLinksMenu) {
                navBurger.addEventListener('click', function(e) {
                    e.stopPropagation();
                    navToggle.checked = !navToggle.checked;
                    if (navToggle.checked) {
                        navLinksMenu.style.right = '0';
                    } else {
                        navLinksMenu.style.right = '-100%';
                    }
                });
                // Close menu when clicking a link (mobile)
                navLinksMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        navToggle.checked = false;
                        navLinksMenu.style.right = '-100%';
                    });
                });
            }
        });