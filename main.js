const arr = [ 11, 6, 7, 3, 9, 5, 30]

console.log(arr.sort((e1, e2) => e1 - e2).reverse().slice(1).concat(15))