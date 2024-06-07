import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedPlanets = ({ planets }) => {
  const planetsRef = useRef([]);

  useFrame(() => {
    planetsRef.current.forEach((planet) => {
      planet.rotation.x += 0.01;
      planet.rotation.y += 0.01;
    });
  });

  return (
    <>
      {planets.map((planet, index) => (
        <InteractivePlanet
          key={index}
          position={planet.position}
          content={planet.content}
          ref={(el) => (planetsRef.current[index] = el)}
        />
      ))}
    </>
  );
};