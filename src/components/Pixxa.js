import React, { useState, useEffect } from 'react';
import styles  from "../css/Pixxxa.css";

function Pixxa() {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('s');
    if (searchQuery && (searchQuery.toLowerCase() === "cats" || searchQuery.toLowerCase() === "dogs")) {
      fetch(`https://pixabay.com/api/?key=43766795-c166dc99885636d57eab42a9d&q=${encodeURIComponent(searchQuery)}&image_type=photo&pretty=true`)
        .then(response => response.json())
        .then(data => {
          setImages(data.hits.slice(0, 4)); 
        });
    } else {
      setImages([]); 
    }
  }, [window.location.search]);

  const handleSearch = () => {
    if (input.toLowerCase() === "cats" || input.toLowerCase() === "dogs") {
      window.location.search = `?s=${input.toLowerCase()}`;
    } else {
      alert("Please search for 'cats' or 'dogs' only.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for images (cats or dogs only)"
      />
      <button onClick={handleSearch}>Search</button>
      <div className={styles.imageContainer}>
        {images.map((img, index) => (
          <a href={img.largeImageURL} target="_blank" key={index} className={styles.imageLink}>
            <img src={img.webformatURL} alt={`result-${index}`} className={styles.image} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Pixxa;
