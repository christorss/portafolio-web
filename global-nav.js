(function() {
    // Determine active path
    const currentPath = window.location.pathname;
    
    // Do not show the nav on the root portfolio page
    if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('portafolio-web/index.html')) {
        return;
    }

    // Only run once
    if (document.getElementById('xtreme-global-nav-container')) return;

    // Inject Font if not present
    if (!document.querySelector('link[href*="Inter"]')) {
        const font = document.createElement('link');
        font.rel = 'stylesheet';
        font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap';
        document.head.appendChild(font);
    }

    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --gn-dark: #0f172a;
            --gn-light: #ffffff;
            --gn-accent: #3b82f6;
        }
        
        /* Floating Toggle Button */
        #gn-toggle {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--gn-accent);
            color: white;
            border-radius: 50px;
            cursor: pointer;
            z-index: 2147483647;
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 24px;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: none;
            letter-spacing: 0.5px;
        }

        #gn-toggle:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(59, 130, 246, 0.5);
            background: #2563eb;
        }

        #gn-toggle .toggle-icon {
            font-size: 18px;
            transition: transform 0.3s;
        }

        #gn-toggle.active .toggle-icon {
            transform: rotate(45deg);
        }

        /* Fullscreen Overlay Menu */
        #gn-overlay {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            z-index: 2147483646;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
            font-family: 'Inter', sans-serif;
        }

        #gn-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .gn-header {
            position: absolute;
            top: 40px;
            left: 40px;
            color: var(--gn-light);
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 800;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.4s 0.2s ease;
        }

        #gn-overlay.active .gn-header {
            opacity: 1;
            transform: translateY(0);
        }

        .gn-menu {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
            width: 100%;
            max-width: 800px;
        }

        .gn-menu li {
            margin: 1.5rem 0;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.4s ease;
        }

        #gn-overlay.active .gn-menu li {
            opacity: 1;
            transform: translateY(0);
        }

        #gn-overlay.active .gn-menu li:nth-child(1) { transition-delay: 0.1s; }
        #gn-overlay.active .gn-menu li:nth-child(2) { transition-delay: 0.2s; }
        #gn-overlay.active .gn-menu li:nth-child(3) { transition-delay: 0.3s; }
        #gn-overlay.active .gn-menu li:nth-child(4) { transition-delay: 0.4s; }
        #gn-overlay.active .gn-menu li:nth-child(5) { transition-delay: 0.5s; }

        .gn-menu a {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.5);
            font-size: clamp(2rem, 5vw, 4rem);
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            gap: 20px;
            transition: all 0.3s ease;
            position: relative;
        }

        .gn-menu a:hover, .gn-menu a.current {
            color: var(--gn-light);
            transform: scale(1.05);
        }

        .gn-menu a .icon {
            font-size: 0.6em;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.3s ease;
        }

        .gn-menu a:hover .icon, .gn-menu a.current .icon {
            opacity: 1;
            transform: translateX(0);
        }

        .gn-menu a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            width: 0;
            height: 3px;
            background: var(--gn-accent);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        .gn-menu a:hover::after {
            width: 100%;
        }

        @media (max-width: 768px) {
            .gn-header {
                top: 25px;
                left: 25px;
            }
            .gn-menu a {
                gap: 10px;
            }
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.id = 'xtreme-global-nav-container';

    // Button
    const btn = document.createElement('button');
    btn.id = 'gn-toggle';
    btn.setAttribute('aria-label', 'Toggle Navigation');
    btn.innerHTML = '<span class="toggle-icon">✚</span> Explorar Proyectos';

    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'gn-overlay';
    
    const links = [
        { path: '/', icon: '🏠', text: 'Inicio' },
        { path: '/Landing%20page%20empresarial/FHP/index.html', icon: '🏢', text: 'FHP Corporativo' },
        { path: '/constructora_3d/index.html', icon: '🏗️', text: 'Constructora 3D' },
        { path: '/juegos-extremos/index.html', icon: '🏂', text: 'Xtreme Sports' },
        { path: '/landing-smartwatch/index.html', icon: '⌚', text: 'Smartwatch' },
        { path: '/steak-house/index.html', icon: '🥩', text: 'Steak House' }
    ];

    let listHtml = '';
    links.forEach(link => {
        let isCurrent = currentPath === link.path || (link.path === '/' && (currentPath === '/index.html' || currentPath === '/')) ? 'current' : '';
        if (link.path !== '/' && currentPath.includes(link.path.split('/')[1])) {
            isCurrent = 'current';
        }
        listHtml += `<li><a href="${link.path}" class="${isCurrent}"><span class="icon">${link.icon}</span> ${link.text}</a></li>`;
    });

    overlay.innerHTML = `
        <div class="gn-header">Menu</div>
        <ul class="gn-menu">${listHtml}</ul>
    `;

    container.appendChild(btn);
    container.appendChild(overlay);
    document.body.appendChild(container);

    // Toggle logic
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        overlay.classList.toggle('active');
        if (overlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = '';
        }
    });
})();
