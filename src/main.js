import { Engine } from './engine';
import { Cube } from './objects/cube';
import { Plane } from './objects/plane';

const engine = new Engine();
document.body.appendChild(engine.domElement);
if(engine.webGLAvaliable){
    engine.add(new Cube({size: 1, position: {x:0, y:1, z:0}}));
    engine.add(new Plane({size: 5}));
    engine.start(100);
}
window.addEventListener('keydown', (e)=> {
    if(e.key === 'Enter'){
        engine.toggle();
    }
});



