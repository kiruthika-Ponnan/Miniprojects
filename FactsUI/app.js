import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';

const background = (
<img className = 'background'
alt = 'ocean'
src = '/images/ocean.jpg'/>
);

function displayFact(e) {
  
  const selectedAnimal = animals[e.target.alt];
  const randIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[randIndex];
  document.getElementById('fact').innerHTML = funFact;
  
};

const images = []
for(const animal in animals) {
  images.push(
    <img key={animal}
  className='animal'
  alt={animal}
  src={animals[animal].image}
  aria-label={animal}
  role='button'
  onClick={displayFact}/>
  )
};

const showBackground = true;
const animalFacts = (
  <div>
  <h1>{title || 'Click an animal for a fun fact!'}</h1>
  <p id='fact'></p>
  {showBackground && background}
  <div className='animals'>
  {images}
  
  </div>
  </div>
);


root.render(animalFacts);
