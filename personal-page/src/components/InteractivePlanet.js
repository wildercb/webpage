import React, { useRef, useState } from 'react';
import { useFrame, TextureLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';

function InteractivePlanet({ position, content, color }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
      {active && (
        <Html position={[0, 0, 1.5]}>
          <div className="content">
            {Array.isArray(content.text) && content.text.map((text, index) => <p key={index}>{text}</p>)}
            {content.images && content.images.map((image, index) => <img key={index} src={image} alt={`Planet content ${index}`} />)}
            {content.videos && content.videos.map((video, index) => <video key={index} src={video} controls />)}
            {content.links && content.links.map((link, index) => <a key={index} href={link} target="_blank" rel="noopener noreferrer">{link}</a>)}
          </div>
        </Html>
      )}
    </mesh>
  );
}

export default InteractivePlanet;