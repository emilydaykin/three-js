# Three.js Learnings

https://threejs.org/

```
npm run dev
```

## 🧙 4 elements
#### Scenes
* like a container we put objects, models, particles, lights etc in
  ```javascript
  const scene = new THREE.Scene()
  ```

#### Objects 
  * primitive geometrics, imported models, particles, lights etc 
  * to have an object, you need a **Mesh** = a visible object (a combination of a geometry - the shape - and a material - how it looks)
    ```javascript
    const geometric = new THREE.BoxGeometry(1, 1, 1) // width, height, depth of box
    const material = new THREE.MeshBasicMaterial({ color: '#3cbbf5d' });
  
    const mesh = new THREE.Mesh(geometry, material);
    ```
  * An object won't show up unless you add it to a **scene**!
    ```javascript
    scene.add(mesh);
    ```

#### Camera
* a theoretical point of view used when rendering
* can have multiple but usually we only use one
* many types and settings
* PerspectiveCamera (if an object is close, it should be bigger; if further away, should be smaller)
  ```javascript
  // field of view (how large your vision angle is)
  // aspect ratio (width divided by height)
  const sizes = {
    width: 800,
    height: 600,
  };

  const fieldOfView = 75 // 75 is actually huge
  const aspectRatio = sizes.width / sizes.height;

  const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio); 
  ```
* Again, got to add it to the scene!
  ```javascript
  scene.add(camera);
  ```
* `lookAt` to tell the camera where to look
  ```javascript
  // camera.lookAt(new THREE.Vector3(-2, 0, 0)); // provide a vector 3 (coordinates) to look at
  camera.lookAt(mesh.position); // look at the centre of my object
  ```

#### Renderer
* Will render the scene seen from the camera's POV
* Result/stuff will be drawn/rendered INSIDE the canvas
  ```html
  <!-- HTML -->
  <canvas class='webgl'></canvas>
  ```
  ```javascript
  // JavaScript
  const canvas = document.querySelector('canvas.webgl');
  ```
* Default renderer: **WebGL Renderer**
  ```javascript
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  ```

## Transforming Objects

* There are 4: **position**, **scale**, **rotation**, and **quarternion**
* These properties (of a Mesh) 👆 will be compiled into *matrices*. Indivudually they're vectors (2D or 3D) or Eulers
* Combining Transformations with those 4 can be done in any order
* You can put objects inside groups and use the transformations on the group as a whole (so that you don't have to transform each individual object!!)


#### Position
* Lets you move objects
* Has to be done BEFORE rendering
* Inherits from (therefore is a) Vector3 (a class representing things in space)
  ```javascript
  // ---- //
  mesh.position.x = 0.7;
  mesh.position.y = -0.6;
  mesh.position.z = 1;
  // 👆 same same 👇
  mesh.position.set(0.7, -0.6, 1);
  // ---- //
  ```

#### Scale
* Size of the object
* The scale property (of a Mesh) is (an instance of) a Vector3 (ie. 3D vector)
  ```javascript
  mesh.scale.x = 2;
  mesh.scale.y = 0.5;
  mesh.scale.z = 0.5;
  // 👆 same same 👇
  mesh.scale.set(2, 0.5, 0.5);
  ```

#### Rotation
* 2 ways of doing it (Rotation and Quaternion)
* Rotation is an **Euler**, NOT a Vector3
* Measurement is in radians! so 3.1416 = π = 180° = half a circle (`Math.PI`)
* ORDER MATTERS: `y` is applied first (left right etc), THEN `x` (up, down etc)
  ```
  mesh.rotation.reorder('YXZ')
  ```

#### Quaternion
* [Docs](https://threejs.org/docs/#api/en/math/Quaternion)
* Makes rotations easier / more mathematical
