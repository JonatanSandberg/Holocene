import React, { useEffect, useState } from 'react'; 
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import { useFavorites } from '../context/FavoritesContext'; 
import '../styles/TribeCard.css';

// Import the local images
import apacheImage from '../assets/apache.jpg';
import basqueImage from '../assets/basque.jpg';
import garifunaImage from '../assets/garifuna.jpg';

const TribeArticle: React.FC = () => {
  const { tribeName } = useParams<{ tribeName: string }>();
  const [article, setArticle] = useState<string>('');
  const [fullArticle, setFullArticle] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isFullArticleLoaded, setIsFullArticleLoaded] = useState(false);
  const navigate = useNavigate();

  const { favorites, setFavorites, removeFavorite } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(false);

  const tribeTitlesMap: { [key: string]: string } = {};

  const localImages: { [key: string]: string } = {
    Apache: apacheImage,
    Basques: basqueImage,
    Garifuna: garifunaImage,
  };

  const cleanArticleText = (text: string) => {
    const sectionsToRemove = [
      '== See also ==',
      '== Notes ==',
      '== References ==',
      '== External links ==',
      '== Bibliography ==',
      '== Footnotes ==',
    ];

    let cleanedText = text;
    sectionsToRemove.forEach(section => {
      const regex = new RegExp(`\\n*${section}\\n.*?(?=\\n==|$)`, 'gs');
      cleanedText = cleanedText.replace(regex, '');
    });

    return cleanedText.trim();
  };

  const fetchTribeArticle = async (name: string) => {
    const title = tribeTitlesMap[name] || name;
    const cachedData = localStorage.getItem(title);

    if (cachedData) {
      const { article, imageUrl } = JSON.parse(cachedData);
      setArticle(article);
      setImageUrl(imageUrl || localImages[name] || '');
    } else {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${title}&prop=extracts|pageimages&exintro&explaintext&origin=*&pithumbsize=500`
        );
        const data = await response.json();
        const pages = Object.values(data.query.pages);
        const page = pages[0];

        if (page && page.extract) {
          const articleText = page.extract.split('\n').filter(paragraph => paragraph.trim() !== '').join('\n\n');
          setArticle(articleText);
          localStorage.setItem(title, JSON.stringify({ article: articleText, imageUrl: page.thumbnail?.source || '' }));
        } else {
          setArticle('Ingen information tillgänglig.');
        }

        if (page.thumbnail) {
          setImageUrl(page.thumbnail.source);
        } else {
          setImageUrl(localImages[name] || '');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        setArticle('Kunde inte hämta artikel.');
        setImageUrl(localImages[name] || '');
      }
    }
  };

  const fetchFullArticle = async (name: string) => {
    const title = tribeTitlesMap[name] || name;

    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${title}&prop=extracts&explaintext&origin=*`
      );
      const data = await response.json();
      const pages = Object.values(data.query.pages);
      const page = pages[0];

      if (page && page.extract) {
        const cleanedArticle = cleanArticleText(page.extract);
        setFullArticle(cleanedArticle);
        setIsFullArticleLoaded(true);
      } else {
        setFullArticle('Ingen information tillgänglig.');
      }
    } catch (error) {
      console.error('Error fetching full article:', error);
      setFullArticle('Kunde inte hämta fullständig artikel.');
    }
  };

  useEffect(() => {
    if (tribeName) {
      fetchTribeArticle(tribeName);
      const isFavorite = favorites.some((tribe) => tribe.name === tribeName);
      setIsFavorited(isFavorite);
    }
  }, [tribeName, favorites]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFavorite(tribeName);
    } else {
      setFavorites([...favorites, { name: tribeName, imgUrl: imageUrl }]);
    }
    setIsFavorited(!isFavorited);
  };

  const handleLearnMoreClick = () => {
    fetchFullArticle(tribeName!);
  };

  const handleLearnLessClick = () => {
    setIsFullArticleLoaded(false);
  };

  return (
    <div className="article-parent-container"> {/* Updated Parent Container */}
      <div className="article-container">
        <button onClick={handleBackClick} className="back-button">Tillbaka</button>
        <button className={`favorite-button ${isFavorited ? 'favorited' : ''}`} onClick={handleFavoriteToggle}>
          {isFavorited ? '❤️' : '🤍'}
        </button>
        <h2 className="article-title">{tribeName}:</h2>
        {imageUrl && (
          <img src={imageUrl} alt={`Bild på ${tribeName}`} className="article-image" />
        )}
        <div className="article-text">
          {(isFullArticleLoaded ? fullArticle : article).split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {!isFullArticleLoaded ? (
          <button onClick={handleLearnMoreClick} className="learn-more-button">
            Learn more
          </button>
        ) : (
          <button onClick={handleLearnLessClick} className="learn-less-button">
            Learn less
          </button>
        )}
        {/* Link to the weather graph page */}
        <Link to={`/tribe/${tribeName}/weather`} className="weather-graph-link">
          View impact of Climate Changes
        </Link>
      </div>
    </div>
  );
  
  
};

export default TribeArticle;






























