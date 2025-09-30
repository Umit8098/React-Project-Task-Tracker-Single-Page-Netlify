
<h1 align="center">Task Tracker</h1>

<div align="center">
  <h3>
    <a href="https://umit8098.github.io/React-Project-Tutorial-FullStack/">
      Demo
    </a>
     | 
    <a href="https://umit8098.github.io/React-Project-Tutorial-FullStack/">
      Project
    </a>
  </h3>
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Description](#description)
- [Features](#features)
- [API](#api)
- [Project Skeleton](#project-skeleton)
- [Built With](#built-with)
- [How To Use](#how-to-use)
- [About This Project](#about-this-project)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## Overview

A simple CRUD (Create, Read, Update, Delete) application built with **React** and **Axios**.
Users can add, edit, delete and list tutorials.

Built with **React (Frontend)** + **Django REST Framework (Backend API on PythonAnywhere)**.

![tutorial gif](tutorial.gif)

---

## Description

This project is a basic CRUD application where users can manage tutorials.  
It demonstrates how to integrate React with a REST API using `axios` for data fetching and modification.  
The backend is hosted on [PythonAnywhere](https://www.pythonanywhere.com/).  

---

## Features
- 📌 List all tutorials from API  
- ➕ Add a new tutorial  
- ✏️ Edit an existing tutorial (update task and description)  
- ❌ Delete a tutorial  
- 🔄 Real-time refresh after each operation (without page reload)  
- 🖼️ Modal-based edit form  
  
---

## API

The project communicates with a REST API hosted on **PythonAnywhere**.
**Base URL:**

```bash
https://umit8101.pythonanywhere.com/todo/
```

**Endpoints:**

* `GET /todo/` → Fetch all tutorials
* `POST /todo/` → Create a new tutorial
* `PUT /todo/:id/` → Update a tutorial
* `DELETE /todo/:id/` → Delete a tutorial

---

## Project Skeleton

```
Full Stack - Tutorial App
|
|----readme.md   
SOLUTION
├── public
│     └── index.html
│  
├── src
│    ├── components
│    │       ├── AddTutorial.jsx
│    │       ├── EditTutorial.jsx
│    │       └── TutorialList.jsx 
│    │            
│    ├── pages
│    │       └── Home.jsx
│    │
│    ├── App.js
│    ├── App.scss
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

---

## Built With

* [React](https://react.dev/)
* [Axios](https://axios-http.com/)
* [Bootstrap 5](https://getbootstrap.com/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Django REST Framework (API)](https://www.django-rest-framework.org/)


---

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/), and a package manager (`yarn` or `npm`) installed on your computer.

```bash
# Clone this repository
$ git clone https://github.com/Umit8098/React-Project-Task-Tracker-Single-Page.git

# Navigate into the project folder
$ cd React-Project-Task-Tracker-Single-Page

# Install dependencies
$ yarn  
$ yarn start

# or using npm
$ npm install
$ npm start
```

---

## About This Project

* Built for educational purposes.
* Demonstrates CRUD operations in React and REST API integration.
* Showcases state management and form handling using React hooks.

---

## Acknowledgements
- [Clarusway](https://clarusway.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Bootstrap](https://getbootstrap.com/)

---

## Contact

<!-- - Website [your-website.com](https://{your-web-site-link}) -->
- GitHub [@Umit8098](https://github.com/Umit8098)

- Linkedin [@umit-arat](https://linkedin.com/in/umit-arat/)
<!-- - Twitter [@your-twitter](https://{twitter.com/your-username}) -->
