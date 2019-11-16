export function binarySearch<T>(element: T, array: T[], comparer: (p1: T, p2: T) => number): boolean {
    let start = 0;
    let end = array.length-1; 
    
    while (start<=end){ 
        let mid = Math.floor((start + end)/2); 
        let compareResult = comparer(element, array[mid]);
        if (compareResult === 0) {
            return true; 
        }
        else if (compareResult < 0) {
            start = mid + 1; 
        }
        else {
            end = mid - 1; 
        }
    } 
    return false; 
}

