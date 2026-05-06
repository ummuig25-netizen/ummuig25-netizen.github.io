const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    console.log('Starting PDF generation...');
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Absolute path to the CV HTML file
    const filePath = 'file://' + path.join(__dirname, '../cv/index.html');
    
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    // Ensure the assets directory exists
    const assetsDir = path.join(__dirname, '../assets');
    if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir);
    }

    await page.pdf({
        path: path.join(assetsDir, 'cv.pdf'),
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }
    });

    await browser.close();
    console.log('PDF generated successfully at assets/cv.pdf');
}

generatePDF().catch(err => {
    console.error('Error generating PDF:', err);
    process.exit(1);
});
