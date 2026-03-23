# Aditya Sawant — Developer Portfolio

A modern, animated developer portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack

- **React 18** + **Vite** — lightning-fast dev/build
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations & transitions
- **Lucide React** — clean icon set

---

## 📁 Folder Structure

```
aditya-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with scroll highlight
│   │   ├── Hero.jsx            # Terminal intro + typing animation
│   │   ├── About.jsx           # Bio + highlight cards
│   │   ├── Experience.jsx      # Education & experience timeline
│   │   ├── Skills.jsx          # Tech grid with hover animations
│   │   ├── Projects.jsx        # Project cards with links
│   │   ├── Contact.jsx         # Contact form + social links
│   │   ├── AnimatedEnding.jsx  # Moon/landscape SVG scene + footer
│   │   ├── SectionDivider.jsx  # Animated wave dividers
│   │   ├── LoadingScreen.jsx   # Terminal boot loader
│   │   ├── CustomCursor.jsx    # Custom animated cursor
│   │   └── ScrollToTop.jsx     # Floating scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js    # ✏️ Edit YOUR content here
│   ├── hooks/
│   │   └── useCustomCursor.js  # Cursor logic hook
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Installation & Running Locally

### Prerequisites
- Node.js v18+ 
- npm v9+

### Steps

```bash
# 1. Navigate into the project
cd aditya-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## ✏️ Customizing Your Content

All personal content is in **`src/data/portfolioData.js`**. Edit:

- `personal` — name, role, email, GitHub, LinkedIn, location
- `about` — bio paragraphs, highlight cards
- `education` — your degrees / institutions
- `experience` — work experience entries
- `skills` — technologies with icons, colors, proficiency
- `projects` — project cards with descriptions, links, tags

---

## 🌐 Deploy on Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (run from project root)
vercel

# Follow the prompts — Vercel auto-detects Vite
```

### Option 2: Vercel Dashboard (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Vercel auto-detects Vite settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy** — done! 🎉

Your portfolio will be live at `https://your-project.vercel.app`

---

## 🎨 Design Features

- ✅ Terminal-style loading screen
- ✅ Typing animation with role cycling
- ✅ Custom animated cursor (hidden on touch devices)
- ✅ Glassmorphism cards with hover glow
- ✅ Parallax floating particles in hero
- ✅ Animated moon/waterfall/landscape ending scene
- ✅ Section wave dividers
- ✅ Scroll-triggered animations
- ✅ Responsive for all screen sizes
- ✅ Dark developer theme
- ✅ Gradient text + glow effects

---

## 📝 License

MIT — free to use and customize.
