import * as THREE from 'three';
import gsap from 'gsap';
console.log(THREE);
console.log(gsap);

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
camera.position.z = 3;
// camera.position.x = 1;
scene.add(camera);

// ------------ Renderer ------------ //
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height); // GOTTA set the size here!!!

// ------------------------------------------------------------ //
// ------------------------ ANIMATIONS ------------------------ //
// ------------------------------------------------------------ //

// ? 1. Adjust frame rate

// ~ ~ ~ ~ ~ ~ ~ ~ ~ Using time delta (milliseconds) ~ ~ ~ ~ ~ ~ ~ ~ ~ //
// let startTime = Date.now();

// const tick = () => {
//   // Time
//   const currentTime = Date.now();
//   const delta = currentTime - startTime;
//   startTime = currentTime;
//   console.log(delta);

//   // Update objects
//   mesh.rotation.y += 0.002 * delta; // now, we've made this rotate at the same rate regardless of the Frame Rate on whichever browser it's showing up on!
//   // mesh.rotation.x += 0.0002 * delta;

//   // Render
//   renderer.render(scene, camera); // scene from the camera's POV

//   window.requestAnimationFrame(tick);
// };

// tick();

// ~ ~ ~ ~ ~ ~ ~ ~ ~ Using Clock (seconds) ~ ~ ~ ~ ~ ~ ~ ~ ~ //
const clock = new THREE.Clock();

const tick = () => {
  {
    // Clock
    const elapsedTime = clock.getElapsedTime();
    // console.log(elapsedTime);

    // Update objects
    // mesh.rotation.y = elapsedTime; // taking the value and putting it into the rotation
    // mesh.position.y = Math.sin(elapsedTime);
    // mesh.position.x = Math.cos(elapsedTime);
    // camera.position.y = Math.sin(elapsedTime);
    // camera.position.x = Math.cos(elapsedTime);
    // camera.lookAt(mesh.position);

    // Render
    renderer.render(scene, camera); // scene from the camera's POV

    window.requestAnimationFrame(tick);
  }
};

tick();

// ? 2. GSAP

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 }); // move to the right
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 }); // move back to the centre
