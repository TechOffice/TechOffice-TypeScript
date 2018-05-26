import DynamicContainerComponent from "./DynamicContainerComponent";


export default class DesignerContext{

    private static instance = new DesignerContext();

    public static getInstance(): DesignerContext{
        return DesignerContext.instance;
    }

    private DesignerContext(){}

    private component: DynamicContainerComponent;

    public setComponent(component: DynamicContainerComponent){
        this.component = component;
    }

    public getComponent(): DynamicContainerComponent{
        return this.component;
    }

}