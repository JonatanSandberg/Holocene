import { createBrowserRouter, RouteObject } from "react-router-dom";
import TribeGlobe from './components/TribeGlobe';
import TribeArticle from './components/TribeArticle';
import WeatherGraphPage from './pages/WeatherGraphPage'; // Import the new page
import Favorites from './pages/Favorites';
import NotFoundPage from './pages/NotFound';
import App from "./App";
import About from './pages/About';
import { useParams } from 'react-router-dom';

// Create a functional component to handle the tribe route
const TribeRoute: React.FC = () => {
  const { tribeName } = useParams<{ tribeName: string }>(); // Extract tribeName from URL params

  return (
    <>
      <TribeArticle />
      {/* Removed WeatherData, as it's integrated into WeatherGraphPage */}
    </>
  );
};

export const router = createBrowserRouter<RouteObject>([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <TribeGlobe onTribeClick={(tribeName) => console.log(`Tribe clicked: ${tribeName}`)} />,
      },
      {
        path: "tribe/:tribeName",
        element: <TribeRoute />,
      },
      {
        path: "tribe/:tribeName/weather", // New route for the weather graph page
        element: <WeatherGraphPage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);









