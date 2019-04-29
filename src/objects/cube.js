import * as THREE from 'three';

export class Cube{
    constructor({size=1, position} = {}){
        this.geometry = new THREE.BoxGeometry(size,size,size);
        this.material = new THREE.MeshNormalMaterial();
        this.threeObject = new THREE.Mesh(this.geometry, this.material);
        this.threeObject.position.copy(position || new THREE.Vector3());
        this.threeObject.userData.object = this;
    }

    update(delta){
        this.threeObject.rotation.x += 0.01;
        this.threeObject.rotation.y += 0.01;
    }
}