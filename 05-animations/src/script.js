import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#00f580' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// // Animation 1: use delta time
// let time = Date.now();
// const tick = () => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;

//   // Update objects
//   mesh.rotation.y += 0.001 * deltaTime; // use deltaTime to make animation consistent with different frame rates
//   // render
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// };
// tick();

// // Animation 2: use Clock
// const clock = new THREE.Clock();
// const tick2 = () => {
//   const elapsedTime = clock.getElapsedTime();

//   // Update objects
//   //   mesh.rotation.x = elapsedTime * Math.PI * 2 * 0.5;
//   mesh.position.x = Math.sin(elapsedTime);
//   mesh.position.y = Math.cos(elapsedTime);
//   // render
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick2);
// };

// tick2();

// Animation 3: use GSAP library
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 1 });

const tick = () => {
  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
