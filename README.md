# Career Code - Job Portal

[Live Site](https://career-code-site.web.app/)

## Overview

Career Code is a modern job portal web application built with React, Tailwind CSS, and Firebase. It allows users to search and apply for jobs, manage their applications, and for recruiters to post and manage job listings. The platform features a beautiful UI, responsive design, and smooth user experience.

## Features

- 🔍 **Find Jobs:** Search and filter jobs by title, location, type, and more.
- 📝 **Apply for Jobs:** Submit applications with resume, LinkedIn, and portfolio links.
- 💼 **Recruiter Dashboard:** Post, edit, and manage job listings.
- ⭐ **Trending & Featured Jobs:** Highlighted jobs and companies on the homepage.
- 👤 **User Profile:** View and manage your profile, see application history.
- 📈 **Career Tips & Company Highlights:** Helpful resources and featured employers.
- 🔒 **Authentication:** Secure sign up, sign in, and password reset with Firebase Auth.
- 🎨 **Modern UI:** Built with Tailwind CSS, daisyUI, and Lottie animations.
- 🌙 **Dark/Light Theme Toggle**

## Tech Stack

- **React 19**
- **Tailwind CSS 4** & **daisyUI**
- **Firebase** (Auth & Hosting)
- **React Router 7**
- **Axios** (API requests)
- **Lottie React** (Animations)
- **SweetAlert2** (Alerts & Modals)
- **React Icons**
- **Motion** (Animations)

## Getting Started

### Prerequisites

- Node.js & npm installed

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/career-code.git
   cd career-code
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Firebase:**
   - Create a Firebase project and add your config to `src/firebase/firebase.init.js`.
   - Enable Email/Password authentication in Firebase Auth.
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Visit:** [http://localhost:5173](http://localhost:5173)

## Folder Structure

```
src/
  components/      # Reusable UI and page components
  pages/           # Main route pages (Home, FindJobs, AddJob, etc.)
  api/             # API utilities
  assets/          # Images, lottie files, etc.
  hooks/           # Custom React hooks
  provider/        # Context providers
  routes/          # Routing setup
  firebase/        # Firebase config
```

## Deployment

- Hosted on [Firebase Hosting](https://career-code-site.web.app/)
- To deploy:
  ```bash
  npm run build
  firebase deploy
  ```

## Credits

- UI/UX: [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/), [LottieFiles](https://lottiefiles.com/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Motion](https://motion.dev/), [Lottie React](https://lottiereact.com/)

## Developer

- [Shihab Uddin](https://www.linkedin.com/in/shihabuddinreal)

---

> Made with ❤️ for modern job seekers and recruiters.
