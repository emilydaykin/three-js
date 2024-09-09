import * as THREE from 'three';

console.log(THREE);

// ------------ Canvas ------------ //
const canvas = document.querySelector('canvas.webgl');

// ------------ Scene ------------ //
const scene = new THREE.Scene();

// ------------ Object ------------ //
const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth of box

// const material = new THREE.MeshBasicMaterial({ color: '#1fc2df', wireframe: true });
const material = new THREE.MeshBasicMaterial({ color: '#1fc2df' });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// ------------ Camera ------------ //

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

const fieldOfView = 75; // 75 is actually huge
const aspectRatio = sizes.width / sizes.height;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio);
camera.position.z = 2;
// camera.position.x = 1;
scene.add(camera);

// ------------ Renderer ------------ //
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height); // GOTTA set the size here!!!

renderer.render(scene, camera); // scene from the camera's POV
