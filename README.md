# 🧾 NoteFlow

A modern note-taking application built with Next.js 16, React, and Tailwind CSS that helps users capture ideas, organize thoughts, and stay productive.

NoteFlow features a beautiful landing page, responsive dashboard, dark mode support, note management tools, smooth animations, and local storage persistence for a seamless user experience.
---

## 📌 Table of Contents
- <a href="#overview">Overview</a>
- <a href="#features">Features</a>
- <a href="#business-problem">Business Problem</a>
- <a href="#dataset">Dataset</a>
- <a href="#tools--technologies">Tools & Technologies</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#how-to-run-this-project">How to Run This Project</a>
- <a href="#final-recommendations">Final Recommendations</a>
- <a href="#author--contact">Author & Contact</a>

---
<h2><a class="anchor" id="overview"></a>Overview</h2>

NoteFlow is a lightweight note management platform designed for students, developers, writers, and professionals who want a simple way to organize their thoughts.

Users can:

- Create notes
- Edit existing notes
- Delete notes
- Search notes instantly
- Sort notes by date
- Toggle dark mode
- View notes in a dedicated modal
- Store notes locally without authentication

All notes are saved in browser Local Storage, ensuring data remains available even after refreshing the page.

---
<h2><a class="anchor" id="business-problem"></a>Features</h2>

### Landing Page
- Modern SaaS-style design
- Responsive navigation bar
- Dark mode toggle
- Animated hero section
- About section
- Features section
- Contact form
- Footer section

### Notes Dashboard
- Create Notes
- Edit Notes
- View Full Notes
- Delete Individual Notes
- Delete All Notes
- Search Notes by Title
- Sort Latest Notes
- Sort Oldest Notes
- Random Colored Note Cards
- Character Counter (500 characters)
- Responsive Layout

### User Experience
- Dark Mode Support
- Smooth Motion Animations
- Toast Notifications
- Mobile-Friendly Design
- Local Storage Persistence
---

<h2><a class="anchor" id="business-problem"></a>Business Problem</h2>

Many note-taking applications require user registration, cloud synchronization, and complex workflows.
For users who simply want a fast and distraction-free workspace, these solutions can feel overwhelming.

NoteFlow solves this by providing:
- Instant note creation
- No authentication required
- Simple and clean interface
- Fast note retrieval
- Lightweight local storage solution
- Responsive experience across devices

---
<h2><a class="anchor" id="dataset"></a>Dataset</h2>

This project does not use an external dataset.
Data is stored directly in the browser using Local Storage.

Each note contains:

```javascript
{
  id: Number,
  title: String,
  content: String
}
```

The application performs CRUD operations on this locally stored data.

---

<h2><a class="anchor" id="tools--technologies"></a>Tools & Technologies</h2>

### Frontend

- Next.js 15
- React.js
- JavaScript (ES6+)
- Tailwind CSS

### State Management

- React Context API

### Animations

- Motion (Framer Motion)

### Icons

- Lucide React

### Notifications

- React Hot Toast

### Storage

- Browser Local Storage

### Deployment

- Vercel

---
<h2><a class="anchor" id="project-structure"></a>Project Structure</h2>

```bash
NoteFlow/
│
├── app/
│   ├── page.js
│   ├── layout.js
│   │
│   ├── dashboard/
│   │   ├── page.js
│   │   └── layout.js
│   │
│   └── context/
│       └── NotesContext.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   │
│   ├── DashboardNavbar.jsx
│   ├── Sidebar.jsx
│   ├── NotesGrid.jsx
│   ├── NoteCard.jsx
│   │
│   ├── ViewNoteModal.jsx
│   ├── NoteModal.jsx
│   ├── DeleteModal.jsx
│   └── DeleteAllModal.jsx
│
├── assets/
│
├── public/
│
├── globals.css
├── package.json
└── README.md
```
---

<h2><a class="anchor" id="how-to-run-this-project"></a>How to Run This Project</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/noteflow.git
```

### 2. Navigate to the Project Folder

```bash
cd noteFlow
```
### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open Browser

```bash
http://localhost:3000
```

---
<h2><a class="anchor" id="final-recommendations"></a>Final Recommendations</h2>

Future enhancements that can be added:

- User Authentication
- Cloud Database Integration
- Note Categories
- Rich Text Editor
- Note Pinning
- Archive Notes Feature
- Tags and Labels
- Export Notes as PDF
- Markdown Support
- Real-time Synchronization
- Drag and Drop Note Organization

These improvements would make NoteFlow more scalable and production-ready.


---
<h2><a class="anchor" id="author--contact"></a>Author & Contact</h2>

**Amrapali Bala**  
Mern stack Developer
📧 Email: amrapalibala51@gmail.com 
🔗 [LinkedIn](https://www.linkedin.com/in/amrapali-bala-546b78252/)  
🔗 [Portfolio](https://portfolio-react-tailwind-css-umber.vercel.app/)