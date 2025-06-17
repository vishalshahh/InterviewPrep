# 🎤 InterviewPrep

**InterviewPrep**: A job interview preparation platform powered by **Vapi AI Voice Agents**.

![InterviewPrep UI](https://github.com/vishalshahh/InterviewPrep/blob/main/public/Screenshot%202025-06-17%20072826.png)

---

## 📋 Table of Contents

- 🤖 [Introduction](#-introduction)  
- ⚙️ [Tech Stack](#-tech-stack)  
- 🔋 [Features](#-features)  
- 🤸 [Quick Start](#-quick-start)  
- 🖼️ [Screenshots](#️-screenshots)  

---

## 🤖 Introduction

Built with **Next.js** for the user interface and backend logic, **Firebase** for authentication and data storage, styled with **TailwindCSS**, and powered by **Vapi AI voice agents**, InterviewPrep is designed to help you integrate conversational AI models into your apps.

This platform offers a sleek and modern experience for job interview preparation through simulated, interactive voice-based interviews.

---

## ⚙️ Tech Stack

- **Next.js**
- **Firebase**
- **Tailwind CSS**
- **Vapi AI**
- **shadcn/ui**
- **Google Gemini**
- **Zod**

---

## 🔋 Features

👉 **Authentication**: Sign up and sign in using email/password authentication with Firebase.  
👉 **Create Interviews**: Generate interviews powered by Vapi voice agents and Gemini AI.  
👉 **AI Feedback**: Receive real-time voice-based interview feedback from AI.  
👉 **Modern UI/UX**: Sleek interface powered by TailwindCSS and shadcn/ui.  
👉 **Interview Page**: Real-time interview flow with transcript generation and evaluation.  
👉 **Dashboard**: Track and manage past interviews.  
👉 **Responsive Design**: Fully mobile-friendly and adaptive UI.  
👉 **Scalable Architecture**: Clean and reusable code structure for future extension.

---

## 🤸 Quick Start

Follow these steps to set up the project locally:

### ✅ Prerequisites

- Git
- Node.js
- npm

### 🔁 Cloning the Repository & Run the Project

```bash
git clone https://github.com/vishalshahh/InterviewPrep.git
cd InterviewPrep
npm run dev
Open your browser at http://localhost:3000
```

### 📦 Install Dependencies
```bash
npm install
```

### 🔐 Set Up Environment Variables
Create a .env.local file in the root of the project and add:
```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
Replace placeholder values with your actual credentials.
```

