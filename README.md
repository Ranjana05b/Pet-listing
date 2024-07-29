# Pet Listing App

A simple React-based application that allows users to search for pets by animal type, city, and breed. The app fetches pet data from an external API and displays the results in a user-friendly interface.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Running the Project](#running-the-project)
- [Dependencies](#dependencies)
  
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/ranjana05b/pet-listing.git

2. Navigate to the project directory:
   cd pet-listing
   
3. Install the necessary npm packages:
 npm install

### Project Structure
pet-listing/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── PetList.jsx
│   │   └── SearchForm.jsx
│   ├── context/
│   │   └── PetContext.jsx
│   ├── pages/
│   │   └── PetDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md

- public/: Contains the HTML template.
- src/: Contains the source code for the application.
  - components/: Contains reusable components.
  - context/: Contains the context API for state management.
  - pages/: Contains the main pages of the app.
  - App.jsx: The main app component.
  - index.css: Global styles.
  - index.js: Entry point of the application.

### Design Decisions
- React Context API: Used for state management to handle pet data across the app.

- Material-UI: Used for styling components and providing a responsive layout.

- React Router: Used for navigation between the home page and pet details page.

- Error Boundaries: Implemented to catch and handle errors gracefully.

### Running the Project
 npm start

### Dependencies
- React
- React Router
- Material-UI
- Axios



   
