import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCollage.css'; // Import your styling
import ImageSlider from './ImageSlider/ImageSlider';

interface ImageCollageProps {
  images: string[];
}

const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseSlider = () => {
    setActiveImageIndex(null);
  };

  return (
    <div className="image-collage">
      <Carousel showStatus={false} showThumbs={false}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <img src={image} alt={`Image ${index + 1}`} className="image-item" 
            style={{ width: '100%', height: '100%' }}/>
          </div>
        ))}
      </Carousel>
      {activeImageIndex !== null && (
        <ImageSlider
          images={images}
          activeImageIndex={activeImageIndex}
          onClose={handleCloseSlider}
        />
      )}
    </div>
  );
};

export default ImageCollage;
