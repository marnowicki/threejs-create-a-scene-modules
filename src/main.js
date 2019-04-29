
import * as WEBGL from 'exports-loader?WEBGL!three/examples/js/WebGL.js';
import { Cube } from './objects/cube';
import { Engine } from './engine';

const engine = new Engine();
engine.add(new Cube);

if(WEBGL.isWebGLAvailable()){
    document.body.appendChild(engine.domElement);
    engine.start();
}else{
    var warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild( warning );
}

