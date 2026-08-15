# 🚀 Deployment Guide

Your beautiful romantic website is ready to share with the world! Here's how to deploy it to various platforms.

## ⚡ Quick Deploy to Netlify (Recommended)

Netlify is the easiest and fastest way to deploy your site.

### Method 1: Drag & Drop (Simplest)

1. **Build your project locally**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your production-ready site.

2. **Go to [netlify.com](https://netlify.com)**
   - Sign up for a free account if needed
   - Log in to your account

3. **Deploy**
   - Drag and drop the `dist` folder onto Netlify
   - Your site is live! You'll get a URL like: `https://romantic-abc123.netlify.app`

### Method 2: GitHub Connection (Recommended for Updates)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: romantic website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/romantic-site.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose your `romantic-site` repository
   - Build settings will be auto-detected
   - Click "Deploy"

3. **Automatic Updates**
   - Every time you push to GitHub, Netlify automatically rebuilds and redeploys
   - Perfect for making updates!

## 🎯 Custom Domain on Netlify

1. After deployment, go to your site's dashboard
2. Click "Site Settings" → "Domain Management"
3. Click "Add custom domain"
4. Enter your domain (e.g., `romantic-site.com`)
5. Follow the DNS setup instructions
6. Point your domain registrar's DNS to Netlify's nameservers

**Cost**: Free with Netlify (just buy your domain separately for ~$10-15/year)

## 🔷 Deploy to Vercel

Vercel is another excellent option with similar ease.

1. **Push to GitHub** (same as above)

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up with GitHub
   - Click "New Project"
   - Select your `romantic-site` repository
   - Settings will be auto-detected
   - Click "Deploy"

3. **Get your URL**: `https://romantic-site.vercel.app`

## ☁️ Deploy to GitHub Pages (Free)

### Requirements
- GitHub account with a `romantic-site` repository

### Steps

1. **Update package.json**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/romantic-site"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json scripts**
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Select `gh-pages` branch
   - Your site will be live at: `https://YOUR_USERNAME.github.io/romantic-site`

## 🌐 Custom Domain Setup

After deploying to any platform, you can add your own domain:

### Buy a Domain
- [Namecheap.com](https://namecheap.com) - Affordable
- [Google Domains](https://domains.google) - Easy to use
- [GoDaddy](https://godaddy.com) - Popular
- Cost: ~$10-15/year

### Connect to Netlify
1. Dashboard → Site Settings → Domain Management
2. Add custom domain
3. Update DNS nameservers at your registrar to Netlify's

### Connect to Vercel
1. Dashboard → Settings → Domains
2. Add domain
3. Update DNS at your registrar

## 📝 Environment Checklist

Before deploying, ensure:

- [ ] All placeholder text in `src/data/content.js` has been customized
- [ ] Photos are added to `public/memories/` folder
- [ ] Music file is in `public/music/` (optional)
- [ ] Images are compressed for web (use tools like TinyPNG)
- [ ] Project builds without errors: `npm run build`
- [ ] Tested on mobile devices
- [ ] All links and navigation work correctly
- [ ] Music player (if used) works without autoplay errors

## 🔒 Privacy & Security

✅ This website is completely private by default:
- No tracking or analytics
- No data collection
- No login required
- No external databases
- Works entirely client-side

The only way others can access it is through the URL you share.

## 📱 Testing Before Deploy

### Local Testing
```bash
# Build for production
npm run build

# Test the production build locally
npm install -D serve
npx serve -s dist
```

Visit `http://localhost:3000` to test the production version.

### Mobile Testing
- Test on actual devices or use browser DevTools
- Check landscape and portrait orientations
- Verify touch interactions work smoothly
- Check music player on mobile

## 🎁 Sharing Your Website

Once deployed, you can share in several ways:

1. **Direct Link** (Most Common)
   ```
   Hey, I made something special for you: https://your-romantic-site.com
   ```

2. **QR Code**
   - Use QR generator (e.g., qr-server.com)
   - Create QR code linking to your site
   - Send QR code in message

3. **Social Media**
   - Share link in DM or comment
   - Short description with heart emoji

4. **Email**
   - Send link with a personal message
   - Works on all devices

## 🚨 Troubleshooting Deployment

### Build fails with "Cannot find module"
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not showing on deployed site
- Check image paths in `src/data/content.js`
- Ensure paths start with `/` (e.g., `/memories/photo.jpg`)
- Verify images are in the `public/` folder

### Music doesn't play
- Check file format (MP3, WAV, OGG are best)
- Verify file path in content.js
- Remember: Browsers require user interaction to play audio
- Use the Music Player button to start playback

### Styles look wrong
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+F5)
- Check if CSS built correctly in dist folder

### Site is slow
- Compress images using TinyPNG.com
- Remove unused dependencies
- Enable browser caching in Netlify settings

## 📈 Monitor Your Site

### Netlify Analytics (Free)
- Dashboard shows visitors and traffic
- Identify popular sections
- Track deploy history

### Google Analytics (Optional)
- Add to track user behavior
- Monitor bounce rate
- See which sections users spend time on

## 🔄 Making Updates

### Easy Updates Process

1. **Edit content locally**
   ```bash
   npm run dev
   ```

2. **Test changes**
   - Visit http://localhost:5173/
   - Check everything looks good

3. **Commit and push** (GitHub method)
   ```bash
   git add .
   git commit -m "Update: [describe changes]"
   git push origin main
   ```
   - Netlify/Vercel auto-redeploy

4. **Or drag & drop new dist folder** (Manual method)
   - Run `npm run build`
   - Drag `dist` folder to Netlify

## 💝 Final Tips

- **Keep it personal**: The more specific to your relationship, the better
- **Update regularly**: Add new memories, reasons, or dreams
- **Backup your work**: Keep a local copy and GitHub repository
- **Mobile first**: Always test on phones
- **Share wisely**: Only send to the intended person

## 🎉 You're Ready!

Your romantic website is built and ready to deploy. Choose your platform, customize your content, and share your love with the world!

If you need help, remember:
- Check the README.md for customization details
- Review component files in `src/components/`
- Check `src/data/content.js` for all text content
- Test locally before deploying

**Happy deploying! ❤️**

---

Made with ❤️ for your special someone
