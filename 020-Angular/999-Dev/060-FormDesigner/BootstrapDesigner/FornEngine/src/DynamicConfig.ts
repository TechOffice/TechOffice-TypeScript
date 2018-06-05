import { ComponentType } from "./ComponentType";


export default class DynamicConfig{

    private type: ComponentType;
    private items: DynamicConfig[] = [];

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

    public assign(json: any): void{
        
        this.type = json["type"];
        if (this.type == ComponentType.CONTAINER){
            if (json["items"] instanceof Array){
                let items: any[] = json["items"]
                for (var i=0; i<items.length; i++){
                    var item = items[i];
                    let dynamicConfig: DynamicConfig = new DynamicConfig();
                    dynamicConfig.assign(item);
                    this.items.push(dynamicConfig);
                }
            }
        }

    }
}