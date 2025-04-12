import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = '49713485-45e8c863d7977aa7b146a2ebb'; // Replace with your Pixabay API key

const Home = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [noImagesFound, setNoImagesFound] = useState(false);
  const navigate = useNavigate(); // Use navigate for page navigation

  const searchImages = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=25`);
      const data = await res.json();
      
      if (data.hits.length === 0) {
        setNoImagesFound(true); 
      } else {
        setNoImagesFound(false);
        setImages(data.hits.slice(0, 25)); 
      }
    } catch (err) {
      console.error('Error fetching from Pixabay:', err);
    }
  };

  const handleAddCaption = (imageURL, caption) => {
    // Navigate to the canvas page and pass the image URL and caption as state
    navigate('/canvas', { state: { imageUrl: imageURL, caption: caption } });
  };

  return (
    <div>
      <input 
        type="text" 
        className='search' 
        placeholder="Search images..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='searchButton' onClick={searchImages}>Search</button>

      <hr className='line' />

      {noImagesFound ? (
        <div className="no-images-message">
          <h2>No images found</h2>
        </div>
      ) : (
        <div className="gallery">
          {images.length === 0 ? (
            <p className='alt'>Search for images above</p>
          ) : (
            images.map((img) => (
              <div className="img" key={img.id}>
                <img 
                  src={img.webformatURL} 
                  alt={img.tags} 
                  className='image' 
                />
                <button
                  className='captionButton' 
                  onClick={() => handleAddCaption(img.webformatURL, img.tags)} target="_blank"
                >
                  Add Caption
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
