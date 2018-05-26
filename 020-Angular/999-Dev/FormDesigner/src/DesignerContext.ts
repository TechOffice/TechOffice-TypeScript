import DynamicContainerComponent from "./DynamicContainerComponent";
import DesingerAttributeComponent from "./DesignerAttributeComponent";


export default class DesignerContext{

    private static instance = new DesignerContext();

    public static getInstance(): DesignerContext{
        return DesignerContext.instance;
    }

    private DesignerContext(){}

    private component: DynamicContainerComponent;
    private attributeComponent: DesingerAttributeComponent;

    public setComponent(component: DynamicContainerComponent){
        this.component = component;
        this.attributeComponent.updateSelectedComponent(component);
    }

    public getComponent(): DynamicContainerComponent{
        return this.component;
    }

    public setAttributeComponent(attributeComponent: DesingerAttributeComponent){
        this.attributeComponent = attributeComponent;
    }

    public getAttributeComponent(): DesingerAttributeComponent{
        return this.attributeComponent;
    }
    
}   