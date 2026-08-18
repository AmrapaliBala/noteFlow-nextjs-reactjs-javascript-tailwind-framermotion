# 🧾 NoteFlow

A modern note-taking web application that helps users capture ideas, organize thoughts, and stay productive. NoteFlow provides a clean and responsive interface for creating, editing, searching, sorting, and managing notes efficiently.
---

## 📌 Table of Contents
- <a href="#overview">Overview</a>
- <a href="#business-problem">Business Problem</a>
- <a href="#dataset">Dataset</a>
- <a href="#tools--technologies">Tools & Technologies</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#how-to-run-this-project">How to Run This Project</a>
- <a href="#final-recommendations">Final Recommendations</a>
- <a href="#author--contact">Author & Contact</a>

---
<h2><a class="anchor" id="overview"></a>Overview</h2>

NoteFlow is a lightweight note management application built with Next.js and React. It allows users to create, edit, delete, search, and organize notes in a simple and intuitive dashboard.

The application features a modern landing page, dark mode support, responsive design, note management tools, and local storage persistence so notes remain available even after refreshing the browser.

---
<h2><a class="anchor" id="business-problem"></a>Business Problem</h2>

Many users struggle with keeping track of ideas, tasks, and important information across multiple platforms. Traditional note-taking solutions can be overly complex or require account creation and cloud synchronization.

NoteFlow solves this problem by providing:
- Quick note creation and management
- Instant access to stored notes
- Simple and distraction-free interface
- Search functionality for finding notes quickly
- Dark mode for improved user experience
- Local storage persistence without requiring authentication

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
│   ├── page.jsx
│   ├── layout.jsx
│   ├── dashboard/
│   │   ├── page.jsx
│   │   └── layout.jsx
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
│   ├── DashboardNavbar.jsx
│   ├── Sidebar.jsx
│   ├── NotesGrid.jsx
│   ├── NoteCard.jsx
│   ├── NoteModal.jsx
│   ├── DeleteModal.jsx
│   └── DeleteAllModal.jsx
│
├── assets/
│
├── public/
│
└── package.json
```

### Core Features

- Create Notes
- Edit Notes
- Delete Individual Notes
- Delete All Notes
- Search Notes by Title
- Sort Notes by Latest
- Sort Notes by Oldest
- Responsive Design
- Dark Mode Support
- Local Storage Persistence
- Animated Landing Page
---

<h2><a class="anchor" id="how-to-run-this-project"></a>How to Run This Project</h2>

## How to Run This Project
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