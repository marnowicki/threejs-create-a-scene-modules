import * as WEBGL from 'exports-loader?WEBGL!three/examples/js/WebGL.js';
import * as THREE from 'three'

export class Engine {
    constructor({ parent = window, FOV = 60 } = {}) {
        this.parent = parent;
        this.FOV = FOV;
        this.aspect = parent.innerWidth / parent.innerHeight;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(parent.innerWidth, parent.innerHeight);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(FOV, this.aspect, 0.1, 1000);
        this.clock = new THREE.Clock();

        this.camera.position.z = 5;

        this.animateBinded = this.animate.bind(this);

        this.resizeRemove = this.addEventListener(this.parent, 'resize', this.resize);

        this.webGLAvaliable = WEBGL.isWebGLAvailable();
    }

    addEventListener(parent, event, listener) {
        let l = listener.bind(this);
        parent.addEventListener(event, l, false);
        return () => {
            parent.removeEventListener(event, l, false);
        }
    }

    dispose() {
        this.resizeRemove();
    }

    resize() {
        this.aspect = this.parent.innerWidth / this.parent.innerHeight;
        this.camera.aspect = this.aspect;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.parent.innerWidth, this.parent.innerHeight);
    }

    get domElement() {
        if (this.webGLAvaliable) {
            return this.renderer.domElement;
        } else {
            return WEBGL.getWebGLErrorMessage();
        }
    }

    start() {
        this.animate();
    }

    animate() {
        const delta = this.clock.getDelta();
        requestAnimationFrame(this.animateBinded);
        this.scene.traverse(obj => {
            if (obj.userData.object && obj.userData.object.update) {
                obj.userData.object.update(delta);
            }
        });
        this.renderer.render(this.scene, this.camera);
    }

    add(object) {
        object && this.scene.add(object.threeObject || object);
    }
}