# 🌙 Dream Keeper

Dream Keeper is a minimalist, dark-themed journal for capturing and organizing your dreams.  
Now rebuilt with **React + Vite**, it maintains the clean look and keyboard-first UX while demonstrating modern component-based front-end architecture.

---

## ✨ Current Features

| Feature | Details |
|---------|---------|
| **Dream input box** | Animated `<textarea>` accepts multi-line text with **Shift + Enter**; pressing **Enter** alone triggers the save modal. |
| **Title-prompt modal** | A modal prompts for a non-empty title before saving any dream. |
| **Dream gallery** | Saved titles display as cards in a responsive, animated grid. |
| **Three-dot menu** | Each dream card includes options to **View**, **Edit**, or **Delete**. |
| **Local persistence** | Dreams are stored in `localStorage` as objects: `{ id, title, text }`. |
| **Modular components** | Built with reusable components like `DreamCard` and `Modal`. |
| **React Router** | Two routes: `/` for Home, `/new` for input. |
| **Smooth keyboard + hover animations** | Key-frame effects cycle light tones across UI. |

> **Note** — Duplicate-title checks and an “undo delete” feature are **not yet implemented** (see roadmap below).

---

## 📁 Project Structure

src/
├── assets/ # CSS files
│ ├── dreamInput.css
│ ├── dreamDisplay.css
│ └── home.css
├── components/
│ ├── DreamCard.jsx # View/Edit/Delete logic
│ └── Modal.jsx # Title input modal
├── pages/
│ ├── Home.jsx # Home page with saved dreams
│ └── DreamInput.jsx # Input page for writing dreams
├── App.jsx # React Router
├── main.jsx # App root
public/
└── assets/images/ # Icons (trash, edit, view, home)

yaml
Copy
Edit

---

## 💡 Tech Highlights

- **React 18** — hooks, components, state
- **Vite** — blazing-fast bundler + dev server
- **React Router** — simple page routing (`/`, `/new`)
- **CSS Grid/Flexbox** — layout + animation
- **Vanilla localStorage** — persistent data

---

## 🚀 Quick Start

```bash
# 1 – Clone
git clone https://github.com/colepuls/dream-keeper.git
cd dream-keeper

# 2 – Install
npm install

# 3 – Run locally
npm run dev

# 4 – Open
http://localhost:5173

Click “New Dream”, type your dream, hit Enter, add a title → saved!

Cards appear on the home page; click the ⋮ icon to view, edit, or delete.

🛣️ Roadmap
🔍 Search & filter dream titles (AI search)

🚫 Duplicate-title guard during save

↩️ Undo snackbar for deletions

☁️ Cloud sync (e.g. Firebase)

🧠 AI analyzer (tag dreams: Scary, Sad, Uplifting, etc.)

📱 PWA wrapper for offline + mobile use

🙋‍♂️ About Me
Cole Puls — CS sophomore @ Mizzou
Focused on software and machine learning engineering roles.

📬 Contact
GitHub: @colepuls
LinkedIn: linkedin.com/in/colepuls
Email: colepuls@me.com
