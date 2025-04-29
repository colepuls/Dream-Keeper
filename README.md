# 🌙 Dream Keeper

Dream Keeper is a lightweight, visually striking web app for capturing and organizing your dreams. It focuses on **clarity, speed, and a delightful UI**, demonstrating solid front-end skills (HTML / CSS / Vanilla JS) plus clean code organization—perfect for recruiters or portfolio reviews.

---

## ✨ Key Features

| Feature | What it Does |
|---------|--------------|
| **Dream Input** | Animated text area with `Shift + Enter` for new lines and `Enter` to submit. |
| **Title-Prompt Modal** | After submission, a pop-up asks for a short dream title, preventing empty or duplicate titles. |
| **Home Timeline** | Lists saved dreams (title only) in a glowing card layout with delete buttons. |
| **Delete & Undo Safety** | One-click trash icon removes a dream from both the DOM **and** `localStorage`. |
| **Persistent Storage** | Everything is stored in `localStorage`, so your list survives page reloads. |
| **Responsive, Animated UI** | Color-cycling shadows, subtle hover states, and keyboard-first design. |

---

## 📁 Project Structure

    ├── pages/
    │   ├── home.html          # Main page (dream list)
    │   └── dreamInput.html    # Dream entry form + title modal
    ├── scripts/
    │   ├── addDreams.js       # Renders dreams on home, handles deletion
    │   └── saveDreams.js      # Modal logic & localStorage helper
    ├── styles/
    │   ├── home.css           # Home-page layout & button styles
    │   ├── dreamInput.css     # Animated text box & modal styling
    │   └── dreamDisplay.css   # Card layout for dream entries
    ├── images/                # Icons & UI assets
    └── README.md

---

## 💡 Tech Highlights

- **HTML5** – semantic, accessible markup with ARIA-friendly controls  
- **CSS3** – flexbox, keyframe animations, custom properties, glow effects  
- **JavaScript (ES6)** – modules, dataset API, dynamic DOM updates, `localStorage`  

---

## 🚀 Quick Start

    # 1. Clone the repo
    git clone https://github.com/colepuls/dream-keeper.git
    cd dream-keeper

    # 2. (Optional) start a static server for clean routing
    npx serve .
    # or use VS Code “Live Server”

    # 3. Open the app
    open pages/home.html    # macOS
    # or simply navigate to pages/home.html in your browser

1. On **Home**, click **“New Dream”**.  
2. Type your dream, press **Enter**, then supply a title in the modal.  
3. Your dream title now appears on Home. Delete anytime with the trash icon.

---

## 🛣️ Roadmap

- 🔍 **Search & filter** dreams by keyword  
- ☁️ **Cloud sync** via Firebase or Supabase  
- 🧠 **AI summarizer** (Flask API prototype already running locally)  
- 📱 **PWA wrapper** for offline/mobile usage  

---

## 📸 Preview

_Add a GIF or screenshots here showcasing the title modal and animated list._

---

## 🙋‍♂️ About Me

**Cole Puls** – CS sophomore @ Mizzou, aspiring software & AI engineer. I’m passionate about crafting intuitive UIs and solving problems with clean, modern web tech.

---

## 📬 Contact

- **GitHub:** [@colepuls](https://github.com/colepuls)  
- **LinkedIn:** [Cole Puls](https://linkedin.com/in/colepuls)  

---

> _“Dreams are illustrations… from the book your soul is writing about you.”_ – Marsha Norman
