# TaskFlow - Smart Todo Manager

## Overview

TaskFlow is a modern and responsive task management application built using React and Material UI.

The project focuses on productivity tracking, reusable component architecture, state management, and responsive user experience.

Tasks are stored using Local Storage, allowing users to retain their data even after refreshing the browser.

## Live Demo

[Deploy Link](https://task-flow-xi-kohl.vercel.app/)

## Screenshots

### Desktop View

![Desktop View](TodoApp\TodoList-project\image\snapshot1.png)

### Mobile View

![Mobile View](TodoApp\TodoList-project\image\snapshot2.png)

## Features

- Add new tasks
- Delete individual tasks
- Mark tasks as completed
- Toggle completed status
- Mark all tasks as completed
- Clear completed tasks
- Add tasks using Enter key
- Progress tracking with progress bar
- Completed and remaining task statistics
- Date selection using Material UI Date Picker
- Local Storage integration
- Fully responsive design
- Mobile, Tablet, and Desktop support
- smooth and clean UI 

## Tech Stack

- React.js
- JavaScript (ES6+)
- Material UI (MUI)
- HTML
- CSS3
- Local Storage API

## React Concepts Implemented

- Functional Components
- Props
- useState
- useEffect
- Event Handling
- Conditional Rendering
- List Rendering using map()
- deleting list-items using filter()
- State Lifting Up
- State Design Pattern
- Reusable Component Architecture
- Local Storage Integration

## Component Architecture

The application is divided into multiple reusable components instead of placing all logic inside a single component.

Components include:

- InputBox
- AddButton
- TodoList
- DeleteButton
- MarkAsDoneButton
- MarkAllDoneButton
- ProgressBar
- ProgressCards
- DatePicker

This improves readability, maintainability, and scalability.

## What I Learned

Through this project I learned:

- React state management
- Component communication using props
- State Lifting Up
- State Design Pattern
- Building reusable components
- Local Storage integration
- Material UI integration
- Responsive UI development
- Debugging React applications

## Challenges Faced

### State Management

Managing updates across multiple components required proper state organization.

### Local Storage Persistence

Tasks were getting lost after refresh.

Solution:
Integrated Local Storage using useEffect.

### Progress Tracking

Progress calculations had to update dynamically.

### Toggle Functionality

Implemented task completion toggling using:

isDone: !todo.isDone

## Future Improvements

- Dark Mode
- Task Categories
- Search Tasks
- Filter Tasks
- Edit Tasks
- Drag and Drop Support
- User Authentication
- Cloud Database Integration

## Installation

```bash
git clone REPOSITORY_URL

cd taskflow

npm install

npm run dev
```

## Author

Tanishqa
(Aspiring Full Stack Developer)