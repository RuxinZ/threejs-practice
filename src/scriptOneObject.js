import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Position
mesh.position.set(2, 0, 1);
// console.log(mesh.position.length());

// Scale
// mesh.scale.x = 2;
mesh.scale.set(3, 0.5, 1);

// Rotation
// mesh.rotateY = 60; // degree
mesh.rotation.reorder('YXZ'); // need to set it first
mesh.rotation.y = Math.PI * 0.5;
mesh.rotation.x = Math.PI * 0.5;

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = 1;
scene.add(camera);

camera.lookAt(mesh.position);

// console.log(mesh.position.distanceTo(camera.position));

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
