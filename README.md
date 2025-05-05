# AniWatch

AniWatch is an anime discovery web application built with React, TypeScript, and Vite. It allows users to search for anime, view detailed information about specific anime titles, and explore popular anime.

Live at [https://anime-web.encikshrimp.com/](https://anime-web.encikshrimp.com/)

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Animation**: Lottie React for loading animations
- **UI Components**: Custom components using Radix UI primitives
- **API**: Jikan API (REST API for MyAnimeList)

## 📂 Project Structure

```
src/
├── api/            # API integration with Jikan
├── assets/         # Static assets including Lottie animations
├── components/     # Reusable UI components
│   ├── Anime/      # Anime-specific components
│   │   └── Detail/ # Components for anime detail page
│   ├── Search/     # Search page components
│   └── ui/         # Primitive UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── types/          # TypeScript type definitions
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EncikShrimp/anime-web.git
   cd aniwatch
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`
