import * as THREE from 'three'

export class Engine {
    constructor(parent){
        this.parent = parent || window;
        this.aspect = this.parent.innerWidth / this.parent.innerHeight;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.parent.innerWidth, this.parent.innerHeight);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.aspect, 0.1, 1000);
        this.clock = new THREE.Clock();

        this.camera.position.z = 5;

        this.animateBinded = this.animate.bind(this);
    }

    get domElement(){
        return this.renderer.domElement;
    }

    start(){
        this.animate();
    }

    animate(){
        const delta = this.clock.getDelta();
        requestAnimationFrame(this.animateBinded);
        this.scene.traverse(obj => {
            if (obj.userData.object && obj.userData.object.update) {
                obj.userData.object.update(delta);
            }
        });
        this.renderer.render(this.scene, this.camera);
    }

    add(object){
        if(object)
            this.scene.add(object.threeObject || object);
    }
}