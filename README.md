# AniWatch

AniWatch is an anime discovery web application built with React, TypeScript, and Vite. It allows users to search for anime, view detailed information about specific anime titles, and explore popular anime.

Live at [https://anime-web.encikshrimp.com/](https://anime-web.encikshrimp.com/)

- **Anime Search**: Search for anime by title with real-time results
- **Popular Anime Listing**: Browse through top-rated anime series
- **Featured Anime Showcase**: Random featured anime on homepage
- **Detailed Anime Pages**: View comprehensive information about each anime including:
  - Synopsis
  - Rating and score
  - Episode count
  - Seasonal information
  - Status
  - Genre tags
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Dark Mode**: Modern dark UI theme for comfortable viewing

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

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🔄 API Integration

The application uses the [Jikan API](https://jikan.moe/), which is an open-source REST API for MyAnimeList. The API integration is handled in the `src/api/jikan.ts` file with the following main functions:

- `searchAnime()` - Search for anime by query
- `fetchPopularAnime()` - Get top-rated anime
- `getAnimeById()` - Get detailed information about a specific anime

## 🧩 Main Components

### Pages

- `SearchPage` - Homepage with search functionality and popular anime listings
- `DetailPage` - Detailed view of a specific anime
- `NotFoundPage` - 404 page for invalid routes

### Feature Components

- `AnimeCard` - Card display for anime in search results
- `FeaturedAnimeHero` - Hero banner for featured anime on homepage
- `SearchBar` - Input for searching anime
- `Pagination` - Navigation between pages of results

## 🎨 Styling and Theme

The app uses a dark theme with a purple accent color scheme. Styling is managed with Tailwind CSS with custom theme variables defined in `src/App.css` and `src/index.css`.

## 📱 Responsive Design

The UI is designed to be responsive across different screen sizes:

- Mobile-friendly cards and layout
- Adaptive grid system
- Flexible components that adjust to viewport width
