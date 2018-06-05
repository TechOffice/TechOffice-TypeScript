import { ComponentType } from "../model/ComponentType";
import { Component } from "@angular/core/src/metadata/directives";


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

    public toXml(): String{
        if (this.getType() == ComponentType.CONTAINER){
            var startTag = "<div"
            if (this.getValue() =="row"){
                startTag = startTag + " class=\"row\"";
            }else if(this.getValue() =="col"){
                startTag = startTag + " class=\"col\"";
            }
            startTag = startTag + ">";
            var content = "";
            for (var i=0; i<this.getItems().length; i++){
                let item: DynamicConfig = this.getItems()[i];
                content = content + item.toXml();
            }
            var endTag = "</div>";
            return startTag + content + endTag 
        }else{
            if (this.getType() == ComponentType.INPUT){
                return "<input/>"
            }
            if (this.getType() == ComponentType.BUTTON){
                return "<button>"+this.getValue()+"</button>"
            }
            if (this.getType() == ComponentType.LABEL){
                return "<label>"+this.getValue()+"</label>"
            }
            if (this.getType() == ComponentType.TABLE){
                return "<table class=\"table\"><thead><tr><td class=\"col\">Column 1</td><td class=\"col\">Column 2</td></tr></thead><tbody><tr><td>Value 1</td><td>Value 2</td></td></tr><tr><td>Value 1</td><td>Value 2</td></td></tr></tbody></table>";
            }
        }
        return "";
    }
}