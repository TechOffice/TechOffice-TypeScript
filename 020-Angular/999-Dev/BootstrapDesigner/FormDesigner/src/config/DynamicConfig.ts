import { ComponentType } from "../model/ComponentType";


export default class DynamicConfig{

    private type: ComponentType;
    private value: any;
    private items: DynamicConfig[] = [];
    private parent: DynamicConfig;

    public getType(): ComponentType{
        return this.type;
    }

    public setType(type: ComponentType): void{
        this.type = type;
    }

    public getItems(): DynamicConfig[]{
        return this.items;
    }

    public setItems(items: DynamicConfig[]){
        this.items = items;
    }

    public setValue(value: any){
        this.value = value;
    }

    public getValue(): any{
        return this.value;
    }

    public setParent(parent: DynamicConfig){
        this.parent = parent;
    }

    public getParent(): DynamicConfig{
        return this.parent;
    }

    public assign(json: any): void{
        this.type = json["type"];
        this.value = json["value"];
        if (this.type == ComponentType.CONTAINER){
            if (json["items"] instanceof Array){
                let items: any[] = json["items"]
                for (var i=0; i<items.length; i++){
                    var item = items[i];
                    let dynamicConfig: DynamicConfig = new DynamicConfig();
                    dynamicConfig.setParent(this);
                    dynamicConfig.assign(item);
                    this.items.push(dynamicConfig);
                }
            }
        }
    }

    public toJson(): String{
        return JSON.stringify(this, function(key, value){
            if (key != 'parent'){
                return value;
            }
        });
    }
}