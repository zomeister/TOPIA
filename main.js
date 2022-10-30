/**
 * @overview manages configuration for rendering scene with three.js
 */

import * as THREE from 'three';

/**
* INIT
*   - Instantiate window(dimensions), camera (position) for scene.
*   - Create/Instantiate/Load & Create new geometry, material, mesh, and renderer Object (in not already existing).
*   - Attach renderer to the DOM element.
*/

let fov = 45;
let asp = window.width / window.height;
let near = 1
let far = 1000

const camera = (fov, asp, near, far) => new THREE.perspectiveCamera(fov, asp, near, far);
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}


/**
 * ANIMATE(time)
 *  - 
 */