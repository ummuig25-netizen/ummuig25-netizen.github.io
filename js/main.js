/**
 * Gestión Avanzada de Proyectos
 * Maneja el cambio de pestañas, renderizado de datos detallados y efectos visuales Premium
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inject Parallax Background
    const parallaxContainer = document.createElement('div');
    parallaxContainer.className = 'parallax-container';
    parallaxContainer.innerHTML = `
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    `;
    document.body.prepend(parallaxContainer);

    // Parallax Scroll Logic
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.2;
            blob.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // 1. Estructura de Datos (Español)
    const subjectData = {
        disseny: {
            title: "Diseño Web",
            intro: "Mi repositorio de diseño web es el centro de mi aprendizaje técnico. Aquí he desarrollado proyectos que van desde el dominio del modelo de cajas hasta la creación de sitios web completos y responsivos, enfocándome en la semántica de HTML5 y la potencia visual de CSS3.",
            layout: "list", 
            projects: [
                {
                    title: "Activitat Model de Caixes",
                    desc: "Dominio profundo del Box Model en CSS: márgenes, bordes, rellenos y cómo afectan al diseño visual de los elementos en la página.",
                    link: "https://github.com/ummuig25-netizen/disseny-web/tree/main/Activitat_Model_Caixes_Muhammad%20Iglesias_Umar%20Sharif",
                    tags: ["CSS3", "Box Model", "Layout"],
                    icon: "fa-brands fa-css3-alt"
                },
                {
                    title: "Activitat Lloc Web Completo",
                    desc: "Creación de una estructura de sitio web integral, aplicando jerarquía visual y navegación intuitiva.",
                    link: "https://github.com/ummuig25-netizen/disseny-web/tree/main/Activitat_lloc_web_Umar%20Sharif%20Muhammad",
                    tags: ["HTML5", "UX/UI", "Estructura"],
                    icon: "fa-solid fa-globe"
                },
                {
                    title: "Práctica P4 CSS Avanzado",
                    desc: "Experimentos con selectores complejos, pseudoclases y maquetación avanzada para interfaces modernas.",
                    link: "https://github.com/ummuig25-netizen/disseny-web/tree/main/P4_CSS_Umar%20Sharif%20Muhammad%20Iglesias",
                    tags: ["CSS Moderno", "Selectores", "Styling"],
                    icon: "fa-solid fa-code"
                }
            ]
        },
        muntatge: {
            title: "Montaje y Mantenimiento",
            intro: "En esta asignatura aprendemos el funcionamiento interno del hardware informático. Desde la identificación de componentes hasta el montaje completo de estaciones de trabajo, optimización de BIOS y diagnóstico de averías físicas. Es la base técnica para cualquier profesional IT.",
            layout: "grid",
            projects: [
                {
                    title: "Montaje de Workstations",
                    desc: "Proceso completo de ensamblaje de equipos de alto rendimiento, gestión de cableado y testeo de componentes.",
                    img: "workstation.jpg",
                    link: "#",
                    icon: "fa-solid fa-microchip"
                },
                {
                    title: "Mantenimiento Preventivo",
                    desc: "Limpieza técnica, sustitución de pasta térmica y optimización de flujos de aire para alargar la vida útil del hardware.",
                    img: "mantenimiento.jpg",
                    link: "#",
                    icon: "fa-solid fa-screwdriver-wrench"
                }
            ]
        },
        xarxes: {
            title: "Redes Locales",
            intro: "Estudio de las infraestructuras de comunicación. Aprendemos a diseñar, montar y configurar redes locales (LAN), comprendiendo desde el medio físico (cableado) hasta la configuración lógica de dispositivos de red.",
            layout: "full",
            projects: [
                {
                    title: "Crimpado de Cable RJ45 (Macho)",
                    desc: "Dominio del crimpado de cables UTP bajo la normativa T568B para garantizar conexiones de red profesionales.",
                    longDesc: "El crimpado de conectores RJ45 macho es fundamental para la creación de cables de red a medida. Aprendemos a destrenzar, alinear y crimpar los hilos siguiendo el estándar de colores para evitar interferencias y pérdidas de datos.",
                    features: ["Normativa T568B", "Cable UTP Cat 6", "Testeo de Continuidad", "Uso de Crimpadora"],
                    img: "../rj45_female_jack_install.png", 
                    link: "#",
                    icon: "fa-solid fa-network-wired"
                },
                {
                    title: "Taller de Canaletas y Patch Panel",
                    desc: "Instalación de infraestructura de red profesional utilizando conectores hembra y paneles de parcheo.",
                    longDesc: "En este taller práctico, montamos una infraestructura real: instalación de canaletas de superficie, cableado estructurado, conexión de tomas RJ45 hembra (keystone) y terminación en el Patch Panel del rack. Aprendemos a gestionar el etiquetado y la organización profesional del cableado.",
                    features: ["RJ45 Hembra (Keystone)", "Patch Panel Rack", "Canaletas de Superficie", "Etiquetado de Red"],
                    img: "../patch_panel_cabling.png", 
                    link: "#",
                    icon: "fa-solid fa-server"
                }
            ]
        },
        ofimatica: {
            title: "Aplicaciones Ofimáticas",
            intro: "Dominio de las herramientas esenciales para la productividad en el entorno empresarial. Trabajamos con la suite de Microsoft Office para gestionar documentos, datos y presentaciones de nivel profesional.",
            layout: "list",
            projects: [
                {
                    title: "Microsoft Word",
                    desc: "Creación de documentos corporativos, uso de estilos, tablas de contenido y combinación de correspondencia.",
                    tags: ["Procesador de Textos", "Informes", "Plantillas"],
                    logo: "../assets/word_logo.png"
                },
                {
                    title: "Microsoft Excel",
                    desc: "Gestión de datos mediante fórmulas avanzadas, funciones lógicas, tablas dinámicas y representación gráfica de información.",
                    tags: ["Hojas de Cálculo", "Estadística", "Automatización"],
                    logo: "../assets/excel_logo.png"
                },
                {
                    title: "Microsoft Access",
                    desc: "Diseño y administración de bases de datos relacionales, creación de consultas, formularios e informes de gestión.",
                    tags: ["Bases de Datos", "SQL Básico", "Relaciones"],
                    logo: "../assets/access_logo.png"
                }
            ]
        },
        digitalitzacio: {
            title: "Digitalización",
            intro: "Análisis de la evolución tecnológica y su impacto en la sociedad y la industria. Estudiamos las revoluciones industriales para entender cómo hemos llegado a la era digital actual y hacia dónde nos dirigimos.",
            layout: "grid",
            projects: [
                {
                    title: "Las Revoluciones Industriales",
                    desc: "Presentaciones detalladas sobre el paso de la máquina de vapor a la producción en masa, la electrónica y la actual Industria 4.0.",
                    img: "industrial.png",
                    link: "#",
                    icon: "fa-solid fa-industry"
                },
                {
                    title: "Tecnologías Disruptivas",
                    desc: "Investigación sobre IA, Cloud Computing e IoT y cómo están digitalizando todos los sectores económicos.",
                    img: "tech.png",
                    link: "#",
                    icon: "fa-solid fa-robot"
                }
            ]
        },
        sostenibilitat: {
            title: "Sostenibilidad",
            intro: "La sostenibilidad es un compromiso real en mi carrera. A través de la tecnología circular, busco reducir la huella de carbono y maximizar la eficiencia energética.",
            layout: "full", 
            projects: [
                {
                    title: "CYCLE-IT: Gestión de Hardware Sostenible",
                    desc: "Plataforma de economía circular diseñada para el reacondicionamiento de equipos. El sistema monitoriza el consumo energético y la huella de CO₂ en tiempo real, utilizando códigos QR para la trazabilidad de los componentes.",
                    longDesc: "CYCLE-IT une tecnología, inclusión y sostenibilidad. Implementamos trazabilidad de CO₂ mediante QR, optimización energética con IoT y accesibilidad universal con lectores Orca. Es una solución integral para empresas que buscan reducir su impacto ambiental mediante el reacondicionamiento inteligente de hardware.",
                    features: ["Trazabilidad CO2 via QR", "Optimización IoT", "Economía Circular", "Accesibilidad Orca", "Dashboard Tiempo Real", "Gestión de Residuos"],
                    img: "../cycle_it_dashboard_mockup.png",
                    link: "https://github.com/epuertasa/CYCLE-IT",
                    icon: "fa-solid fa-leaf"
                }
            ]
        },
        angles: {
            title: "Inglés Técnico",
            intro: "Dominio avanzado del inglés técnico y profesional. Competencia en lectura de documentación compleja, redacción de informes de soporte y comunicación fluida en entornos IT internacionales.",
            layout: "grid",
            projects: [
                {
                    title: "Technical Support Guide",
                    desc: "Guía de resolución de problemas Wi-Fi escrita íntegramente en inglés.",
                    img: "english.png",
                    link: "#",
                    icon: "fa-solid fa-language"
                }
            ]
        },
        propis: {
            title: "Proyectos Propios",
            intro: "Proyectos de desarrollo personal donde exploro nuevas tecnologías y arquitecturas de software modernas.",
            layout: "full",
            projects: [
                {
                    title: "RUVIA: Urban Mobility Platform",
                    desc: "Plataforma innovadora de movilidad urbana para taxistas en España.",
                    longDesc: "RUVIA es una plataforma socio-gremial con seguridad avanzada y transparencia en tiempo real. Utiliza una arquitectura moderna basada en TypeScript y React para conectar conductores de forma eficiente y segura.",
                    features: ["Seguridad Avanzada", "Arquitectura TS", "Transparencia Gremial", "UI/UX Premium"],
                    img: "ruvia_preview.png",
                    link: "https://github.com/ummuig25-netizen/RUVIA",
                    icon: "fa-solid fa-car"
                }
            ]
        }
    };

    function initCards() {
        const cards = document.querySelectorAll('.project-card, .skill-card');
        cards.forEach(card => {
            // Avoid duplicate listeners
            if (card.dataset.tiltInit) return;
            card.dataset.tiltInit = "true";

            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);

                // 3D Tilt Effect
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.01)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
            });
        });
    }

    // Initialize cards on page load
    initCards();

    // Selectores
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentArea = document.getElementById('dynamic-content-area');

    if (!contentArea) return;

    function renderCategory(category) {
        const data = subjectData[category];
        if (!data) return;

        contentArea.style.opacity = '0';

        setTimeout(() => {
            let html = `
                <div class="subject-intro animate-in">
                    <h2>${data.title}</h2>
                    <p>${data.intro}</p>
                </div>
            `;

            if (data.layout === 'full') {
                html += '<div class="full-width-project">';
                data.projects.forEach((p, index) => {
                    let mediaHTML = `<img src="${p.img}" alt="${p.title}" onerror="this.src='https://placehold.co/800x450/111111/ffffff?text=${p.title}'">`;
                    html += `
                        <div class="project-section animate-in ${index % 2 !== 0 ? 'reverse' : ''}" style="animation-delay: 0.2s">
                            <div class="project-media-full">
                                ${mediaHTML}
                            </div>
                            <div class="project-details-full">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <i class="${p.icon || 'fa-solid fa-rocket'}" style="font-size: 2rem; color: var(--primary);"></i>
                                    <h3 style="margin-bottom: 0;">${p.title}</h3>
                                </div>
                                <p>${p.longDesc || p.desc}</p>
                                <ul class="feature-list">
                                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                                <div class="project-links">
                                    <a href="${p.link}" target="_blank" class="btn btn-primary">Ver Detalles</a>
                                </div>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            } else if (data.layout === 'list') {
                html += '<div class="projects-grid">';
                data.projects.forEach((p, index) => {
                    html += `
                        <div class="project-card animate-in" style="animation-delay: ${0.1 * index}s">
                            <div class="project-card-header">
                                <div class="tags-container">
                                    ${p.tags ? p.tags.map(t => `<span class="badge">${t}</span>`).join('') : ''}
                                </div>
                                <div class="project-icon-container">
                                    ${p.logo ? `<img src="${p.logo}" alt="${p.title} logo">` : `<i class="${p.icon || 'fa-solid fa-file-code'}"></i>`}
                                </div>
                            </div>
                            <h3>${p.title}</h3>
                            <p>${p.desc}</p>
                            <div class="project-links">
                                ${p.link ? `<a href="${p.link}" target="_blank" class="project-link">Ver Código →</a>` : '<span class="text-muted">Proyecto de clase</span>'}
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            } else {
                html += '<div class="projects-grid">';
                data.projects.forEach((p, index) => {
                    html += `
                        <div class="project-card animate-in" style="animation-delay: ${0.1 * index}s">
                            <div class="project-img-placeholder" style="height: 150px; background: rgba(255,255,255,0.02); display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1rem; position: relative;">
                                <i class="${p.icon || 'fa-solid fa-folder-open'}" style="font-size: 3rem; opacity: 0.5;"></i>
                            </div>
                            <h3>${p.title}</h3>
                            <p>${p.desc}</p>
                            <div class="project-links">
                                <a href="${p.link}" target="_blank" class="project-link">Saber más →</a>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            }

            contentArea.innerHTML = html;
            contentArea.style.opacity = '1';
            
            // Re-init interactivity for dynamic content
            initCards();
        }, 300);
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategory(btn.getAttribute('data-category'));
        });
    });

    renderCategory('disseny');
});
