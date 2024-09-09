# Three.js Journey

## 🧙 4 elements
### Scenes
* like a container we put objects, models, particles, lights etc in
  ```javascript
  const scene = new THREE.Scene()
  ```

### Objects 
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

### Camera
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

### Renderer
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

