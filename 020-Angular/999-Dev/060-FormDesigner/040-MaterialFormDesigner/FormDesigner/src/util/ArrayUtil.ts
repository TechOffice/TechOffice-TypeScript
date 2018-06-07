


export default class ArrayUtil{
    
    private ArrayUtil(){}

    public static addAfter(arr: any[], newElement: any, element: any): any[]{
        let index = arr.indexOf(element);
        let removedArray = arr.splice(index, arr.length - 1, newElement);
        for (var i=0; i<removedArray.length; i++){
            arr.push(removedArray[i]);
        }
        return arr;
    }

    public static move(arr: any[], element: any, direction: number){
        let elementIndex = arr.indexOf(element);
        let index = elementIndex + direction - 1;
        if (index > -1){
            arr.splice(index, 1);
            let targetElement = arr[index];
            ArrayUtil.addAfter(arr, element, targetElement);
        }
    }
    
}