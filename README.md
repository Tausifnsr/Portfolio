# Premium Developer Portfolio

A production-ready React + Vite portfolio focused on real product development: ERP platforms, mobile applications, healthcare systems, APIs, databases, and deployment.

## Run locally

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build`.

## Personalize before publishing

Update `src/data/siteData.js` with the final name, email, GitHub/LinkedIn URLs, project links, and project copy. Replace `public/resume-placeholder.txt` with a PDF résumé and update the `resume` path. Update the placeholder canonical domain and social preview metadata in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

The contact form includes validation, loading, and success states. Connect the `submit` handler in `src/sections/HomeSections.jsx` to EmailJS or your own API endpoint before launch.
