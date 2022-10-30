# THREE.JS
____

## 1. **Creating a Scene**
____
### A. **`Camera`** an abstract base class for cameras; inherit when building new camera class, the following cameras are provided by three.js. Inderits from `Object3d`. (vec3, mat4)
- +matrixWorldInverse, +projectionMatrix, +projectionsMatrixInverse
- #clone(), #copy(), #getWorldDirection

#### **`PerspectiveCamera`** - Uses *perspective projection* to mimic user/human perspective (very common) (#3d #3dim #surface #xyz)

##### **INSTANTIATION**
``` JS
    const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
    scene.add( camera );
```

**Constructor**

    fov — Camera frustum vertical field of view.
    aspect — Camera frustum aspect ratio.
    near — Camera frustum near plane.
    far — Camera frustum far plane.
#### **`OrthographicCamera`** - Uses *orthographic projection*, typically used to render 2D scenes and UI elements (#2d #2dim #xy).



#### **`CubeCamera`** - Creates 6 cameras that render to a `WebGLCubeRenderTarget`.



#### **`ArrayCamera`** - Utility class to facilitate scene rendering with predefined set of cameras, (#vr #virtualreality)


#### **`StereoCamera`** - Dual PerspectiveCameras used for effects such as 3D Anaglyph or Parallax Barrier.




____
## A. OpenGL
Graphics Rendering Pipeline
![How does OpenGL communicate with the GPU?](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Linux_kernel_and_OpenGL_video_games.svg/1280px-Linux_kernel_and_OpenGL_video_games.svg.png "Graphics Rendering Pipeline")


### 1. Creating a scene

### 2. Rendering

### 3. Shaders

### 4. Compatibility

### 5. Geometry

### 6. Notes

### *See Also:*


## WebGL
### 1. Creating a scene

### 2. Rendering

### 3. Shaders

### 4. Compatibility

### 5. Geometry

### 6. Notes

### *See Also:*




## WebGPU
### 1. Creating a scene

### 2. Rendering

### 3. Shaders

### 4. Compatibility

### 5. Geometry

### 6. Notes

### *See Also:*


____

## three.js
### 1. Creating a scene

### 2. Rendering

### 3. Shaders

### 4. Compatibility

### 5. Geometry

### 6. Notes

### *See Also:*



## react
### 1. Creating a scene

### 2. Rendering

### 3. Shaders

### 4. Compatibility

### 5. Geometry

### 6. Notes

### *See Also:*


____

## react-three-fiber
### 1. Creating a scene

### 2. Rendering

### 3. Shaders

### 4. Compatibility

### 5. Geometry

### 6. Notes

### *See Also:*


____
## HTML/CSS
### 1. Creating a scene

### 2. Rendering

### 3. Shaders

### 4. Compatibility

### 5. Geometry

### 6. Notes

### *See Also:*


____


