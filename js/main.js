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
            layout: "list", 
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
            intro: "En esta asignatura aprendemos el funcionamiento interno del hardware informático. Desde la identificación de componentes hasta el montaje completo de estaciones de trabajo, optimización de BIOS y diagnóstico de averías físicas. Es la base técnica para cualquier profesional IT.",
            layout: "grid",
            projects: [
                {
                    title: "Montaje de Workstations",
                    desc: "Proceso completo de ensamblaje de equipos de alto rendimiento, gestión de cableado y testeo de componentes.",
                    img: "workstation.jpg",
                    link: "#"
                },
                {
                    title: "Mantenimiento Preventivo",
                    desc: "Limpieza técnica, sustitución de pasta térmica y optimización de flujos de aire para alargar la vida útil del hardware.",
                    img: "mantenimiento.jpg",
                    link: "#"
                }
            ]
        },
        xarxes: {
            title: "Redes Locales",
            intro: "Estudio de las infraestructuras de comunicación. Aprendemos a diseñar, montar y configurar redes locales (LAN), comprendiendo desde el medio físico (cableado) hasta la configuración lógica de dispositivos de red.",
            layout: "full",
            projects: [
                {
                    title: "Práctica de Crimpado RJ45",
                    desc: "Demostración técnica del proceso de crimpado de un cable de red siguiendo la normativa T568B. Esta habilidad es esencial para garantizar conexiones estables y profesionales en cualquier infraestructura de red local.",
                    longDesc: "En este vídeo muestro el proceso detallado: desde el pelado del cable UTP, la ordenación de los hilos según el estándar de colores, hasta el crimpado final y la comprobación de continuidad con el tester. Un trabajo preciso evita fallos intermitentes en la red.",
                    features: ["Normativa T568B", "Uso de Crimpadora Profesional", "Ordenación de Pares Trenzados", "Testeo de Continuidad"],
                    type: "video",
                    videoSrc: "../RJ45.mov",
                    link: "#"
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
                    tags: ["Procesador de Textos", "Informes", "Plantillas"]
                },
                {
                    title: "Microsoft Excel",
                    desc: "Gestión de datos mediante fórmulas avanzadas, funciones lógicas, tablas dinámicas y representación gráfica de información.",
                    tags: ["Hojas de Cálculo", "Estadística", "Automatización"]
                },
                {
                    title: "Microsoft Access",
                    desc: "Diseño y administración de bases de datos relacionales, creación de consultas, formularios e informes de gestión.",
                    tags: ["Bases de Datos", "SQL Básico", "Relaciones"]
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
                    link: "#"
                },
                {
                    title: "Tecnologías Disruptivas",
                    desc: "Investigación sobre IA, Cloud Computing e IoT y cómo están digitalizando todos los sectores económicos.",
                    img: "tech.png",
                    link: "#"
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
                    link: "https://github.com/epuertasa/CYCLE-IT"
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
                    let mediaHTML = `<img src="${p.img}" alt="${p.title}" onerror="this.src='https://placehold.co/800x450/111111/ffffff?text=${p.title}'">`;
                    if (p.type === 'video') {
                        mediaHTML = `
                            <video controls class="project-video-full" style="width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                                <source src="${p.videoSrc}" type="video/mp4">
                                Tu navegador no soporta el vídeo.
                            </video>
                        `;
                    }
                    html += `
                        <div class="project-section animate-in ${index % 2 !== 0 ? 'reverse' : ''}" style="animation-delay: 0.2s">
                            <div class="project-media-full">
                                ${mediaHTML}
                            </div>
                            <div class="project-details-full">
                                <h3>${p.title}</h3>
                                <p>${p.longDesc || p.desc}</p>
                                <ul class="feature-list">
                                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                                <div class="project-links">
                                    <a href="${p.link}" target="_blank" class="btn btn-primary">${p.type === 'video' ? 'Ver Detalles' : 'Ver Proyecto'}</a>
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
                                ${p.tags ? p.tags.map(t => `<span class="badge" style="background: var(--surface-hover); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; border: 1px solid var(--glass-border);">${t}</span>`).join('') : ''}
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
                            <div class="project-img-placeholder" style="height: 150px; background: rgba(255,255,255,0.02); display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1rem;">
                                <span style="font-size: 2rem;">📂</span>
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
