# Maso-AU

Welcome to the Maso-AU repository! This project is a modern web application leveraging Firebase for backend services, Vite for build tooling, and various other technologies to create a scalable and maintainable application.

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## About the Project

Maso-AU is designed to be a high-performance, feature-rich web application. The project is built with modern tools and frameworks to ensure it is easy to develop, maintain, and scale.

## Technologies Used

- **Firebase**: Hosting, Firestore, Realtime Database, and Authentication
- **Vite**: Next-generation frontend tooling
- **TypeScript**: Typed JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: Tool for transforming CSS with JavaScript plugins

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Node.js and npm installed on your local machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ThatMasonGuy/maso-au.git
   cd maso-au
   ```

2. **Install NPM packages:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Ensure you have a Firebase project set up.
   - Update the `.firebaserc` and `firebase.json` with your Firebase project details.

### Running the Project

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Deploy to Firebase:**
   ```bash
   npm run deploy
   ```

## Directory Structure
```
maso-au/
├── .firebase/                 # Firebase configuration directory
├── .vscode/                   # VSCode settings
├── public/                    # Public assets
├── src/                       # Source code
├── .firebaserc                # Firebase project configuration
├── .gitignore                 # Git ignore rules
├── database.rules.json        # Firebase Realtime Database rules
├── firestore.indexes.json     # Firestore indexes configuration
├── firestore.rules            # Firestore security rules
├── index.html                 # HTML entry point
├── jsconfig.json              # JavaScript configuration
├── package.json               # NPM dependencies and scripts
├── package-lock.json          # NPM lock file
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Project overview (this file)
```
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Thanks for checking out Maso-AU! If you have any questions or feedback, feel free to open an issue or reach out.