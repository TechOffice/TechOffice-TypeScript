
export default class DrapDropContext{
    
    private static instance = new DrapDropContext();

    public static getInstance(): DrapDropContext{
        return DrapDropContext.instance;
    }

    private id: String;

    public setId(id: String): void{
        this.id = id;
    }

    public getId(): String{
        return this.id;
    }

}