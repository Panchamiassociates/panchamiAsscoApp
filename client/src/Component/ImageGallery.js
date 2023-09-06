// frontend/src/components/ImageGallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Component/Resources/StyleSheets/Projects.css'

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the backend API
    async function fetchImages() {
      try {
        const response = await axios.get('http://localhost:3001/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      <div className="image-list">
        {images.map((image) => (
          <div key={image._id} className="image-item w-25">
            <img src={`data:image/png;base64,${image.data}`} alt="Image" className='img_proj' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
