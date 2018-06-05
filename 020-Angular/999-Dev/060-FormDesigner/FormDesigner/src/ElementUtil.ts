
export default class ElementUtil{

    private ElementUtil(){}

    public static isParentElement(parentElement: any, childElement: any){
        if (childElement.parentElement){
            if (childElement.parentElement == parentElement){
                return true;
            }else {
                return ElementUtil.isParentElement(parentElement, childElement.parentElement);
            }
        }
        return false;
    }
}