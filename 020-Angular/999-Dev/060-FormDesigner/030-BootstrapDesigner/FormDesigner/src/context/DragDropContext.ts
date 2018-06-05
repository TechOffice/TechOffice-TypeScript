import DynamicContainerComponent from "../designer/DynamicContainerComponent";




export default class DrapDropContext{
    
    private static instance = new DrapDropContext();

    public static getInstance(): DrapDropContext{
        return DrapDropContext.instance;
    }

    private component: DynamicContainerComponent;

    public setComponent(component: DynamicContainerComponent): void{
        this.component = component;
    }

    public getComponent(): DynamicContainerComponent{
        return this.component;
    }

}