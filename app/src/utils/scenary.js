import load from './load';
import baner from './baner';


function scenary(){
    document.body.onload = function() {
        baner();
        load();
    }
}

export default scenary()