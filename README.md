# 🌙 Dream Keeper

Dream Keeper is a minimalist, dark-themed journal for capturing and organising your dreams.  
Built with **vanilla JS + HTML 5 + CSS Grid/Flexbox**, it focuses on clean code and a smooth keyboard-first flow—ideal for showcasing front-end fundamentals.

---

## ✨ Current Features

| Feature | Details |
|---------|---------|
| **Dream input box** | Animated `<textarea>` accepts multi-line text with **Shift + Enter**; pressing **Enter** alone triggers the save flow. |
| **Title-prompt modal** | After writing, a modal forces the user to supply a non-empty title before saving. |
| **Home gallery** | Saved titles render as cards in a responsive three-column grid. |
| **View / Edit / Delete menu** | Each card has a three-dot menu for viewing full text, renaming the title, or permanently deleting the entry. |
| **Local persistence** | Dreams are stored in `localStorage` as objects: `{ id, title, text }`. |
| **Keyboard & hover animations** | Re-usable key-frame cycles add subtle glow effects across pages. |

> **Note** — duplicate-title checks and an “undo delete” feature are **not** implemented yet; see the roadmap.

---

## 📁 Project Structure

pages/ ├─ home.html # list of saved dream titles └─ dreamInput.html # writing interface + modal scripts/ ├─ addDreams.js # render, edit, delete, view └─ saveDreams.js # title modal + save helper styles/ ├─ home.css ├─ dreamInput.css └─ dreamDisplay.css images/ # icons (trash, edit, view, home) README.md

yaml
Copy
Edit

---

## 💡 Tech Highlights

- **HTML 5** — semantic markup  
- **CSS 3** — Grid/Flexbox layout, custom key-frame animations  
- **ES 2020 JavaScript** — modules, `const`/`let`, arrow functions, `localStorage`  

---

## 🚀 Quick Start

```bash
# 1 – Clone
git clone https://github.com/colepuls/dream-keeper.git
cd dream-keeper

# 2 – Serve (optional but handy for clean routing)
npx serve .

# 3 – Open
open pages/home.html          # macOS
# or point your browser at pages/home.html
Click New Dream.

Type your dream → press Enter → give it a title in the modal.

The title appears on Home; hover its card for options to view, edit, or delete.

🛣️ Roadmap
🔍 Search & filter dream titles (Advanced AI search)

🚫 Duplicate-title guard during save

↩️ Undo-delete snackbar

☁️ Cloud sync (Firebase)

🧠 AI analyzer that reads a dream and gives it a tag (E.g. Scary, Lost, Confused, Sad, Uplifting)

📱 PWA wrapper for offline capture and mobile use.

🙋‍♂️ About Me
Cole Puls — CS sophomore @ Mizzou aiming for software + ML-engineering roles.

📬 Contact
GitHub: @colepuls

LinkedIn: Cole Puls

