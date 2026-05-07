/**
 * Gestión Avanzada de Proyectos
 * Maneja el cambio de pestañas, renderizado de datos detallados y efectos visuales Premium
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Estructura de Datos (Español)
    const subjectData = {
        disseny: {
            title: "Diseño Web",
            intro: "Mi repositorio de diseño web es el centro de mi aprendizaje técnico. Aquí he desarrollado proyectos que van desde el dominio del modelo de cajas hasta la creación de sitios web completos y responsivos, enfocándome en la semántica de HTML5 y la potencia visual de CSS3.",
            layout: "list", // Variación de diseño
            projects: [
                {
                    title: "Activitat Model de Caixes",
                    desc: "Dominio profundo del Box Model en CSS: márgenes, bordes, rellenos y cómo afectan al diseño visual de los elementos en la página.",
                    link: "https://github.com/ummuig25-netizen/disseny-web/tree/main/Activitat_Model_Caixes_Muhammad%20Iglesias_Umar%20Sharif",
                    tags: ["CSS3", "Box Model", "Layout"]
                },
                {
                    title: "Activitat Lloc Web Completo",
                    desc: "Creación de una estructura de sitio web integral, aplicando jerarquía visual y navegación intuitiva.",
                    link: "https://github.com/ummuig25-netizen/disseny-web/tree/main/Activitat_lloc_web_Umar%20Sharif%20Muhammad",
                    tags: ["HTML5", "UX/UI", "Estructura"]
                },
                {
                    title: "Práctica P4 CSS Avanzado",
                    desc: "Experimentos con selectores complejos, pseudoclases y maquetación avanzada para interfaces modernas.",
                    link: "https://github.com/ummuig25-netizen/disseny-web/tree/main/P4_CSS_Umar%20Sharif%20Muhammad%20Iglesias",
                    tags: ["CSS Moderno", "Selectores", "Styling"]
                }
            ]
        },
        muntatge: {
            title: "Montaje y Mantenimiento",
            intro: "Aprendizaje del hardware desde la base física hasta la optimización de sistemas. Montaje de estaciones de trabajo y diagnósticos preventivos en entornos reales.",
            layout: "grid",
            projects: [
                {
                    title: "Montaje Workstation By Demes",
                    desc: "Configuración de hardware de alto rendimiento para videovigilancia.",
                    img: "workstation.jpg",
                    link: "#"
                },
                {
                    title: "Diagnóstico POST",
                    desc: "Resolución de fallos críticos en placas base mediante análisis de señales.",
                    img: "diagnostic.jpg",
                    link: "#"
                }
            ]
        },
        xarxes: {
            title: "Redes Locales",
            intro: "Infraestructura de red, cableado estructurado y configuración de switches. Enfoque práctico en la conectividad empresarial.",
            layout: "grid",
            projects: [
                {
                    title: "Crimpado de Cable RJ45",
                    desc: "Fabricación profesional siguiendo la norma T568B para redes de alta velocidad.",
                    type: "video",
                    link: "#"
                },
                {
                    title: "Configuración de VLANs",
                    desc: "Segmentación de tráfico en redes locales para seguridad y rendimiento.",
                    img: "vlan_config.png",
                    link: "#"
                }
            ]
        },
        ofimatica: {
            title: "Aplicaciones Ofimáticas",
            intro: "Automatización de la productividad empresarial. Gestión de datos avanzada con Excel y Access.",
            layout: "grid",
            projects: [
                {
                    title: "Gestión Automatizada de Stocks",
                    desc: "Herramienta con macros para control de inventario en tiempo real.",
                    img: "excel.png",
                    link: "#"
                },
                {
                    title: "DB de Taller Informático",
                    desc: "Base de datos relacional para gestión de incidencias y clientes.",
                    img: "access.png",
                    link: "#"
                }
            ]
        },
        digitalitzacio: {
            title: "Digitalización",
            intro: "Transformación de procesos analógicos a flujos digitales seguros y eficientes mediante Cloud Computing y automatización.",
            layout: "grid",
            projects: [
                {
                    title: "Migración a SharePoint",
                    desc: "Digitalización de archivos históricos para consulta remota segura.",
                    img: "cloud.png",
                    link: "#"
                },
                {
                    title: "Automatización con Power Automate",
                    desc: "Creación de flujos de aprobación automáticos para reducir tiempos.",
                    img: "automate.png",
                    link: "#"
                }
            ]
        },
        sostenibilitat: {
            title: "Sostenibilidad",
            intro: "La sostenibilidad es un compromiso real en mi carrera. A través de la tecnología circular, busco reducir la huella de carbono y maximizar la eficiencia energética.",
            layout: "full", // Diseño Premium Integrado
            projects: [
                {
                    title: "CYCLE-IT: Gestión de Hardware Sostenible",
                    desc: "Plataforma de economía circular diseñada para el reacondicionamiento de equipos. El sistema monitoriza el consumo energético y la huella de CO₂ en tiempo real, utilizando códigos QR para la trazabilidad de los componentes.",
                    longDesc: "CYCLE-IT une tecnología, inclusión y sostenibilidad. Implementamos trazabilidad de CO₂ mediante QR, optimización energética con IoT y accesibilidad universal con lectores Orca. Es una solución integral para empresas que buscan reducir su impacto ambiental mediante el reacondicionamiento inteligente de hardware.",
                    features: ["Trazabilidad CO2 via QR", "Optimización IoT", "Economía Circular", "Accesibilidad Orca", "Dashboard Tiempo Real", "Gestión de Residuos"],
                    img: "../cycle_it_dashboard_mockup.png",
                    link: "https://github.com/epuertasa/CYCLE-IT"
                }
            ]
        },
        angles: {
            title: "Inglés Técnico",
            intro: "Competencia en lectura de documentación técnica, redacción de informes de soporte y comunicación profesional en el sector IT.",
            layout: "grid",
            projects: [
                {
                    title: "Technical Support Guide",
                    desc: "Guía de resolución de problemas Wi-Fi escrita íntegramente en inglés.",
                    img: "english.png",
                    link: "#"
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
                    link: "https://github.com/ummuig25-netizen/RUVIA"
                }
            ]
        }
    };

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
                    html += `
                        <div class="project-section animate-in ${index % 2 !== 0 ? 'reverse' : ''}" style="animation-delay: 0.2s">
                            <div class="project-media-full">
                                <img src="${p.img}" alt="${p.title}" onerror="this.src='https://placehold.co/800x450/111111/ffffff?text=${p.title}'">
                            </div>
                            <div class="project-details-full">
                                <h3>${p.title}</h3>
                                <p>${p.longDesc || p.desc}</p>
                                <ul class="feature-list">
                                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                                <div class="project-links">
                                    <a href="${p.link}" target="_blank" class="btn btn-primary">Ver Proyecto</a>
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
                            <div class="tags" style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                                ${p.tags.map(t => `<span class="badge" style="background: var(--surface-hover); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; border: 1px solid var(--glass-border);">${t}</span>`).join('')}
                            </div>
                            <h3>${p.title}</h3>
                            <p>${p.desc}</p>
                            <div class="project-links">
                                <a href="${p.link}" target="_blank" class="project-link">Ver Código →</a>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            } else {
                html += '<div class="projects-grid">';
                data.projects.forEach((p, index) => {
                    let mediaHTML = `<div class="project-img-placeholder">${p.title}</div>`;
                    if (p.type === 'video') {
                        mediaHTML = `
                            <div class="video-placeholder" style="background: var(--surface); height: 200px; border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--glass-border);">
                                <p class="text-muted">🎞️ [Espacio para vídeo RJ45]</p>
                            </div>
                        `;
                    }
                    html += `
                        <div class="project-card animate-in" style="animation-delay: ${0.1 * index}s">
                            ${mediaHTML}
                            <h3>${p.title}</h3>
                            <p>${p.desc}</p>
                            <div class="project-links">
                                <a href="${p.link}" target="_blank" class="project-link">Ver Más →</a>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            }

            contentArea.innerHTML = html;
            contentArea.style.opacity = '1';
            
            // Re-init interactivity
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--x', `${x}px`);
                    card.style.setProperty('--y', `${y}px`);
                });
            });
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
