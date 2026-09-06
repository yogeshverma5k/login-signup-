# login-signup-
# Login & Sign Up Form (React + Vite)

A modern, responsive, and secure **Login and Sign Up application** built using **React** and **Vite**, deployed seamlessly via GitHub Actions. This project uses browser **LocalStorage** to securely retain user registration details without any backend database.

## ✨ Features

- **Standard Heading UI:** Clean and generic "Login" and "Sign Up" title transitions.
- **Local Storage Database:** Saves registration data directly inside the browser's memory, ensuring persistence even after a page refresh.
- **Premium Visibility Toggle:** An official SVG-based eye button (`SHOW` / `HIDE`) integrated seamlessly inside the password field.
- **Mobile First Design:** Fully responsive layout built with custom modern CSS, optimized for iPhones and other mobile devices.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Custom Vanilla CSS3
- **Deployment:** GitHub Actions & GitHub Pages

## 📁 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml        # Automated deployment workflow
├── src/
│   ├── App.jsx           # Main logic, Forms, and Eye Button integration
│   ├── index.css         # Premium and responsive design styles
│   └── main.jsx          # React DOM entry point
├── index.html            # Core HTML template
├── package.json          # Node dependencies and scripts
└── vite.config.js        # Vite configurations
```

## 🚀 How It Works

1. **Sign Up:** Enter an email and password. The application calls `localStorage.setItem()` to store your data securely in your local browser storage.
2. **Login:** Enter your registered credentials. The application fetches the values using `localStorage.getItem()` and authenticates instantly.
3. **Password Toggle:** Click on the sleek eye icon to dynamically switch the field type between `password` and `text`.

