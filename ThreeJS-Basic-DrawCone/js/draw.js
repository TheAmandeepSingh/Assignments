/**
 * Basic THREEJS script to draw cone and a triangle face
 * References:
 * https://threejs.org/docs/#api/en/geometries/ConeGeometry
 * https://threejs.org/docs/#api/en/math/Triangle
 * https://threejs.org/docs/#api/en/extras/core/Shape
 */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// cone
const geometry1 = new THREE.ConeGeometry( 2, 7, 32 );
const material = new THREE.MeshBasicMaterial( {color: 'darkred'} );
const cone = new THREE.Mesh( geometry1, material );
scene.add( cone );


// triangle face
const coordinatesList = [
    new THREE.Vector3(2, 2, 2),
    new THREE.Vector3(10, 2, 2),
    new THREE.Vector3(10, 10, 2),
  ];
  
const geometry2 = new THREE.ShapeGeometry(new THREE.Shape(coordinatesList));
const material2 = new THREE.MeshBasicMaterial({color:"blue"});
const triangle = new THREE.Mesh(geometry2, material2);
scene.add(triangle);

camera.position.z = 15;

function animate() {
    requestAnimationFrame( animate );

    cone.rotation.x += 0.005;
    cone.rotation.y += 0.005;

    // trying not to overlap
    //triangle.rotation.z += 0.005;

    renderer.render( scene, camera );
};

animate();