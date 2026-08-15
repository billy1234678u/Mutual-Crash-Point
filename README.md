# 💕 Romantic Love Website

A beautiful, interactive, mobile-first romantic website dedicated to your partner. Built with React, Vite, and Tailwind CSS.

## 🎯 Features

✨ **Stunning Design**
- Modern, elegant aesthetic with romantic color palette
- Smooth animations and transitions
- Mobile-first responsive design
- Beautiful UI components with rounded corners and soft shadows

❤️ **Interactive Sections**
- **Hero Landing**: Impressive opening screen with floating hearts
- **Love Letter**: Interactive envelope that opens to reveal a heartfelt message
- **Memory Gallery**: Beautiful photo gallery with lightbox preview
- **Reasons I Love You**: Expandable cards displaying personal reasons
- **Relationship Quiz**: Fun game testing knowledge about your relationship
- **Love Meter**: Playful meter that measures love (with humorous overflow)
- **Future Dreams**: Vision cards for experiences to share together
- **Final Surprise**: Dramatic final reveal with celebration animations

🎵 **Music Player**
- Optional background music functionality
- User-controlled play/pause with session memory
- Non-intrusive floating button

📱 **Mobile Optimized**
- Perfect experience on phones, tablets, and desktops
- Touch-friendly buttons and spacing
- Fast loading and smooth performance
- Accessibility features included

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm installed

### Installation

```bash
# Navigate to the project directory
cd romantic-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🎨 Customization Guide

All personal content is stored in `src/data/content.js`. Simply replace placeholders with your own content:

### 1. **Partner Information**
```javascript
partnerName: "Your Partner's Name"
```

### 2. **Landing Section**
```javascript
landing: {
  greeting: "Hey, [PARTNER_NAME] ❤️",
  message: "Your personalized message here",
  buttonText: "Your button text",
}
```

### 3. **Love Letter**
```javascript
letter: {
  title: "Your title",
  opening: "Opening paragraph",
  paragraphs: [
    "Paragraph 1",
    "Paragraph 2", 
    "Paragraph 3",
  ]
}
```

### 4. **Memory Gallery**
Replace image paths in the `memories` array:
```javascript
memories: [
  {
    id: 1,
    image: "/path/to/photo1.jpg",  // Replace with actual photo path
    caption: "Your caption here",
  },
  // ... more memories
]
```

**Note**: Place your photos in the `public/` folder:
```
public/
  memories/
    photo1.jpg
    photo2.jpg
    ...
```

Then reference them as: `"/memories/photo1.jpg"`

### 5. **Reasons I Love You**
Edit the `reasons` array with your own reasons:
```javascript
reasons: [
  {
    id: 1,
    emoji: "😊",
    title: "Your Smile",
    description: "Why this quality makes you special...",
  },
  // ... more reasons
]
```

### 6. **Relationship Quiz**
Customize questions and answers:
```javascript
quiz: {
  questions: [
    {
      id: 1,
      question: "Who fell first?",
      options: ["Me", "You", "At the same time"],
      answer: 0, // Index of correct answer
    },
    // ... more questions
  ]
}
```

### 7. **Future Dreams**
Add experiences you want to share:
```javascript
futureDreams: {
  dreams: [
    {
      emoji: "🌍",
      title: "Travel somewhere beautiful",
      description: "Description of the experience",
    },
    // ... more dreams
  ]
}
```

### 8. **Love Meter**
Customize the result messages:
```javascript
loveMeter: {
  result: "ERROR: Love level exceeded maximum",
  message: "Your humorous message here",
}
```

### 9. **Final Surprise**
```javascript
finalSurprise: {
  reveal: "I Choose You. ❤️",
  message: "Your final personal message here",
}
```

### 10. **Music**
Add your background music:
```javascript
music: {
  songUrl: "/path/to/your/song.mp3", // Place file in public/ folder
  songName: "Song Name - Artist Name",
}
```

Place your music file in `public/music/song.mp3` and reference as `"/music/song.mp3"`

## 🎨 Color Customization

The color palette is defined in `tailwind.config.js`. To change colors:

```javascript
theme: {
  extend: {
    colors: {
      romantic: {
        // Modify these colors to your preference
        500: '#ec4899',  // Main pink
        600: '#db2777',  // Darker pink
        700: '#be185d',  // Even darker
      },
      wine: '#722c2c',     // Dark burgundy
      cream: '#fef5f0',    // Soft cream
    }
  }
}
```

## 📱 Navigation

The website includes 7 main sections accessible via navigation:
1. **Home** - Landing page
2. **Letter** - Love letter
3. **Memories** - Photo gallery
4. **Reasons** - Why you love them
5. **Quiz** - Relationship game
6. **Future** - Dreams together
7. **Surprise** - Final reveal

Navigation works via:
- Top navbar on desktop
- Mobile hamburger menu on mobile
- Smooth scroll to sections
- Auto-active section highlighting

## 🔧 Technical Stack

- **React 18**: UI framework
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Beautiful icons
- **CSS Animations**: Smooth transitions and effects

## 📦 Deployment

### Deploy to Netlify

1. **Create a Netlify account** at [netlify.com](https://netlify.com)

2. **Build the project locally**
   ```bash
   npm run build
   ```

3. **Deploy the `dist` folder to Netlify**
   - Option A: Drag and drop the `dist` folder to Netlify
   - Option B: Connect your GitHub repo for automatic deployments

4. **Custom domain** (Optional)
   - Go to Site Settings → Domain Management
   - Add your custom domain

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and select your repository
4. Deploy!

### Deploy to GitHub Pages

```bash
# Update package.json "homepage" field to your GitHub Pages URL
npm run build
git add dist -f
git commit -m "Deploy"
git push origin
```

## ✨ Features & Accessibility

- ✅ Respects `prefers-reduced-motion` for accessibility
- ✅ Keyboard navigation support
- ✅ Semantic HTML
- ✅ Alt text on images
- ✅ Proper color contrast
- ✅ Touch-friendly buttons (min 44x44px)
- ✅ Fast loading (optimized images and assets)

## 🎬 Animation Performance Tips

- Animations are GPU-accelerated for smooth 60fps on mobile
- Reduced motion is automatically respected for accessibility
- No excessive JavaScript animations that drain battery

## 🐛 Troubleshooting

### Images not showing
- Check image paths in `content.js`
- Ensure images are in the `public/` folder
- Use relative paths like `/memories/photo.jpg`

### Music not playing
- Check music file path in `content.js`
- Ensure audio file is in `public/` folder
- Try different audio format (MP3, WAV, OGG)
- Remember: Audio requires user interaction to play

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

This project is personal and for your use. Feel free to modify and share!

## 💕 Final Thoughts

This website is meant to be a beautiful digital expression of your love. Every detail has been crafted to feel personal and special. Take time to customize each section with your own story, memories, and inside jokes.

Make it uniquely yours! ❤️

---

**Made with ❤️ for your special someone**

For more help, check the source code comments in each component!
