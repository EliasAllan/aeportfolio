
import * as THREE from 'three';
import { useEffect } from "react";
function Secret() {
  useEffect(() => {
    // Initialize scene
    const scene = new THREE.Scene();

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Adjust camera position as needed

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
 
    };

    animate();

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
    // Cleanup
    return () => {
      // Cleanup logic if needed
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return null; // Since the rendering is handled within the effect, return null or an empty component
}



export default Secret;
