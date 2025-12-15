# Ming-Hong Lin - Personal Portfolio Website

A professional portfolio website showcasing my work in Digital IC Design and AI Accelerators.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Black/Gray Theme**: Professional and sleek design
- **Single-Page Layout**: Smooth scrolling navigation between sections
- **Downloadable CV**: Easy access to download my resume
- **Project Showcases**: Detailed descriptions of my research and projects
- **Publications**: List of conference papers and research work
- **Interactive Navigation**: Active section highlighting and smooth transitions

## Sections

1. **Home** - Introduction and quick links
2. **About** - Background and research interests
3. **Education** - Academic credentials and coursework
4. **Publications** - Conference papers and publications
5. **Projects** - Detailed project descriptions with achievements
6. **Skills** - Technical skills and tools
7. **Experience** - Work experience and internships
8. **Contact** - Contact information and social links

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactions (no frameworks)
- **Font Awesome**: Icons
- **Google Fonts**: Roboto and Open Sans typography

## File Structure

```
portfolio/
├── index.html                          # Main HTML file
├── css/
│   └── style.css                      # Stylesheet
├── js/
│   └── main.js                        # JavaScript functionality
├── assets/
│   ├── cv/
│   │   └── Ming-Hong_Lin_CV.pdf      # CV PDF file
│   └── images/
│       └── profile-placeholder.svg    # Profile photo placeholder
└── README.md                          # This file
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

You have two options for the repository name:

**Option A: User Site (Recommended)**
- Repository name: `akira2963753.github.io`
- Your site will be: `https://akira2963753.github.io/`

**Option B: Project Site**
- Repository name: `portfolio` (or any name)
- Your site will be: `https://akira2963753.github.io/portfolio/`

### Step 2: Initialize Git and Push Files

Open terminal/command prompt in the portfolio folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Personal portfolio website"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/akira2963753/akira2963753.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment
7. Your site will be live at the URL shown

### Step 4: Verify Deployment

- Visit your GitHub Pages URL
- Test all navigation links
- Download the CV to verify it works
- Check responsive design on mobile devices

## Customization Guide

### Update Profile Photo

1. Replace `assets/images/profile-placeholder.svg` with your photo
2. Recommended: Use a professional headshot (300x300px or similar)
3. Supported formats: JPG, PNG, SVG
4. If using JPG/PNG, update the image reference in `index.html` (line 81):
   ```html
   <img src="assets/images/your-photo.jpg" alt="Ming-Hong Lin">
   ```

### Update CV

1. Replace `assets/cv/Ming-Hong_Lin_CV.pdf` with your updated CV
2. Keep the same filename, or update references in `index.html`:
   - Line 48: Hero section download button
   - Line 407: Contact section download button

### Change Colors

Edit `css/style.css` and modify the CSS variables (lines 13-22):

```css
:root {
    --primary-black: #1a1a1a;      /* Main dark color */
    --secondary-black: #2d2d2d;    /* Secondary dark */
    --accent-blue: #4a9eff;        /* Accent color */
    --light-gray: #f5f5f5;         /* Light sections background */
    /* ... other variables ... */
}
```

### Add New Projects

1. Open `index.html`
2. Find the Projects section (around line 180)
3. Copy an existing `<div class="project-card">` block
4. Paste and modify with your project details

### Update Contact Information

Edit `index.html` and update:
- Line 46-56: Hero section social links
- Line 370-402: Contact section details

## Testing Locally

### Option 1: Using Python

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 2: Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Open: http://localhost:8080
```

## Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No external frameworks**: Fast loading
- **Optimized images**: SVG for placeholder
- **Minimal JavaScript**: Only essential functionality
- **Mobile-optimized**: Responsive design

## Custom Domain (Optional)

To use a custom domain like `www.minghonglin.com`:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository, create a file named `CNAME` (no extension)
3. Add your domain to the file: `www.minghonglin.com`
4. In your domain registrar's DNS settings, add:
   - A record pointing to: `185.199.108.153`
   - A record pointing to: `185.199.109.153`
   - A record pointing to: `185.199.110.153`
   - A record pointing to: `185.199.111.153`
   - CNAME record: `www` pointing to `akira2963753.github.io`
5. Wait for DNS propagation (can take up to 48 hours)

## Maintenance

### Regular Updates

- **CV**: Update whenever you have new achievements
- **Projects**: Add new projects as you complete them
- **Publications**: Add new papers when published
- **Experience**: Update work experience and skills

### Git Workflow for Updates

```bash
# Make your changes to the files

# Add changed files
git add .

# Commit with a descriptive message
git commit -m "Update: Added new project and publications"

# Push to GitHub
git push

# GitHub Pages will automatically redeploy (takes 1-2 minutes)
```

## Troubleshooting

### Site not loading

- Check that GitHub Pages is enabled in repository settings
- Verify the repository name (for user site, must be `username.github.io`)
- Wait a few minutes after pushing changes

### CV download not working

- Verify the PDF file exists in `assets/cv/` folder
- Check the file path in HTML matches the actual filename
- Ensure the file was committed and pushed to GitHub

### Images not displaying

- Check file paths are correct
- Verify images are in the `assets/images/` folder
- Make sure image files are committed to the repository

### Mobile menu not working

- Check that `js/main.js` is loaded correctly
- Open browser console (F12) to check for JavaScript errors
- Verify Font Awesome CSS is loading

## License

This website is for personal use. Feel free to use the template for your own portfolio.

## Contact

**Ming-Hong Lin**
- Email: harry2963753@gmail.com
- LinkedIn: [linkedin.com/in/-marco-lin](https://www.linkedin.com/in/-marco-lin)
- GitHub: [github.com/akira2963753](https://github.com/akira2963753)

---

**Last Updated**: December 2025

Built with ❤️ for Digital IC Design
