(function() {
    // Only run once
    if (document.getElementById('portfolio-global-nav')) return;

    // Inject Font if not present
    if (!document.querySelector('link[href*="Inter"]')) {
        const font = document.createElement('link');
        font.rel = 'stylesheet';
        font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
        document.head.appendChild(font);
    }

    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --nav-bg: rgba(15, 23, 42, 0.85);
            --nav-border: rgba(255, 255, 255, 0.1);
        }
        #portfolio-global-nav {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--nav-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            z-index: 2147483647;
            display: flex;
            align-items: center;
            padding: 8px 24px;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 0 1px var(--nav-border);
            font-family: 'Inter', sans-serif;
            white-space: nowrap;
            gap: 24px;
            transition: all 0.3s ease;
        }
        #portfolio-global-nav a {
            color: #cbd5e1;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        #portfolio-global-nav a:hover, #portfolio-global-nav a.active {
            color: #fff;
        }
        #portfolio-global-nav a.active {
            text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }
        #portfolio-global-nav .nav-icon {
            font-size: 16px;
        }
        .nav-home-btn {
            background: rgba(255,255,255,0.1);
            padding: 6px 14px;
            border-radius: 20px;
            color: #fff !important;
            border: 1px solid rgba(255,255,255,0.15);
        }
        .nav-home-btn:hover {
            background: #38bdf8 !important;
            border-color: #38bdf8 !important;
            color: #0f172a !important;
        }
        @media (max-width: 768px) {
            #portfolio-global-nav {
                top: auto;
                bottom: 25px;
                padding: 12px 20px;
                gap: 15px;
                width: 90%;
                justify-content: space-around;
            }
            #portfolio-global-nav span.nav-text {
                display: none;
            }
            #portfolio-global-nav .nav-icon {
                font-size: 20px;
            }
            .nav-home-btn {
                padding: 8px;
            }
        }
    `;
    document.head.appendChild(style);

    const nav = document.createElement('nav');
    nav.id = 'portfolio-global-nav';
    
    // Determine active path
    const currentPath = window.location.pathname;
    
    const links = [
        { path: '/', icon: '🏠', text: 'Inicio', class: 'nav-home-btn' },
        { path: '/Landing%20page%20empresarial/FHP/index.html', icon: '🏢', text: 'FHP' },
        { path: '/constructora_3d/index.html', icon: '🏗️', text: 'Constructora' },
        { path: '/landing-smartwatch/index.html', icon: '⌚', text: 'Smartwatch' },
        { path: '/steak-house/index.html', icon: '🥩', text: 'Steak House' }
    ];

    let html = '';
    links.forEach(link => {
        let isActive = currentPath === link.path || (link.path === '/' && (currentPath === '/index.html' || currentPath === '/')) ? 'active' : '';
        // Better active check for subpages
        if (link.path !== '/' && currentPath.includes(link.path.split('/')[1])) {
            isActive = 'active';
        }
        const className = link.class ? `${link.class} ${isActive}` : isActive;
        html += `<a href="${link.path}" class="${className}" title="${link.text}"><span class="nav-icon">${link.icon}</span><span class="nav-text">${link.text}</span></a>`;
    });

    nav.innerHTML = html;
    document.body.appendChild(nav);
})();
