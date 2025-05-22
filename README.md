# 🌙 Dream Keeper

Dream Keeper is a minimalist, dark-themed journal for capturing and organizing your dreams.  
Rebuilt with **React + Vite**, it maintains a clean look and keyboard-first UX while demonstrating modern component-based front-end architecture.

---

## ✨ Current Features

| Feature                                | Details                                                                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Dream input box**                    | Animated `<textarea>` accepts multi-line text with **Shift + Enter**; pressing **Enter** alone triggers the save modal. |
| **Title-prompt modal**                 | A modal prompts for a non-empty title before saving any dream.                                                          |
| **AI mood tagging**                    | When a dream is saved, AI automatically assigns a one-word mood tag (e.g., "scary", "peaceful", "sad").                |
| **Dream gallery**                      | Saved titles display as cards in a responsive, animated grid.                                                           |
| **View page**                          | Click a card to open a `/view/:id` page showing the full dream.                                                         |
| **Three-dot menu**                     | Each dream card includes options to **View**, **Edit**, or **Delete**.                                                  |
| **Local persistence**                  | Dreams are stored in `localStorage` as objects: `{ id, title, text, mood }`.                                            |
| **Ask AI page**                        | `/AskAI` page allows users to chat with AI about their dreams (powered by Ollama).                                      |
| **Modular components**                 | Built with reusable components like `DreamCard`, `Modal`, and `Navigator`.                                              |
| **React Router**                       | Supports multiple routes: `/`, `/new`, `/view/:id`, `/AskAI`.                                                           |
| **Smooth keyboard + hover animations** | Keyframe effects animate light tones across UI.                                                                         |

> **Note** — Duplicate-title checks and an “undo delete” feature are **not yet implemented** (see roadmap below).

---

## 📁 Project Structure

```plaintext
src/
├── assets/              # CSS files
│   ├── dreamInput.css
│   ├── dreamDisplay.css
│   ├── Navigator.css
│   ├── Home.css
│   └── AIChat.css
├── components/
│   ├── DreamCard.jsx    # Card UI with edit/delete/view options
│   ├── Modal.jsx        # Title input modal
│   ├── Navigator.jsx    # Bottom nav with icons
│   └── AIChat.jsx       # AI chat interface
├── pages/
│   ├── Home.jsx         # Home with dream gallery
│   ├── DreamInput.jsx   # Input page for writing dreams
│   └── DreamView.jsx    # Page for viewing full dream
├── App.jsx              # Router setup
├── main.jsx             # React root
public/
└── assets/images/       # Icons and branding
```

---

## 💡 Tech Highlights

* **React 18** — hooks, state, props, modular UI
* **Vite** — ultra-fast dev environment
* **React Router v6+** — clean route management
* **CSS Grid/Flexbox** — responsive layout and smooth transitions
* **localStorage** — fast, offline-first dream persistence
* **Ollama API** — AI chat assistant for dream interpretation or creative feedback

---

## 🚀 Quick Start

```bash
# 1 – Clone the repo
git clone https://github.com/colepuls/dream-keeper.git
cd dream-keeper

# 2 – Install dependencies
npm install

# 3 - Install Ollama API
https://ollama.com/download

# 4 - Run Ollama locally
ollama run mistral

# 5 – Run the app locally
npm run dev
```

Click “New Dream”, type your dream, hit Enter, then add a title → saved!

Use the navigation bar to access saved dreams, create a new one, or talk to the AI.

https://github.com/user-attachments/assets/bb79bd4f-7bd6-48f1-825d-16514a103b9f

---

## 🚣️ Roadmap

* ❌ **Duplicate-title guard** during save
* ↩️ **Undo delete** snackbar
* ☁️ **Cloud sync** with Firebase or Supabase
* 📱 **PWA wrapper** for offline mobile use

---

## 👤 About Me

**Cole Puls** — CS sophomore @ Mizzou  
Focused on software and machine learning engineering.

---

## 📬 Contact

* GitHub: [@colepuls](https://github.com/colepuls)
* LinkedIn: [linkedin.com/in/colepuls](https://linkedin.com/in/colepuls)
* Email: [colepuls@me.com](mailto:colepuls@me.com)
