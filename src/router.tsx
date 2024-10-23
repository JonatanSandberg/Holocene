import { createBrowserRouter, RouteObject } from 'react-router-dom';
import TribeGlobe from './components/TribeGlobe';
import TribeArticle from './components/TribeArticle';
import WeatherGraphPage from './pages/WeatherGraphPage';
import Favorites from './pages/Favorites';
import NotFoundPage from './pages/NotFound';
import App from './App';
import About from './pages/About';
import QuizPage from './pages/QuizPage';
import { useParams } from 'react-router-dom';

const TribeRoute: React.FC = () => {
  const { tribeName } = useParams<{ tribeName: string }>();
  return (
    <>
      <TribeArticle />
    </>
  );
};

export const router = createBrowserRouter<RouteObject>([
  {
    element: <App />,
    path: '/',
    children: [
      {
        index: true,
        element: <TribeGlobe onTribeClick={(tribeName) => console.log(`Tribe clicked: ${tribeName}`)} />,
      },
      {
        path: 'tribe/:tribeName',
        element: <TribeRoute />,
      },
      {
        path: 'tribe/:tribeName/weather',
        element: <WeatherGraphPage />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);











