/**
 * Gestión Avanzada de Proyectos
 * Maneja el cambio de pestañas, renderizado de datos detallados y efectos visuales
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Estructura de Datos Detallada (en Español)
    const subjectData = {
        disseny: {
            title: "Diseño Web",
            intro: "La asignatura de Diseño Web es el pilar de mi formación como desarrollador frontend. En esta materia hemos profundizado en la creación de interfaces de usuario (UI) que no solo son visualmente impactantes, sino también altamente accesibles (UX). Hemos aprendido a dominar la estructura semántica con HTML5 y la potencia de CSS3 para la creación de diseños adaptativos (Responsive Design) que funcionan perfectamente en cualquier pantalla. También hemos explorado el diseño centrado en el usuario, asegurando que la navegación sea intuitiva y eficiente para todo tipo de perfiles.",
            projects: [
                {
                    title: "Portfolio Profesional SMIX",
                    desc: "Desarrollo de un ecosistema web completo aplicando glassmorfismo, animaciones por código y estructuras de datos dinámicas para mostrar competencias técnicas.",
                    img: "portfolio_smix.png",
                    link: "#"
                },
                {
                    title: "Landing Page para Reparaciones",
                    desc: "Diseño de una página de aterrizaje optimizada para la conversión de usuarios, trabajando la jerarquía visual y la llamada a la acción (CTA).",
                    img: "landing_reparaciones.png",
                    link: "#"
                }
            ]
        },
        muntatge: {
            title: "Montaje y Mantenimiento",
            intro: "En esta asignatura aprendemos la base física de la informática: el hardware. Desde el montaje de equipos domésticos hasta servidores profesionales, hemos aprendido a identificar cada componente, sus especificaciones técnicas y cómo optimizar su rendimiento. El mantenimiento preventivo es clave aquí: aprendemos a limpiar, diagnosticar fallos mediante códigos de pitidos o tarjetas POST, y a aplicar soluciones correctivas como la sustitución de fuentes de alimentación, discos o memorias, garantizando siempre la seguridad eléctrica.",
            projects: [
                {
                    title: "Montaje Workstation By Demes",
                    desc: "Configuración de hardware de alto rendimiento específico para tareas de videovigilancia, con un enfoque en la estabilidad y la velocidad de escritura de datos.",
                    img: "workstation.jpg",
                    link: "#"
                },
                {
                    title: "Diagnóstico de Hardware Crítico",
                    desc: "Informe detallado de fallos en una placa base mediante el análisis de condensadores y tests de voltaje realizados en el laboratorio.",
                    img: "diagnostic_hardware.jpg",
                    link: "#"
                }
            ]
        },
        xarxes: {
            title: "Redes Locales",
            intro: "Las redes son el sistema circulatorio de la información. En esta materia hemos estudiado a fondo el modelo OSI y el modelo TCP/IP. Hemos pasado de la teoría a la práctica crimpando cables de red CAT6, configurando routers y switches de grado industrial, e implementando redes inalámbricas (Wi-Fi) seguras. También trabajamos en la segmentación de redes con VLANs para separar el tráfico de datos sensible del resto de la red, mejorando tanto la seguridad como el rendimiento global.",
            projects: [
                {
                    title: "Fabricación de Cable RJ45 (Norma T568B)",
                    desc: "Este proyecto demuestra la habilidad técnica para fabricar conectores de red con cero pérdidas de datos, siguiendo los estándares internacionales de cableado estructurado.",
                    type: "video",
                    link: "#"
                },
                {
                    title: "Configuración de Switch Gestionable",
                    desc: "Implementación de VLANs y políticas de Port Security en un switch Cisco para evitar accesos no autorizados a la red local.",
                    img: "switch_config.png",
                    link: "#"
                }
            ]
        },
        ofimatica: {
            title: "Aplicaciones Ofimáticas",
            intro: "La ofimática es una herramienta de productividad esencial en cualquier entorno laboral. No nos limitamos al uso básico de procesadores de textos; aprendemos a automatizar procesos empresariales complejos. Utilizamos hojas de cálculo de Excel con fórmulas lógicas, tablas dinámicas y macros para gestionar grandes volúmenes de datos. También diseñamos bases de datos con Access para estructurar la información de clientes y pedidos de forma profesional, asegurando la integridad de los datos.",
            projects: [
                {
                    title: "Gestión de Stocks Automatizada",
                    desc: "Herramienta de Excel que utiliza macros para avisar automáticamente cuando un producto llega a su stock mínimo y genera órdenes de pedido.",
                    img: "excel_macros.png",
                    link: "#"
                },
                {
                    title: "DB de Taller Informático",
                    desc: "Diseño de una base de datos relacional completa que gestiona técnicos, reparaciones, recambios y clientes con una interfaz de usuario personalizada.",
                    img: "access_db.png",
                    link: "#"
                }
            ]
        },
        digitalitzacio: {
            title: "Digitalización",
            intro: "La digitalización es el presente y el futuro de la gestión empresarial. En esta asignatura aprendemos a transformar procesos analógicos en flujos de trabajo digitales eficientes y seguros. Trabajamos con la gestión documental electrónica, el Cloud Computing y la implementación de herramientas de colaboración en línea. También ponemos un foco especial en la ciberseguridad durante el proceso de digitalización, protegiendo la identidad digital y la privacidad de los datos en entornos conectados.",
            projects: [
                {
                    title: "Proyecto de Oficina Sin Papel",
                    desc: "Diseño de un plan de transición para una empresa local, moviendo toda la documentación a un entorno seguro de SharePoint con permisos jerarquizados.",
                    img: "cloud_migration.png",
                    link: "#"
                },
                {
                    title: "Flujos de Trabajo con Power Automate",
                    desc: "Automatización del correo electrónico y la aprobación de documentos para reducir el tiempo de respuesta en procesos internos.",
                    img: "automate_flow.png",
                    link: "#"
                }
            ]
        },
        sostenibilitat: {
            title: "Sostenibilidad",
            intro: "Como profesionales de la informática, tenemos la responsabilidad de reducir la huella ecológica de la tecnología. En esta materia estudiamos el ciclo de vida del hardware, la gestión de residuos electrónicos (RAEE) y el diseño de sistemas energéticamente eficientes. Nos centramos en la economía circular: reparar antes que tirar, reciclar componentes y utilizar la virtualización de servidores para reducir el consumo eléctrico global de los centros de datos.",
            projects: [
                {
                    title: "CYCLE-IT - Hardware Management",
                    desc: "Mi plataforma principal para fomentar el reciclaje de componentes informáticos. Una herramienta real para conectar hardware obsoleto con nuevos usos.",
                    img: "cycle_it_banner.png",
                    link: "https://github.com/ummuig25-netizen/CYCLE-IT"
                },
                {
                    title: "Plan de Residuos Electrónicos",
                    desc: "Protocolo diseñado para el taller de By Demes, asegurando el reciclaje correcto de placas base y baterías según la normativa vigente.",
                    img: "sustainability_plan.png",
                    link: "#"
                }
            ]
        },
        angles: {
            title: "Inglés Técnico",
            intro: "El inglés es la lengua vehicular de la tecnología. En esta asignatura nos preparamos para movernos con fluidez en el mercado global de IT. Aprendemos a interpretar manuales técnicos complejos, redactar informes de fallos (ticket reporting) y a comunicarnos con clientes o soporte técnico internacional. El objetivo es que el idioma no sea una barrera, sino una herramienta más para acceder a la mejor documentación y oportunidades laborales del sector.",
            projects: [
                {
                    title: "Technical Support Guide",
                    desc: "Redacción de una guía de resolución de problemas para redes Wi-Fi, escrita íntegrament en inglés para un entorno de soporte remoto.",
                    img: "english_guide.png",
                    link: "#"
                },
                {
                    title: "Oral Presentation: New Tech Trends",
                    desc: "Exposición sobre las novedades en IA aplicada a la seguridad física (CCTV), realizada en inglés ante la clase.",
                    img: "english_presentation.png",
                    link: "#"
                }
            ]
        },
        propis: {
            title: "Proyectos Propios",
            intro: "Esta sección es un espacio de experimentación pura. Aquí recojo mis proyectos de código personales que van más allá de los currículos académicos y que me han servido para explorar nuevas librerías, lenguajes de programación y arquitecturas de software. Son el resultado de mi curiosidad constante y mi deseo de profundizar en el desarrollo de soluciones completas, aplicando todo lo que aprendo para crear productos que aporten valor en la vida real y demuestren mi capacidad de autoaprendizaje y pasión por la tecnología.",
            projects: [
                {
                    title: "RUVIA - Urban Mobility Platform",
                    desc: "Plataforma de movilidad urbana que conecta conductores y pasajeros con un enfoque en la eficiencia y la cercanía al mercado español.",
                    img: "ruvia_showcase.png",
                    link: "https://github.com/ummuig25-netizen/RUVIA"
                },
                {
                    title: "Sistema de Marca Personal Web",
                    desc: "Diseño y desarrollo de este ecosistema web profesional, optimizado para la velocidad, el SEO y la estética premium.",
                    img: "portfolio_preview.png",
                    link: "https://github.com/ummuig25-netizen/ummuig25-netizen.github.io"
                }
            ]
        }
    };

    // 2. Selectores
    const tabBtns = document.querySelectorAll('.tab-btn');
    const introContainer = document.getElementById('subject-intro-container');
    const projectsGrid = document.getElementById('projects-display-grid');

    if (!projectsGrid) return;

    // 3. Render Function with Animations
    function renderCategory(category) {
        const data = subjectData[category];
        if (!data) return;

        // Animate out
        projectsGrid.style.opacity = '0';
        introContainer.style.opacity = '0';

        setTimeout(() => {
            // Fill Intro
            introContainer.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.intro}</p>
            `;

            // Fill Projects
            projectsGrid.innerHTML = '';
            data.projects.forEach(project => {
                const card = document.createElement('article');
                card.className = 'project-card glass animate-in';
                
                let mediaHTML = `<div class="project-img-placeholder">${project.title} (Imagen)</div>`;
                if (project.type === 'video') {
                    mediaHTML = `
                        <div class="video-placeholder">
                            <p class="text-muted">🎞️ [Espacio para el vídeo: RJ45]</p>
                        </div>
                    `;
                }

                card.innerHTML = `
                    ${mediaHTML}
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" class="project-link">Explorar →</a>
                    </div>
                `;
                projectsGrid.appendChild(card);
            });

            // Animate back in
            projectsGrid.style.opacity = '1';
            introContainer.style.opacity = '1';
            
            // Re-apply mouse effect listener
            initCardGlow();
        }, 300);
    }

    // 4. Tab Logic
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategory(category);
        });
    });

    // 5. Card Glow Effect (Interactive)
    function initCardGlow() {
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
    }

    // 6. Initial Render
    renderCategory('disseny');
});
