import React, { useState } from 'react';
import './ImageCollage.css'; // Import your styling
import ImageSlider from './ImageSlider/ImageSlider';
import Image from "next/image";

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

  const visibleImages = 3; // Number of images visible in the collage
  const hiddenImagesCount = images.length - visibleImages;

  return (
    <div className="image-collage">
      <div className="image-grid">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index} className="image-item-container">
            <Image
              src={`${process.env.PUBLIC_URL}/${image}`}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
              className="image-item"
            />
            {index === visibleImages - 1 && hiddenImagesCount > 0 && (
              <div className="hidden-images-count">+{hiddenImagesCount}</div>
            )}
          </div>
        ))}
      </div>
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
