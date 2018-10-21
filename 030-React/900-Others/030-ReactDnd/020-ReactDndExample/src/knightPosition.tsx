import { observer } from "./Observer";

const knightPosition = {
    position: [1, 1],
    getPosition: function(){
        return this.position;
    },
    setPosition(position){
        this.position = position;
        observer.update();
    }
};

export {knightPosition};