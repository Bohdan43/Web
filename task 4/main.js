function findUnique(arr) {
    const uniqueElements = new Set(arr);

    return uniqueElements.size === arr.length;
}

console.log(findUnique([1, 2, 3, 4, 5]));  
console.log(findUnique([1, 2, 2, 4, 5]));  
console.log(findUnique(['a', 'b', 'c', 'd']));  
console.log(findUnique(['a', 'b', 'c', 'a']));  
