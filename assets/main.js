/**
 * Main JS for Portfolio
 * Handling GitHub API fetch and Project Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const langFilter = document.getElementById('lang-filter');
    const sortFilter = document.getElementById('sort-filter');

    if (projectsContainer) {
        initProjects();
    }

    async function initProjects() {
        const username = 'ummuig25-netizen';
        const url = `https://api.github.com/users/${username}/repos?per_page=100`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch repos');
            let repos = await response.json();

            // Filter out forks if desired (optional)
            // repos = repos.filter(repo => !repo.fork);

            // Populate Language Filter
            const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
            languages.forEach(lang => {
                const option = document.createElement('option');
                option.value = lang;
                option.textContent = lang;
                langFilter.appendChild(option);
            });

            // Initial Render
            renderRepos(repos);

            // Event Listeners
            langFilter.addEventListener('change', () => filterAndRender(repos));
            sortFilter.addEventListener('change', () => filterAndRender(repos));

        } catch (error) {
            console.error('Error fetching projects:', error);
            projectsContainer.innerHTML = '<p>Error al cargar los proyectos. Por favor, inténtalo de nuevo más tarde.</p>';
        }
    }

    function filterAndRender(repos) {
        const lang = langFilter.value;
        const sort = sortFilter.value;

        let filtered = repos;
        if (lang !== 'all') {
            filtered = repos.filter(repo => repo.language === lang);
        }

        filtered.sort((a, b) => {
            if (sort === 'pushed_at') {
                return new Date(b.pushed_at) - new Date(a.pushed_at);
            } else {
                return b.stargazers_count - a.stargazers_count;
            }
        });

        renderRepos(filtered);
    }

    function renderRepos(repos) {
        projectsContainer.innerHTML = '';

        if (repos.length === 0) {
            projectsContainer.innerHTML = '<p>No se encontraron proyectos con esos criterios.</p>';
            return;
        }

        repos.forEach(repo => {
            const card = document.createElement('article');
            card.className = 'project-card';
            
            const updatedAt = new Date(repo.pushed_at).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'short'
            });

            const demoLink = repo.homepage || (repo.has_pages ? `https://${repo.owner.login}.github.io/${repo.name}/` : '');

            card.innerHTML = `
                <div class="project-meta">
                    <span class="tag">${repo.language || 'N/A'}</span>
                    <span>⭐ ${repo.stargazers_count}</span>
                </div>
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sin descripción disponible.'}</p>
                <div class="project-meta" style="margin-top: auto; margin-bottom: 1rem;">
                    <span>Actualizado: ${updatedAt}</span>
                </div>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">Repo GitHub</a>
                    ${demoLink ? `<a href="${demoLink}" target="_blank" rel="noopener noreferrer" class="project-link">Ver Demo</a>` : ''}
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }
});
