import * as THREE from 'three';

console.log(THREE);

// ------------ Canvas ------------ //
const canvas = document.querySelector('canvas.webgl');

// ------------ Scene ------------ //
const scene = new THREE.Scene();

// ------------ Object ------------ //
// const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth of box
// // const material = new THREE.MeshBasicMaterial({ color: '#1fc2df', wireframe: true });
// const material = new THREE.MeshBasicMaterial({ color: '#ff8827' });
// const mesh = new THREE.Mesh(geometry, material);

const group = new THREE.Group();
group.position.y = -1;
group.scale.y = 1.25;
group.rotation.y = 0.4;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: '#a6a6a6' })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: '#4adc01' })
);
group.add(cube2);
cube2.position.x = 2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: '#da38b2' })
);
group.add(cube3);
cube3.position.x = -1;
cube3.position.y = 1;

// // --------------------------- POSITION --------------------------- //
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// // 👆 same same 👇
// mesh.position.set(0.7, -0.6, 1);
// scene.add(mesh);

// // --------------------------- SCALE --------------------------- //
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
// // 👆 same same 👇
// mesh.scale.set(2, 0.5, 0.5);

// // --------------------------- ROTATION --------------------------- //
// mesh.rotation.reorder('YXZ');
// mesh.rotation.y = Math.PI * 0.25; // radians!! pi (Math.PI)
// mesh.rotation.x = Math.PI * 0.25;

// ------------------------------------------------------------- //

// console.log('🔥', mesh.position.length()); // distance between centre of scene and our object position
// console.log('🔥🔥', mesh.position.distanceTo(new THREE.Vector3(0, 1, 2))); // distance between object and random new vector

// mesh.position.normalize(); // takes the vector length and reduces to 1
// console.log('🌱', mesh.position.length());

// ------------ Axes Helper ------------ //
const axesHelper = new THREE.AxesHelper(); // default 1 (unit), could do `.AxesHelper(2)` to lengthen the axes
scene.add(axesHelper);

// ------------ Camera ------------ //

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

const fieldOfView = 75; // 75 is actually huge
const aspectRatio = sizes.width / sizes.height;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio);
camera.position.z = 3.25;
camera.position.y = 0.2;
camera.position.x = 0.5;
scene.add(camera);

// console.log('🔥🔥🔥', mesh.position.distanceTo(camera.position)); // distance between object and camera

// camera.lookAt(new THREE.Vector3(-2, 0, 0)); // provide a vector 3 (coordinates) to look at
// camera.lookAt(mesh.position); // look at the centre of my object

// ------------ Renderer ------------ //
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height); // GOTTA set the size here!!!

renderer.render(scene, camera); // scene from the camera's POV
