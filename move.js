import {matrix, SIZE} from "./index.js";

const shift=(array, SIZE)=> {
    function filterArray(arr) {
        return arr.filter(el => el !== 0)
    }
    array = filterArray(array);

    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === array[i + 1]) {
                array[i] *= 2
                array[i + 1] = 0
            }
        }
    }
    array = filterArray(array);
    while (array.length < SIZE) {
        array.push(0)
    }
    return array
}

const swap=(y, x)=> {
    const number = matrix[y][x]
    matrix[y][x] = matrix[x][y]
    matrix[x][y] = number
}

const transposel=()=> {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < i; j++) {
            swap(i, j)
        }
    }
}

export const moveDown=()=> {
    transposel()
    let check = moveRight()
    transposel()
    return check
}

export const moveUp=()=> {
    transposel()
    let check = moveLeft()
    transposel()
    return check
}

export const moveLeft=()=> {
    let check = false
    for (let i = 0; i < SIZE; i++) {
        let oldMatrix = Array.from(matrix[i])
        matrix[i] = shift(matrix[i], SIZE)
        check = check ||(matrix[i].join(',')!== oldMatrix.join(','))
    }
    return check
}

export const moveRight=()=> {
    let check = false
    for (let i = 0; i < SIZE; i++) {
        let oldMatrix = Array.from(matrix[i])
        let reverseMatrix = matrix[i].reverse()
        reverseMatrix = shift(matrix[i], SIZE)
        matrix[i] = reverseMatrix.reverse()
        check = check ||(matrix[i].join(',')!== oldMatrix.join(','))
    }
    return check
}
