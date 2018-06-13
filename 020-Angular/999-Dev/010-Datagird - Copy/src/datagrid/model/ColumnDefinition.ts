export class ColumnDefinition{
    
    name: String;
    label: String;

    constructor(name: String, label?: String){
        this.name = name;
        if (label == null){
            this.label = this.name;
        }else {
            this.label = this.name;
        }
    }

    getName(): String{
        return this.name;
    }

    setName(name: String): void{
        this.name = name;
    }

    getLabel(): String{
        return this.label;
    }

    setLabel(label: String): void{
        this.label = label;
    }

}