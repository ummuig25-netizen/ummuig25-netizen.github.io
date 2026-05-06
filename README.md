# Portfolio Profesional - ummuig25-netizen

Este es el repositorio de mi sitio web personal, hospedado en GitHub Pages.

## 🚀 Tecnologías
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Automatización**: Node.js, Puppeteer (Generación de PDF), GitHub Actions
- **SEO**: Sitemap XML, Robots.txt, WCAG AA Compliance

## 📁 Estructura
- `/index.html`: Inicio
- `/cv/index.html`: Curriculum Vitae (HTML)
- `/projects/index.html`: Proyectos dinámicos (GitHub API)
- `/contact/index.html`: Formulario de contacto
- `/assets/`: Estilos, scripts y el CV en PDF
- `/scripts/`: Scripts de automatización

## 🛠️ Instrucciones de Mantenimiento

### Actualizar el CV
1. Edita el archivo `cv/index.html` con tu nueva información.
2. Al hacer push a `main`, GitHub Actions regenerará automáticamente el PDF y actualizará el sitio.

### Regenerar Sitemap y Robots
Los archivos `sitemap.xml` y `robots.txt` se actualizan automáticamente en cada despliegue a través del workflow de CI/CD.

### Ejecutar Pruebas Locales
Para validar el HTML y ejecutar Lighthouse localmente:
```bash
npm install
npm run lint
npm run lighthouse
```

## 🤖 CI/CD
El despliegue se gestiona mediante GitHub Actions (`.github/workflows/deploy.yml`), que realiza las siguientes tareas:
1. Valida el HTML con `html-validate`.
2. Genera el sitemap actualizado.
3. Genera el PDF del CV profesional.
4. Ejecuta Lighthouse CI para asegurar la calidad y el rendimiento.
5. Publica los cambios en la rama `main` y despliega en GitHub Pages.

---
© 2026 Umar Sharif Muhammad Iglesias
