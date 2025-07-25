# 🧠 Codux

**Codux** is a platform where developers can **showcase their projects**, share tech stacks, and explore what others are building. Built using **React + TypeScript** (frontend) and **Django REST Framework** (backend).

---

## 🚀 Features

- 🧑‍💻 Developer authentication (Signup/Login)
- 📝 Submit your own projects
- 🔍 Browse public project showcase
- 💡 Tech stack and live links
- 🔐 Protected routes
- 🌐 REST API using Django

---

## 🏗️ Tech Stack

| Frontend           | Backend               |
|--------------------|------------------------|
| React + TypeScript | Django + DRF           |
| React Router       | Django REST Framework  |
| Vite               | Djoser + Token Auth    |
| Tailwind CSS *(optional)* | CORS + TokenAuth     |

---

## 📁 Folder Structure

```
codux/
├── backend/              ← Django Backend
│   └── api/              ← Auth + Project API
│
└── frontend/             ← React Frontend
    └── src/
        ├── pages/
        ├── components/
        ├── utils/api.ts
        └── types/
```

---

## ⚙️ Getting Started

### 🔧 Backend Setup (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

> API runs at: `http://localhost:8000/api/`

---

### 💻 Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

> React runs at: `http://localhost:5173/`

---

## 🔐 API Endpoints

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| POST   | `/api/signup/`      | Register new user      |
| POST   | `/api/login/`       | Get auth token         |
| GET    | `/api/projects/`    | List all projects      |
| POST   | `/api/projects/`    | Submit a new project   |

---

## 🗃️ .env Setup (Optional)

For managing API base URL in React:

```
VITE_API_URL=http://localhost:8000/api
```

Then in `api.ts`:

```ts
const BASE_URL = import.meta.env.VITE_API_URL;
```

---

## 🧪 Future Improvements

- ⭐ Like and bookmark system  
- 🗂️ Project filtering by stack
- 📈 Profile analytics for developers
- 🖼️ Upload project thumbnails
- 🌍 Deployment on Vercel + Render

---

## 📄 License

MIT License. Open-source and free to use.

---

## 👨‍💻 Made with ❤️ by [YourName]

> Replace with your GitHub or portfolio link.# Codux
