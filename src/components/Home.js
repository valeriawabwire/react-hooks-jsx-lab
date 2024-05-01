import React from "react";
import { name, city } from "../data/data.js";
import { image } from "../data/data.js"; // Importing image variable from data.js
import { render, screen } from '@testing-library/react';
import Home from './Home'; // Import the Home component

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>Your {name} is a Web Developer from Your {city}</h1>
      <img src={image} alt="I made this" /> {/* Use the img tag instead of image */}
      test('the h1 has a an inline style attribute with a color of firebrick', () => {
  render(<Home />);
  const h1 = screen.getByText(/is a Web Developer from/i);
  
  expect(h1).toHaveStyle('color: firebrick');
});
   
    </div>
  );
}

export default Home;