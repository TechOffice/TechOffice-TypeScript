import ArrayUtil from "../util/ArrayUtil";


export class Store{
    
    private stateTriggers: any[];

    constructor(){
        this.stateTriggers = [];
    }
    
    addStateTrigger(stateTrigger){
        this.stateTriggers.push(stateTrigger);
    }

    removeStateTrigger(stateTrigger){
        ArrayUtil.remove(this.stateTriggers, stateTrigger);
    }

    update(obj){
        for (var i=0; i<this.stateTriggers.length; i++){
            var stateTrigger = this.stateTriggers[i];
            stateTrigger(obj);
        }
    }

}