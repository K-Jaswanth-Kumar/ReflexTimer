# Reflex Timer

**Reflex Timer** is a fun and challenging game built with **React, Refs, and Portals** using **Vite**. The goal is to stop the timer as close as possible to the target time. Test your reflexes and precision!

## Features

- Multiple difficulty levels: **1s, 5s, 10s, 15s**
- Uses **React Refs** for managing input and timers efficiently
- **Portals** for rendering modals outside the main DOM hierarchy
- Dynamic scoring system based on accuracy
- Stylish UI with animations

---

## Project Structure

```
k-jaswanth-kumar-reflextimer/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    └── components/
        ├── Player.jsx
        ├── ResultModal.jsx
        └── TimerChallenge.jsx
```

### Main Components

- **`Player.jsx`** → Allows users to enter their name
- **`TimerChallenge.jsx`** → Handles the countdown timer logic
- **`ResultModal.jsx`** → Displays the result using React Portals

---

## Installation & Setup

1. Clone the repository

```sh
git clone https://github.com/your-username/reflex-timer.git
cd reflex-timer
```

2. Install dependencies

```sh
npm install
```

3. Start the development server

```sh
npm run dev
```

4. Open your browser and go to

```
http://localhost:5173
```

---

## How to Play?

1. Enter your **name** and click **Set Name**
2. Choose a **challenge** (1s, 5s, 10s, 15s)
3. Click **Start** to begin the countdown
4. Click **Stop** as close to the target time as possible
5. See your **score** in the popup modal

---

## Screenshots

![alt text](https://github.com/K-Jaswanth-Kumar/ReflexTimer/blob/main/Screenshot/image.png?raw=true)

---
