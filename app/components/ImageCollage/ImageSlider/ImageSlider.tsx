import React, { useState } from 'react';
import Modal from 'react-modal';
import './ImageSlider.css'; // Import your styling
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  activeImageIndex: number;
  onClose: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  activeImageIndex,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(activeImageIndex);

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Slider"
      className="image-slider-modal"
      overlayClassName="image-slider-overlay"
    >
      <div className="slider-container">
        <button className="slider-nav prev" onClick={prevImage}>
          &lt;
        </button>
        <Image
          src={images[currentImageIndex]}
          width={500}
          height={500}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <button className="slider-nav next" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </Modal>
  );
};

export default ImageSlider;
