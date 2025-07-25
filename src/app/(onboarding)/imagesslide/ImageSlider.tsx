// import React, { useState, useEffect } from 'react';
// import Image from 'next/image'; // Import the Next.js Image component
// import './ImageSlider.css'; // Import the CSS file for styling

// // Import your images from the Assets folder
// // These imports will give you StaticImageData objects in Next.js
// import img1 from './../../Assets/1.jpg';
// import img2 from './../../Assets/2.png';
// import img3 from './../../Assets/3.png';
// // Add more imports for each image you have:
// // import img4 from '../../Assets/4.jpg';
// // import img5 from '../../Assets/5.jpg';

// const ImageSlider = () => {
//   // Store all your imported images in an array
//   const images = [
//     img1,
//     img2,
//     img3,
//     // Add img4, img5, etc., here
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideInterval = 3000; // Time in milliseconds (e.g., 3000ms = 3 seconds)

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Calculate the next index, looping back to 0 if we reach the end
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, slideInterval);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, [images.length, slideInterval]); // Re-run effect if images or interval change

//   // Optional: Manual navigation functions (useful for user control)
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   if (images.length === 0) {
//     return <div className="image-slider-container">No images to display.</div>;
//   }

//   return (
//     <div className="image-slider-container">
//       <button className="slider-button prev" onClick={goToPrevious}>
//         &#10094; {/* Left arrow */}
//       </button>
//       <Image
//         src={images[currentIndex]} // Pass the StaticImageData object directly
//         alt={`Slide ${currentIndex + 1}`}
//         className="slider-image" // You can still use your CSS class
//         // IMPORTANT: You MUST provide width and height props for next/image
//         // You can use fixed values, or if your image imports contain them, use:
//         // width={images[currentIndex].width}
//         // height={images[currentIndex].height}
//         width={800} // Example width in pixels, adjust as needed
//         height={500} // Example height in pixels, adjust as needed
//         // For more advanced responsive behavior, consider 'fill' prop with 'sizes'
//         // fill={true}
//         // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       />
//       <button className="slider-button next" onClick={goToNext}>
//         &#10095; {/* Right arrow */}
//       </button>

//       {/* Optional: Dots for direct navigation */}
//       <div className="slider-dots">
//         {images.map((_, dotIndex) => (
//           <span
//             key={dotIndex}
//             className={`dot ${dotIndex === currentIndex ? 'active' : ''}`}
//             onClick={() => setCurrentIndex(dotIndex)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;


import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import './ImageSlider.css'; // Keep the CSS for dots

// Import your images from the Assets folder
import img1 from './../../Assets/1.jpg';
import img2 from './../../Assets/2.png';
import img3 from './../../Assets/3.jpeg';
// Add more imports for each image you have:
// import img4 from '../../Assets/4.jpg';
// import img5 from '../../Assets/5.jpg';

const ImageSlider = () => {
  const images = [
    img1,
    img2,
    img3,
    // Add img4, img5, etc., here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000; // Time in milliseconds (e.g., 3000ms = 3 seconds)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index, looping back to 0 if we reach the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length, slideInterval]); // Re-run effect if images or interval change

  // Styles directly applied to the container for requested changes
  const sliderContainerStyle = {
    position: 'relative', // Needed for layout="fill" on Image component
    width: '80%',
    maxWidth: '1200px', // Set the maximum width as requested
    height: '300px',    // Set the fixed height as requested
    margin: '20px auto', // Center the slider
    overflow: 'hidden',  // Ensure content stays within rounded corners
    borderRadius: '10px', // Apply rounded corners
    backgroundColor: 'transparent', // Make the background transparent to merge
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: You can keep or remove shadow
  };

  if (images.length === 0) {
    return (
      <div style={sliderContainerStyle}>
        <p style={{ color: '#555', textAlign: 'center', lineHeight: '600px' }}>
          No images to display.
        </p>
      </div>
    );
  }

  return (
    <div style={sliderContainerStyle}>
      <Image
        src={images[currentIndex]} // Pass the StaticImageData object directly
        alt={`Slide ${currentIndex + 1}`}
        // Use layout="fill" to make the image fill its parent container
        // The parent container (div with sliderContainerStyle) must have a defined height.
        layout="fill"
        // CHANGE: Use objectFit="cover" to make the image fill the container,
        // preserving aspect ratio but potentially cropping parts of the image.
        // This ensures the rectangular form is always covered without empty space.
        objectFit="cover"
        // No explicit width/height props here because layout="fill" handles it
        // based on the parent's dimensions.
      />

      {/* Dots for direct navigation (can be hidden with CSS if not wanted) */}
      <div className="slider-dots">
        {images.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${dotIndex === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
