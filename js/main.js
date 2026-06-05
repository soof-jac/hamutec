/**
 * MAIN JS
 * Responsabilidades:
 * - Controle da Navbar (Scroll & Mobile Menu)
 * - IntersectionObserver para animações de scroll
 * - Interatividade geral
 */

document.addEventListener('DOMContentLoaded', () => {
    // 0. Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 500);
    });

    // 1. Scroll da Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Menu Mobile (Drawer)
    const menuToggle = document.getElementById('menu-toggle');
    const closeToggle = document.getElementById('close-toggle');
    const navDrawer = document.getElementById('nav-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    const toggleDrawer = () => {
        navDrawer.classList.toggle('open');
        drawerOverlay.classList.toggle('active');
        document.body.style.overflow = navDrawer.classList.contains('open') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleDrawer);
    closeToggle.addEventListener('click', toggleDrawer);
    drawerOverlay.addEventListener('click', toggleDrawer);
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navDrawer.classList.contains('open')) toggleDrawer();
        });
    });

    // 3. Active Link & Reveal Animations (IntersectionObserver)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Active Link
            if (entry.isIntersecting && entry.target.tagName === 'SECTION') {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }

            // Reveal Animation
            if (entry.isIntersecting && entry.target.classList.contains('reveal')) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    revealElements.forEach(el => observer.observe(el));

    // 4. Sistema de Abas (Tabs) para Pacotes
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            // Remover classes ativas
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Adicionar classes ativas
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    console.log('Hamutec Site - Navbar & Reveal & Tabs Ativos');
});

