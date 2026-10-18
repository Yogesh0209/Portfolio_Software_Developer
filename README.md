# Yogesh Singh Bhadoriya — Personal Portfolio

A bespoke, dark monochrome portfolio website for a Software Developer. Built with React, Vite, Tailwind CSS, Framer Motion, and procedural 3D CSS/SVG chrome elements.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS + Custom Obsidian Design System
- **Typography**: Google Fonts (*JetBrains Mono* + *Inter*)
- **Animations**: Framer Motion
- **Icons**: Lucide React + Bespoke Monochrome SVG Brand Marks
- **Graphics**: Procedural 3D liquid mercury and iridescent chrome spheres (zero heavy 3D bundles, zero external images)

---

## 🚀 Running Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy to Vercel

### Method 1: Using the Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI globally (if needed)
npm install -g vercel

# 2. Deploy to preview
vercel

# 3. Deploy directly to production
vercel --prod
```

### Method 2: Via GitHub & Vercel Dashboard

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bespoke software developer portfolio"
   git branch -M main
   git remote add origin https://github.com/Yogesh0209/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

---

## 📝 [TODO] Placeholders to Update

All user data is centralized inside [`src/data/portfolioData.js`](file:///c:/Users/asus/OneDrive/Desktop/Docs/Portfolio/src/data/portfolioData.js) so you can update everything in one place:

1. **Email Address**:
   - Located in `PERSONAL_INFO.socials.email` (currently `"[TODO: my email]"`).
2. **Resume Link**:
   - Located in `PERSONAL_INFO.socials.resume` (currently `"#resume"`; replace with your Google Drive or `/resume.pdf` link).
3. **Project Problem Statements & Links**:
   - **Quiz Application**: Update `problemStatement`, `githubUrl`, and `liveUrl`.
   - **CarDekho Clone**: Update `problemStatement`, `githubUrl`, and `liveUrl`.
   - **Supply Chain / Warehouse Management System**: Update `stack`, `problemStatement`, `githubUrl`, and `liveUrl`.
   - **Mental Health Chatbot**: Update `stack`, `problemStatement`, `githubUrl`, and `liveUrl`.
4. **Experience Highlights (FlutterFlirt Internship)**:
   - Located in `EXPERIENCE_DATA[0].highlights` (update the 3 bullet points with your exact work).
