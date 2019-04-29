import { Cube } from './objects/cube';
import { Engine } from './engine';

const engine = new Engine();
document.body.appendChild(engine.domElement);
if(engine.webGLAvaliable){
    engine.add(new Cube);
    engine.start();
}




