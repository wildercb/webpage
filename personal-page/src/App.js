import React from 'react';
import './styles.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My Personal Website</h1>
      </header>
      <main>
        <div className="three-canvas">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Stars />
            <OrbitControls />
          </Canvas>
        </div>
        <section className="project-list">
          <div className="project-item">
            <h2>Project 1</h2>
            <p>Description of Project 1</p>
          </div>
          <div className="project-item">
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        © 2024 Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
