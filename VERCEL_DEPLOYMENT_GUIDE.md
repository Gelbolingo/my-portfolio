# 🚀 How to Deploy Your Portfolio to Vercel

This guide will walk you through deploying your Unreal Graphics portfolio to Vercel.

---

## 📋 Prerequisites

1. A [GitHub](https://github.com) account
2. A [Vercel](https://vercel.com) account (you can sign up with GitHub)
3. Git installed on your computer

---

## Step 1: Push Your Code to GitHub

### Option A: Using GitHub Desktop (Easier for beginners)

1. **Download GitHub Desktop**
   - Go to https://desktop.github.com/
   - Install GitHub Desktop

2. **Sign in to GitHub Desktop**
   - Open GitHub Desktop
   - Sign in with your GitHub account

3. **Add Your Project**
   - Click `File` → `Add Local Repository`
   - Browse to: `D:\codingProject\Portfolio--g\unrealgraphics-portfolio`
   - Click `Add Repository`
   
   If it says "This directory does not appear to be a Git repository", click `Create a Repository` instead.

4. **Create the Repository**
   - Repository name: `unrealgraphics-portfolio`
   - Description: "Personal portfolio of Ury Gelbolingo - Graphic Designer"
   - Keep "Keep this code private" unchecked (or check it if you want it private)
   - Click `Create Repository`

5. **Publish to GitHub**
   - Click `Publish repository` button
   - Uncheck "Keep this code private" if you want it public
   - Click `Publish Repository`

### Option B: Using Command Line (Terminal)

Open PowerShell in your project folder and run:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - Unreal Graphics Portfolio"

# Create a new repository on GitHub (you'll need to do this manually on github.com first)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/unrealgraphics-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### 2.1 Sign Up for Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**

2. You'll see a list of your GitHub repositories
   - Find `unrealgraphics-portfolio`
   - Click **"Import"**

3. **Configure Project Settings**
   
   Vercel should auto-detect that it's a Vite project. Verify these settings:
   
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. Click **"Deploy"**

### 2.3 Wait for Deployment

- Vercel will now build and deploy your site
- This usually takes 1-3 minutes
- You'll see a progress screen with build logs

### 2.4 Your Site is Live! 🎉

Once deployment completes:
- You'll see a success screen with confetti 🎊
- Your site URL will be something like: `unrealgraphics-portfolio.vercel.app`
- Click **"Visit"** to see your live portfolio!

---

## Step 3: Custom Domain (Optional)

### Option 1: Use Vercel's Free Subdomain

Your site is already live at `your-project-name.vercel.app`

### Option 2: Add Your Own Custom Domain

1. In your Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter your custom domain (e.g., `unrealgraphics.com`)
4. Follow Vercel's instructions to configure DNS
5. Wait for DNS propagation (can take a few hours)

---

## 🔄 Updating Your Portfolio

Every time you make changes and want to update your live site:

### Using GitHub Desktop:

1. Make your changes to the code
2. Open GitHub Desktop
3. You'll see your changes listed
4. Add a summary (e.g., "Updated graphics gallery")
5. Click **"Commit to main"**
6. Click **"Push origin"**
7. Vercel will automatically rebuild and deploy! ✨

### Using Command Line:

```bash
git add .
git commit -m "Description of your changes"
git push
```

**That's it!** Vercel automatically deploys every time you push to GitHub.

---

## 📁 Important: File Structure Check

Before deploying, make sure your files are organized correctly:

```
unrealgraphics-portfolio/
├── public/
│   └── AssetOfMine/          ← Your images folder
│       ├── 1by1pic.jpg
│       ├── goldenlogo.png
│       ├── graphics/
│       ├── icon/
│       └── ...
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: Images Not Loading

**Problem**: Images show broken links

**Solution**: 
- Make sure `AssetOfMine` folder is in the `public/` directory
- Image paths should be: `AssetOfMine/graphics/1.png` (no `/public/`)
- Clear Vercel cache: Dashboard → Project → Settings → Clear Cache

### Issue 2: Build Fails

**Problem**: Deployment fails during build

**Solution**:
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Test build locally first: `npm run build`

### Issue 3: 404 on Page Refresh

**Problem**: Refreshing `/graphic-design` shows 404

**Solution**: This is already handled! Vite automatically creates a `vercel.json` configuration.

If you still have issues, create a `vercel.json` file in your project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Issue 4: CV Download Not Working

**Problem**: "Download CV" button doesn't work

**Solution**: 
- Place your CV in `public/AssetOfMine/CV.pdf`
- Update the button link in `App.jsx`:
  ```jsx
  <a className="download-cv-btn" href="/AssetOfMine/CV.pdf" target="_blank" rel="noreferrer">
  ```

---

## 🎨 Environment Variables (If Needed Later)

If you add any API keys or secrets:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## 📊 Vercel Dashboard Features

In your Vercel dashboard, you can:

- **Analytics**: See how many people visit your site
- **Domains**: Manage custom domains
- **Deployments**: View deployment history and rollback if needed
- **Settings**: Configure build settings, environment variables

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Documentation**: https://vercel.com/docs
- **Your Project URL**: Will be shown after deployment

---

## 🆘 Need Help?

If you run into issues:

1. Check the Vercel build logs (in the deployment details)
2. Make sure your project builds locally: `npm run build`
3. Check that all files are pushed to GitHub
4. Vercel has great documentation and support

---

## ✨ Quick Summary

1. ✅ Push code to GitHub (using GitHub Desktop or command line)
2. ✅ Sign up for Vercel with GitHub
3. ✅ Import your repository in Vercel
4. ✅ Click Deploy
5. ✅ Your site is live at `yourproject.vercel.app`!

**Future updates**: Just push to GitHub, and Vercel auto-deploys! 🚀

---

Good luck with your deployment! Your portfolio will be live in minutes! 🎉💜✨

