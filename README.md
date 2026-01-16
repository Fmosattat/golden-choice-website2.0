# Golden Choice – PDF to Website (pixel-close)

This folder contains:
- index.html (pixel-close rendering of all 19 PDF pages)
- assets/page-01.webp ... page-19.webp (page backgrounds)

The layout is:
- Each PDF page is rendered as a background image inside a responsive 16:9 container.
- Extracted text spans are overlaid in their original positions for selectability and SEO.
- A tiny JS snippet sets a CSS scale factor so font sizes match while the page scales.

## Run locally
Just open `index.html` in a browser, or run a simple local server:

### Option A: Python
python -m http.server 8080

Then open: http://localhost:8080

### Option B: Node
npx serve .

## Deploy (fastest)
### 1) Netlify (drag & drop)
1. Zip this folder (or use the provided zip).
2. Go to Netlify -> Add new site -> Deploy manually
3. Drag the zip or folder
4. Done

### 2) Vercel (static)
1. Create a new project
2. Import the folder as a static project
3. Set output as root (index.html)
4. Deploy

### 3) GitHub Pages
1. Create a repo
2. Upload `index.html` + `assets/`
3. Settings -> Pages -> Deploy from branch
4. Choose main branch / root

## Next improvements
- Convert to web-native responsive sections (Hero/About/Services/Clients/Process)
- Replace per-page backgrounds with semantic HTML + component design
- Compress images further / add lazy-loading / split into pages