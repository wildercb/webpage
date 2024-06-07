import React from 'react';
import './styles.scss';
import ThreeCanvas from './components/ThreeCanvas';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Hello</h1>
      </header>
      <main>
        <ThreeCanvas />
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
        © 2024 
      </footer>
    </div>
  );
}

export default App;
