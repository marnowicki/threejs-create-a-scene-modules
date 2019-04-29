import { Cube } from './objects/cube';
import { Engine } from './engine';

const engine = new Engine();
engine.add(new Cube);

document.body.appendChild(engine.domElement);
engine.start();



