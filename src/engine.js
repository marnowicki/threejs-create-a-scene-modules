import * as THREE from 'three'

export class Engine {
    constructor({parent = window, FOV = 60} = {}){
        this.aspect = parent.innerWidth / parent.innerHeight;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(parent.innerWidth, parent.innerHeight);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(FOV, this.aspect, 0.1, 1000);
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