import React from 'react';
import Carousel from "./Carousel";
import "./App.css"

const images = [
  "https://i.pinimg.com/736x/b2/a5/bf/b2a5bf123799eabd54f91c05fce92e06.jpg",
  "https://i.pinimg.com/236x/b7/89/fa/b789faf738ce0dca2f4c5de05d4d8957.jpg",
  "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
  "https://i.pinimg.com/236x/e0/38/ed/e038edae252f429bc47753d062e4c549.jpg",
  "https://i.pinimg.com/236x/05/d0/b0/05d0b0906079b7fb0e1d1dbd5fbf5c95.jpg",
  "https://i.pinimg.com/236x/33/d7/8e/33d78e107bb7aea1ab8fdf617ffd6b49.jpg"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Carousel using React and Framer Motion</h1>
      </header>
      <main>
        <Carousel images={images} />
      </main>
    </div>
  );
}
export default App;