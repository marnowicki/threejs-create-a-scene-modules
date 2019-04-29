import * as THREE from 'three';
import * as WEBGL from 'exports-loader?WEBGL!three/examples/js/WebGL.js';
import { Cube } from './objects/cube';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const clock = new THREE.Clock();

const cube = new Cube();
scene.add(cube.threeObject);

camera.position.z = 2;

const animate = () => {
    const delta = clock.getDelta();
    requestAnimationFrame(animate);

    scene.traverse(obj => {
        if(obj.userData && obj.userData.object && obj.userData.object.update){
            obj.userData.object.update(delta);
        }
    });

    renderer.render(scene, camera);
}

if(WEBGL.isWebGLAvailable()){
    document.body.appendChild(renderer.domElement);
    animate();
}else{
    var warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild( warning );
}

