
/**
 * Array Utility 
 * 
 * @author Tech Office
 */
export default class ArrayUtil{
    
    /**
     * Remove Element from an Array 
     * @param array 
     * @param element 
     */
    static remove(array, element){
        for (var i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1);
                i--;
            }
        }
        return array;
    }

}