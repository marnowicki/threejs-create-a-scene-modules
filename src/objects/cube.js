import * as THREE from 'three';

export class Cube{
    constructor(){
        this.geometry = new THREE.BoxGeometry(1,1,1);
        this.material = new THREE.MeshNormalMaterial();
        this.threeObject = new THREE.Mesh(this.geometry, this.material);
        this.threeObject.userData.object = this;
    }

    update(){
        this.threeObject.rotation.x += 0.01;
        this.threeObject.rotation.y += 0.01;
    }
}