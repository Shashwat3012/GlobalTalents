import React, { useState } from "react";


const cards = [
    {
  
    title:"title 1",
    imageSrc : "/",
    description :"describe"
    },
    {
        title:"title 2",
        imageSrc : "/",
        description :"describe"
    }
  ];

const CardCarousel = ( cards ) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handlePrevCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  
  

  return (
    <div className="card-carousel">
      <button onClick={handlePrevCard}>&lt;</button>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === activeCardIndex ? "active" : ""}`}
          >
            <img src={card.imageSrc} alt={card.imageAlt} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNextCard}>&gt;</button>
    </div>
  );
};

export default CardCarousel;
