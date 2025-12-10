# Truverizen Technologies Website

This is the source code for the official website of Truverizen Technologies, a company specializing in Intelligent Cloud, Generative AI, and Cybersecurity solutions.

## 🚀 Overview

The project is built as a Single Page Application (SPA) using React 18, tailored with a "Midnight Slate" enterprise theme. It focuses on a clean, modern aesthetic suitable for a high-tech SaaS and consultancy firm.

### Key Technologies

*   **React 18**: Core UI library.
*   **TypeScript**: Type safety and developer experience.
*   **Vite**: Fast build tool and development server.
*   **Tailwind CSS**: Utility-first CSS framework for styling.
*   **Framer Motion**: Animation library for complex UI transitions.
*   **React Router DOM**: Client-side routing.
*   **Lucide React**: Iconography.

## 📂 Project Structure

```
/
├── components/         # Reusable UI components
│   ├── demos/          # Interactive demos for product pages (e.g., Tara, Safety)
│   ├── ...             # Header, Footer, Hero, etc.
├── context/            # React Context API (Contact Modal state)
├── data/               # Static data files (text content, configurations)
├── layouts/            # Page layouts (MainLayout)
├── pages/              # Route components (Home, About, Services, etc.)
├── types/              # TypeScript interfaces and definitions
├── App.tsx             # Main application entry point with Routing
├── index.html          # HTML entry point
├── index.tsx           # React DOM mount point
└── tailwind.config.js  # Tailwind configuration (colors, animations)
```

## 🛠️ Setup and Installation

1.  **Clone the repository** to your local machine.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will typically run on `http://localhost:5173`.

## 🎨 Theme & Customization

The project uses a custom "Midnight Slate" theme defined in `tailwind.config.js` (embedded in `index.html` for this environment).

*   **Backgrounds**: `slate-950` (#020617) is the primary background color.
*   **Surfaces**: `slate-900` (#0f172a) is used for cards and sections.
*   **Accents**: Indigo (#6366f1) and Purple (#a855f7) are used for primary actions and gradients.

### Fonts
The application uses **Manrope** (Sans), **Space Grotesk** (Display), and **Inter** (Body), loaded via Google Fonts.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized HTML, CSS, and JavaScript files ready for deployment.

## 🖼️ Assets

Images and logos are referenced as URLs. To update the main logo, please refer to `ASSETS.md`.

## 📄 Pages

*   **Home**: Introduction, Philosophy, and Service overview.
*   **Services**: Cloud, AI, and Security detailed breakdowns.
*   **Products**: Dedicated pages for TARA, Cloud Manager, and Dot Anomaly.
*   **Industries**: Solutions tailored for BFSI, Healthcare, Retail, etc.
*   **About**: Company story, mission, and vision.
*   **Careers**: Job openings and culture.
*   **Platform Dashboard**: A simulated dashboard view for the Cloud Manager product.

---
© Truverizen Technologies. All rights reserved.
