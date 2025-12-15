# Quick Deployment Guide

## 🚀 Deploy to GitHub Pages in 5 Minutes

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `akira2963753.github.io`
4. Make it **Public**
5. **DO NOT** initialize with README
6. Click **"Create repository"**

### Step 2: Upload Your Files

Open terminal/command prompt in the `portfolio` folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Personal portfolio website"

# Add your GitHub repository
git remote add origin https://github.com/akira2963753/akira2963753.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 4: Wait & Visit

- Wait 2-5 minutes for deployment
- Visit: `https://akira2963753.github.io/`
- Your website is now live! 🎉

## 📱 Test Your Website

Open your website and test:
- ✅ All navigation links work
- ✅ Mobile menu works on phone
- ✅ CV downloads correctly
- ✅ All sections display properly
- ✅ Social links work

## 🔄 How to Update Your Website Later

Whenever you want to update your website:

```bash
# 1. Make your changes to the files

# 2. Add changes
git add .

# 3. Commit changes
git commit -m "Updated projects and CV"

# 4. Push to GitHub
git push

# 5. Wait 1-2 minutes - your site will auto-update!
```

## 🖼️ Replace Profile Photo

1. Add your photo to `assets/images/` (e.g., `profile.jpg`)
2. Open `index.html`
3. Find line 81 and change:
   ```html
   <img src="assets/images/your-photo.jpg" alt="Ming-Hong Lin">
   ```
4. Save, commit, and push

## 📄 Update Your CV

1. Replace `assets/cv/Ming-Hong_Lin_CV.pdf` with your new CV
2. Keep the same filename OR update `index.html` (lines 48 and 407)
3. Commit and push

## 🎨 Customize Colors

Edit `css/style.css` (lines 13-22):

```css
:root {
    --accent-blue: #4a9eff;    /* Change this to your preferred color */
}
```

## ❓ Need Help?

Check the main [README.md](README.md) for detailed instructions.

---

Good luck with your portfolio! 🚀
