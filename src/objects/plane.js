import * as THREE from 'three';

export class Plane {
    constructor({ size = 1, position } = {}) {
        this.geometry = new THREE.PlaneGeometry(size, size);
        this.geometry.rotateX(THREE.Math.degToRad(-90));
        this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
        this.threeObject = new THREE.Mesh(this.geometry, this.material);
        this.threeObject.position.copy(position || new THREE.Vector3());
        this.threeObject.userData.object = this;
    }
}